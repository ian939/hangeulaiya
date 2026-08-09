"""아이야 한글놀이 서버.

start.bat 이 이걸 부른다. 접속 주소를 찾아 보여주고 폴더를 서비스한다.

배치 파일에서 ipconfig 를 파싱하지 않는 이유: 중첩 for 루프는 줄바꿈·코드페이지에
민감해서 한글 경로 환경에서 쉽게 깨진다. 파이썬으로 하면 그런 문제가 없다.
"""
from __future__ import annotations

import http.server
import socket
import socketserver
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PORT = 8080


def lan_ips() -> list[str]:
    """이 PC 의 사설 IP 들. 아이패드가 접속할 주소다."""
    found: list[str] = []

    # 기본 경로 — 외부로 나가는 소켓의 로컬 주소를 본다 (실제 전송은 없다)
    for probe in ("8.8.8.8", "1.1.1.1"):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
                s.settimeout(0.4)
                s.connect((probe, 80))
                ip = s.getsockname()[0]
                if ip not in found:
                    found.append(ip)
                break
        except OSError:
            continue

    # 보조 경로 — 호스트 이름으로 붙은 모든 주소
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            ip = info[4][0]
            if ip.startswith(("10.", "172.", "192.168.")) and ip not in found:
                found.append(ip)
    except OSError:
        pass

    return found


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt, *args):  # 접속 로그를 조용하게
        pass

    def end_headers(self):
        # 회차 데이터를 고쳤을 때 아이패드가 옛 파일을 붙들지 않게 한다
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def main() -> int:
    port = PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass

    bar = "=" * 52
    print()
    print(bar)
    print("  아이야 한글놀이")
    print(bar)
    print()

    ips = lan_ips()
    if ips:
        print("  아이패드 Safari 에서 아래 주소를 여세요:")
        print()
        for ip in ips:
            print(f"      http://{ip}:{port}")
    else:
        print("  [!] 이 PC 의 와이파이 주소를 찾지 못했습니다.")
        print("      명령 프롬프트에서 ipconfig 를 실행해 IPv4 주소를 확인하세요.")
    print()
    print(f"  이 PC 에서 확인하려면:  http://localhost:{port}")
    print()
    print("  ● 아이패드와 이 PC 가 같은 와이파이여야 합니다.")
    print('  ● 처음 열었으면 공유 버튼(⬆) → "홈 화면에 추가" 를 꼭 해 주세요.')
    print("    그러지 않으면 7일 뒤에 진도가 지워질 수 있습니다.")
    print()
    print("  끝낼 때는 이 창을 닫거나 Ctrl+C 를 누르세요.")
    print(bar)
    print()

    try:
        with Server(("0.0.0.0", port), Handler) as httpd:
            httpd.serve_forever()
    except OSError as exc:
        print(f"  [!] 포트 {port} 를 열 수 없습니다: {exc}")
        print(f"      이미 켜져 있는 창이 없는지 확인하거나, 다른 포트로 실행하세요:")
        print(f"      start.bat 대신  python tools/serve.py 8081")
        return 1
    except KeyboardInterrupt:
        print("\n  서버를 멈췄습니다.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
