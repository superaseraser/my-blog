@echo off
title 正在更新我的学术主页...
echo ---------------------------------------
echo 🚀 开始同步代码到 GitHub...
echo ---------------------------------------

:: 1. 把所有改动都存起来
git add .

:: 2. 提交改动，备注会自动带上日期
set msg=Update at %date% %time%
git commit -m "%msg%"

:: 3. 推送到云端
echo 📤 正在上传，请稍候...
git push origin main

echo ---------------------------------------
echo ✅ 发布成功！Vercel 正在后台为你更新。
echo 💡 预览地址: https://chuanbaozheng.com
echo ---------------------------------------
pause