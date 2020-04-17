#!/usr/bin/env sh

# throw error
set -e

# build static
npm run build
cd .vuepress/dist
echo 'club.cloudbase.net' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f "https://dongyuanxin:$TCB_BLOG_TOKEN@github.com/TencentCloudBase/TencentCloudBase.github.io.git" master:master

cd -

rm -rf .vuepress/dist