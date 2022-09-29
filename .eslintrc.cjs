const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
    root: true,
    env: {
        // 环境
        browser: true, // 浏览器环境中的全局变量。
        node: true, // Node.js 全局变量和 Node.js 作用域。
        es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
    },
    parser: 'vue-eslint-parser', // 解析器
    parserOptions: {
        // 解析器配置
        parser: '@typescript-eslint/parser', // 解析器
        ecmaVersion: 'latest', // 5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用年份命名的版本号，你也可以用 latest 来指向最新的版本。
        sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
        jsxPragma: 'React', // 支持 ReactJSX 语法
        ecmaFeatures: {
            // 表示你想使用的额外的语言特性
            jsx: true, // 启用 JSX
            tsx: true,
        },
    },
    // 插件
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended', // 一定要放在最后。因为 extends 中后引入的规则会覆盖前面的规则。
    ],
    rules: {
        // @typescript-eslint
        '@typescript-eslint/explicit-function-return-type': 'off', // 需要函数和类方法的显式返回类型
        '@typescript-eslint/no-explicit-any': 'off', // 禁止使用该 any 类型
        '@typescript-eslint/no-var-requires': 'off', // 不允许使用 require 语句，除了在 import 语句中
        '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
        '@typescript-eslint/no-use-before-define': 'off', // 在定义之前禁止使用变量
        '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用评论或在指令后要求描述
        '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
        '@typescript-eslint/no-non-null-assertion': 'off', // '!'不允许使用后缀运算符的非空断言
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 需要导出函数和类的公共类方法的显式返回和参数类型
        // 禁止未使用的变量
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],

        'prettier/prettier': 'error',

        // 禁止出现console
        'no-console': 'warn',
        // 禁用debugger
        'no-debugger': 'warn',
        // 禁止出现重复的 case 标签
        'no-duplicate-case': 'warn',
        // 禁止出现空语句块
        'no-empty': 'warn',
        // 禁止不必要的括号
        'no-extra-parens': 'off',
        // 禁止对 function 声明重新赋值
        'no-func-assign': 'warn',
        // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        'no-unreachable': 'warn',
        // 强制所有控制语句使用一致的括号风格
        curly: 'warn',
        // 要求 switch 语句中有 default 分支
        'default-case': 'warn',
        // 强制尽可能地使用点号
        'dot-notation': 'warn',
        // 要求使用 === 和 !==
        eqeqeq: 'warn',
        // 禁止 if 语句中 return 语句之后有 else 块
        'no-else-return': 'warn',
        // 禁止出现空函数
        'no-empty-function': 'warn',
        // 禁用不必要的嵌套块
        'no-lone-blocks': 'warn',
        // 禁止使用多个空格
        'no-multi-spaces': 'warn',
        // 禁止多次声明同一变量
        'no-redeclare': 'warn',
        // 禁止在 return 语句中使用赋值语句
        'no-return-assign': 'warn',
        // 禁用不必要的 return await
        'no-return-await': 'warn',
        // 禁止自我赋值
        'no-self-assign': 'warn',
        // 禁止自身比较
        'no-self-compare': 'warn',
        // 禁止不必要的 catch 子句
        'no-useless-catch': 'warn',
        // 禁止多余的 return 语句
        'no-useless-return': 'warn',
        // 禁止变量声明与外层作用域的变量同名
        'no-shadow': 'off',
        // 允许delete变量
        'no-delete-var': 'off',
        // 强制数组方括号中使用一致的空格
        'array-bracket-spacing': 'warn',
        // 强制在代码块中使用一致的大括号风格
        'brace-style': 'warn',
        // 强制使用骆驼拼写法命名约定
        camelcase: 'warn',
        // 强制使用一致的缩进
        indent: 'off',
        // 强制在 JSX 属性中一致地使用双引号或单引号
        // 'jsx-quotes': 'warn',
        // 强制可嵌套的块的最大深度4
        'max-depth': 'warn',
        // 强制最大行数 300
        // "max-lines": ["warn", { "max": 1200 }],
        // 强制函数最大代码行数 50
        // 'max-lines-per-function': ['warn', { max: 70 }],
        // 强制函数块最多允许的的语句数量20
        'max-statements': ['warn', 100],
        // 强制回调函数最大嵌套深度
        'max-nested-callbacks': ['warn', 3],
        // 强制函数定义中最多允许的参数数量
        'max-params': ['warn', 3],
        // 强制每一行中所允许的最大语句数量
        'max-statements-per-line': [
            'warn',
            {
                max: 1,
            },
        ],
        // 要求方法链中每个调用都有一个换行符
        'newline-per-chained-call': [
            'warn',
            {
                ignoreChainWithDepth: 3,
            },
        ],
        // 禁止 if 作为唯一的语句出现在 else 语句中
        'no-lonely-if': 'warn',
        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': 'warn',
        // 禁止出现多行空行
        'no-multiple-empty-lines': 'warn',
        // 禁止出现;
        semi: ['warn', 'never'],
        // 强制在块之前使用一致的空格
        'space-before-blocks': 'warn',
        // 强制在 function的左括号之前使用一致的空格
        // 'space-before-function-paren': ['warn', 'never'],
        // 强制在圆括号内使用一致的空格
        'space-in-parens': 'warn',
        // 要求操作符周围有空格
        'space-infix-ops': 'warn',
        // 强制在一元操作符前后使用一致的空格
        'space-unary-ops': 'warn',
        // 强制在注释中 // 或 /* 使用一致的空格
        // "spaced-comment": "warn",
        // 强制在 switch 的冒号左右有空格
        'switch-colon-spacing': 'warn',
        // 强制箭头函数的箭头前后使用一致的空格
        'arrow-spacing': 'warn',
        'prefer-const': 'warn',
        'prefer-rest-params': 'warn',
        'no-useless-escape': 'warn',
        'no-irregular-whitespace': 'warn',
        'no-prototype-builtins': 'warn',
        'no-fallthrough': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-case-declarations': 'warn',
        'no-async-promise-executor': 'warn',

        // vue
        'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
        'vue/attributes-order': 'off', // 强制执行属性顺序
        'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
        'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
        'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
        'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
        'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
        'vue/require-default-prop': 'off', // 需要 props 的默认值
        'vue/html-indent': ['error', 4], // 在<template>中强制一致缩进
        'vue/html-self-closing': 'off', // 执行自闭合的风格
        'vue/max-attributes-per-line': 'off', // 强制每行属性的最大数量
        'vue/multi-word-component-names': 'off', // 是否开启组件命名规则校验（强制多个单词以驼峰或'-'链接的命名规则）
        // ESLint
        'no-use-before-define': 'off', // 禁止在变量定义之前使用它们
        'space-before-function-paren': 'off', // 强制在 function的左括号之前使用一致的空格
    },
    //  overrides: [ // 若要开启组件命名规则校验，建议选这种方式
    //    {
    //      files: ['src/views/index.vue', 'src/views/**/index.vue'], // 匹配 views 和任意多级路径中的 index.vue
    //      rules: {
    //        'vue/multi-word-component-names': 'off' // 给上面匹配的文件指定规则——关闭命名规则校验
    //      }
    //    }
    //  ]
})
