@echo off
echo ============================================
echo   Tesla DIY Repair Blog - Build Script
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo   1. Go to https://nodejs.org
    echo   2. Download the LTS version
    echo   3. Run the installer
    echo   4. Restart your computer
    echo   5. Run this script again
    echo.
    pause
    exit /b 1
)

echo Node.js found:
node --version
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Build the site
echo Building website...
npm run build

if %ERRORLEVEL% neq 0 (
    echo.
    echo ERROR: Build failed! Check the error messages above.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   BUILD SUCCESSFUL!
echo ============================================
echo.
echo Your website is ready in the "_site" folder.
echo.
echo NEXT STEPS:
echo   1. Go to https://netlify.com
echo   2. Sign up for a free account
echo   3. Click "Add new site" then "Deploy manually"
echo   4. Drag and drop the "_site" folder
echo   5. Your site is live!
echo.
echo Would you like to preview the site locally? (Y/N)
set /p PREVIEW=

if /i "%PREVIEW%"=="Y" (
    echo.
    echo Starting local preview server...
    echo Open http://localhost:8080 in your browser
    echo Press Ctrl+C to stop the server
    echo.
    npm run start
)

pause
