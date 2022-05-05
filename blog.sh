rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "更新优化" &&
git branch -M master &&
git remote add origin git@github.com:changyulong1/hammer.git
git push -f -u origin master &&
# git push -u origin master
cd -
# echo https://changyulong1.github.io/guIu-1/
