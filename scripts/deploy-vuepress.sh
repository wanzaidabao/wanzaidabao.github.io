#!/bin/bash

# 定义项目的根目录绝对路径
PROJECT_ROOT="/home/jim/gitrepo/cn2tw.online"

# 切换到目录
cd "$PROJECT_ROOT/"

# 检查是否在 master 分支上
git checkout master


# 构建网站（交由 github action处理，故略）
# pnpm docs:build

# 提交更改

git commit -m "Erick@`hostname -s`,`date "+%Y%m%d %H:%M"`"

# 推送到远程 gh-pages 分支
git push --set-upstream origin master --force

