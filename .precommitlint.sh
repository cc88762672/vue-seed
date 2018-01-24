#!/bin/sh

# 检查是否启用eslint
uselint=`less config/index.js | sed s/[[:space:]]//g | grep useEslint:true`
if [ -z "${uselint}" ]
then
  exit 0 # 退出当前shell脚本，0表示正常退出
fi

ECHO_COLOR='\033[1;32m' # 加粗;无底色;绿色字体
ECHO_RESET='\033[0m' # 重置所有属性

# 设置需要校验的branch，默认值为develop，$1表示第一个参数
# branch='develop'
# if [ $1 ]
# then
#   branch=$1
# fi

# 获取需要使用eslint校验的文件列表
# lintlist=`git diff origin/${branch} --name-only | grep -E "\.js$|\.vue$" | grep "^src/"`
lintlist=`git diff HEAD --name-only | grep -E "\.(js|vue)$" | grep src/`

if [ -z "${lintlist}" ]
then
  echo -e "${ECHO_COLOR}> No file need to lint again, skip over eslint.${ECHO_RESET}"
  exit 0 # 退出当前shell脚本，0表示正常退出
fi

echo -e "${ECHO_COLOR}> ESLint running...${ECHO_RESET}"
node ./node_modules/eslint/bin/eslint.js ${lintlist}
