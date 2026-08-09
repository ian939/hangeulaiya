@echo off
chcp 65001 >nul
cd /d "%~dp0"

python -u "%~dp0tools\serve.py" %*
if errorlevel 1 goto err
goto :eof

:err
echo.
echo  [!] 실행에 실패했습니다.
echo      python 이 설치되어 있는지 확인해 주세요: https://www.python.org
echo.
pause
