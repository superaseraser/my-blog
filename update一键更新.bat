@echo off
:: 设置编码为简中，防止乱码
chcp 65001 >nul
title 正在更新我的学术主页...

echo ---------------------------------------
echo 开始同步代码到 GitHub...
echo ---------------------------------------

:: 1. 暂存所有更改
git add .

:: 2. 自动提交
set msg=Update at %date% %time%
git commit -m "%msg%"

:: 3. 推送到云端 (注意这里改成了 master)
echo 正在上传，请稍候...
git push origin master

echo ---------------------------------------
echo 恭喜！代码已成功推送到 GitHub。
echo Vercel 正在后台为你更新。
echo ---------------------------------------
pause