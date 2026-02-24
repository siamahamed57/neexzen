@echo off
title NEEXZEN Software Environment
color 0A
cls

echo.
echo ===============================================================
echo                      NEEXZEN SOFTWARE SYSTEM
echo ===============================================================
echo  Founder     : Mohammad Ibrahim Khalil
echo  Company     : NEEXZEN
echo  Location    : Bangladesh
echo  Services    : Web Dev ^| UI/UX ^| Security ^| SEO ^| SaaS
echo ===============================================================
echo.

echo Initializing Secure Development Environment...
timeout /t 2 >nul
echo Loading Core Modules...
timeout /t 2 >nul
echo Connecting to Project Workspace...
timeout /t 2 >nul
echo.

echo ===============================================================
echo                    SELECT PROJECT TYPE
echo ===============================================================
echo  1. Web Development Project
echo  2. MERN Stack Application
echo  3. WordPress Project
echo  4. Security / Cyber Project
echo  5. AI / Machine Learning Project
echo  6. Exit
echo ===============================================================
echo.

set /p choice=Enter your choice:

if "%choice%"=="1" goto web
if "%choice%"=="2" goto mern
if "%choice%"=="3" goto wp
if "%choice%"=="4" goto security
if "%choice%"=="5" goto ai
if "%choice%"=="6" exit

:web
cls
echo Starting NEEXZEN Web Development Environment...
start cmd /k "echo NEEXZEN Web Project && code ."
goto end

:mern
cls
echo Starting NEEXZEN MERN Stack System...
start cmd /k "npm run server"
start cmd /k "npm run client"
goto end

:wp
cls
echo Launching WordPress Development Environment...
start cmd /k "echo WordPress Project Ready"
goto end

:security
cls
echo Initializing Cyber Security Lab...
start cmd /k "echo Real-Time Cyberattack Detection Module"
goto end

:ai
cls
echo Loading AI & Machine Learning Workspace...
start cmd /k "echo AI System Ready"
goto end

:end
echo.
echo ===============================================================
echo         NEEXZEN SYSTEM SUCCESSFULLY INITIALIZED
echo ===============================================================
pause
