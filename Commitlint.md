#### 1、 [commitizen](https://commitlint.js.org/#/guides-local-setup)：提供cz规范

commitizen：是一个命令行提示工具( git cz)
cz-conventional-changelog：预设的是 [Angular团队](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fangular%2Fangular.js%2Fblob%2Fmaster%2FDEVELOPERS.md%23commits) 规范

```
// 1、安装 commitizen
npm install -g commitizen // 全局
npm install -D commitizen // 局部

// 2、初始化您的项目以使用 cz-conventional-changelog 适配器
# npm
commitizen init cz-conventional-changelog --save-dev --save-exact
# yarn
commitizen init cz-conventional-changelog --yarn --dev --exact
# pnpm 
commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact

// 2、在package.json中配置config.commitizen.path(--save-exact会自动添加)
{ 
  ... 
  "config": { 
    "commitizen": {
      "path": "cz-conventional-changelog"
    } 
  } 
}
```


***


#### 2、[husky: git hooks]()

```
// 1、安装 husky
npm install husky --save-dev

// 2、安装 husky git hooks
npx husky install
scripts："prepare": "husky install"
npm run prepare

// 3、测试 husky 钩子作用，添加 pre-commit 钩子
npm install husky --save-dev
```


***


#### 3、[commitlint: 检测 commit msg](https://www.npmjs.com/package/@commitlint/config-conventional)

```
// 1、安装
$ npm i -D @commitlint/config-conventional @commitlint/cli

// 2、配置husky：commit-msg
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}' 


// 3、配置 .commitlintrc.js、commitlint.config.js 文件
// echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
module.exports = {    
  extends: [        
    "@commitlint/config-conventional",
    "cz"    
  ],
  rules: {
    // Header 
    "header-max-length": [2, "always", 200],
    // <type>枚举
    "type-enum": [2, "always", [
      "init",
      "feat",
      "fix",
      "ui",
      "refactor",
      "replace",
      "deploy",
      "docs",
      "test",
      "chore",
      "style",
      "revert",
      "add",
      "minus",
      "del"
    ]],
    "type-empty": [2, "never"], // <type> 不能为空
    "type-case": [2, "always", "lower-case"], // <type> 格式 小写 
    "scope-empty": [2, "never"], // <scope> 不能为空
    "scope-case": [2, "always", "lower-case"], // <scope> 格式 小写
    "subject-empty": [2, "never"], // <subject> 不能为空
    "subject-full-stop": [2, "never", "."], // <subject> 以.为结束标志
    // <subject> 格式
    // 可选值
    // 'lower-case' 小写 lowercase
    // 'upper-case' 大写 UPPERCASE
    // 'camel-case' 小驼峰 camelCase
    // 'kebab-case' 短横线 kebab-case
    // 'pascal-case' 大驼峰 PascalCase
    // 'sentence-case' 首字母大写 Sentence case
    // 'snake-case' 下划线 snake_case
    // 'start-case' 所有首字母大写 start-case
    "subject-case": [2, "never", []],
    // <body> 以空行开头
    "body-leading-blank": [1, "always"],
    // <footer> 以空行开头
    "footer-leading-blank": [1, "always"]
  }
}
```

***


#### 4、[自定义 git commit 规范](https://www.npmjs.com/package/commitlint-config-cz)

```
// 1、安装
$ npm i -D commitlint-config-cz  cz-customizable

// 2、commitlint.config.js中新增 cz 规范


// 3、package.json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
},

// 4、.cz-config.js
module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨ feat:     新功能'
    },
    {
      value: 'fix',
      name: '🐛 fix:      修复bug'
    },
    {
      value: 'init',
      name: '🎉 init:     初始化'
    },
    {
      value: 'docs',
      name: '✏️  docs:     文档变更'
    },
    {
      value: 'style',
      name: '💄 style:    代码的样式美化'
    },
    {
      value: 'refactor',
      name: '♻️  refactor: 重构'
    },
    {
      value: 'perf',
      name: '⚡️ perf:     性能优化'
    },
    {
      value: 'test',
      name: '✅ test:     测试'
    },
    {
      value: 'revert',
      name: '⏪️ revert:   回退'
    },
    {
      value: 'build',
      name: '📦️ build:    打包'
    },
    {
      value: 'chore',
      name: '🚀 chore:    构建/工程依赖/工具'
    },
    {
      value: 'ci',
      name: '👷 ci:       CI related changes'
    }
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: [':sparkles: feat', ':bug: fix'],
  subjectLimit: 72
}
```

***


#### 5、根据 commit 信息生成 changelog

**standard-version（自动生成、打tag）**
安装后，只需要 npm run release，就可以有 npm run version 的功能，而且提交信息是标准的 commitizen 规范，而且自动生成 changelog 自动打 tag，自动 commit。你只需要 push 即可。

```
// 安装
npm install standard-version --save-dev

// scripts 设置
"release": "standard-version"

// 执行
npm run release
```

**release 特定版本** 
对于版本号信息，参考 [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version/) 文档

```
# 0.4.1
npm run release # 0.4.1 => 0.4.2
npm run release -- --prerelease # 0.4.2 to 0.4.3-0
npm run release # 0.4.3-0 to 0.4.3
npm run release -- --prerelease alpha # 0.4.3 to 0.4.4-alpha.0

# patch、minor、major
npm run release -- --release-as minor  # 0.4.4-alpha.0 to 0.5.0
npm run release -- --release-as patch # 0.5.0 to 0.5.1
npm run release -- --release-as major # 0.5.1 to 1.0.0
npm run release -- --release-as prepatch # 1.0.0 to 1.0.1-0
npm run release -- --release-as preminor # 1.0.1-0 to 1.1.0-0
npm run release -- --release-as premajor # 1.1.0-0 to 2.0.0-0

# 手动指定版本
npm run release -- --release-as 2.1.3-alpha.1 # 2.0.0-0 to 2.1.3-alpha.1
# ✔ bumping version in package.json from 2.0.0-0 to 2.1.3-alpha.1
# ✔ bumping version in package-lock.json from 2.0.0-0 to 2.1.3-alpha.1
# ✔ tagging release v2.1.3-alpha.1

npm run release # 2.1.3-alpha.1 to 2.2.0
```

