#!/usr/bin/env sh

# 这里是为了看错误日志
set -x  

# 打包项目
npm run build

# 进入打包后的文件夹
cd dist

git init
git add -A
git commit -m 'feat: auto deploy'


# 将打包后的文件推送到指定分支
# git remote add origin https://github.com/mzy911/webpackCli.git

# git push -u origin pages
git config --global http.version HTTP/1.1


git push -f https://github.com/mzy911/webpackCli.git master:pages