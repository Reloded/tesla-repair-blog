@echo off
setlocal enabledelayedexpansion

echo ============================================
echo   Tesla DIY Repair - New Article Creator
echo ============================================
echo.

set /p TITLE="Enter article title (e.g., Tesla Door Handle Fix): "
set /p SLUG="Enter URL slug (e.g., tesla-door-handle-fix): "
set /p DESCRIPTION="Enter short description: "
set /p CATEGORY="Enter category (Electrical/Brakes/HVAC/Maintenance/Troubleshooting/Charging/Tires/Suspension): "
set /p DIFFICULTY="Enter difficulty (Easy/Intermediate/Advanced): "

:: Get today's date
for /f "tokens=1-3 delims=/" %%a in ('echo %date%') do (
    set DAY=%%a
    set MONTH=%%b
    set YEAR=%%c
)
set TODAY=%YEAR%-%MONTH%-%DAY%

:: Create the file
set FILEPATH=src\posts\%SLUG%.md

echo Creating %FILEPATH%...

(
echo ---
echo layout: post.njk
echo title: "%TITLE%"
echo description: "%DESCRIPTION%"
echo date: %TODAY%
echo category: "%CATEGORY%"
echo difficulty: "%DIFFICULTY%"
echo readTime: "10 min read"
echo models: "All Models"
echo emoji: "🔧"
echo tools:
echo   - name: "Tool Name Here"
echo     link: "https://www.amazon.de/s?k=tool+name&tag=diyrepair-21"
echo ---
echo.
echo Write your article content here...
echo.
echo ## Overview
echo.
echo Describe the problem and what this guide covers.
echo.
echo ## What You'll Need
echo.
echo - Tool 1
echo - Tool 2
echo - Replacement part
echo.
echo ## Step-by-Step Guide
echo.
echo ### Step 1: Preparation
echo.
echo Describe the first step...
echo.
echo ### Step 2: The Repair
echo.
echo Describe the repair process...
echo.
echo ### Step 3: Reassembly
echo.
echo Describe how to put everything back together...
echo.
echo ## Tips and Warnings
echo.
echo ^<div class="warning-box"^>
echo ^<strong^>Warning:^</strong^> Add any safety warnings here.
echo ^</div^>
echo.
echo ^<div class="tip-box"^>
echo ^<strong^>Pro Tip:^</strong^> Add helpful tips here.
echo ^</div^>
echo.
echo ## Cost Comparison
echo.
echo ^| Option ^| Cost ^|
echo ^|--------^|------^|
echo ^| Tesla Service ^| $XXX ^|
echo ^| DIY ^| $XX ^|
echo.
echo ---
echo.
echo *Your conclusion here.*
) > %FILEPATH%

echo.
echo ============================================
echo   Article created: %FILEPATH%
echo ============================================
echo.
echo Next steps:
echo 1. Edit the file: src\posts\%SLUG%.md
echo 2. Fill in the content
echo 3. Run: npm run build
echo 4. Push to GitHub (auto-deploys)
echo.
pause
