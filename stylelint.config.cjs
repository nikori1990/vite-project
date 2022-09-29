module.exports = {
    root: true,
    plugins: ['stylelint-order'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
        'stylelint-config-recess-order',
    ],
    rules: {
        // ↓禁止使用未知的伪类选择器。
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['deep', 'global'],
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
            },
        ],
        // ↓禁止使用未知规则。
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'function',
                    'if',
                    'each',
                    'include',
                    'each',
                    'include',
                    'mixin',
                    'forward',
                    'use',
                ],
            },
        ],
        // ↓禁止空来源。
        'no-empty-source': null,
        // ↓禁止使用无效的命名网格区域。
        'named-grid-areas-no-invalid': null,
        // ↓要求或不允许使用Unicode字节顺序标记。
        'unicode-bom': 'never',
        // ↓禁止较低特异性的选择器在覆盖较高特异性的选择器之后出现。
        'no-descending-specificity': null,
        // ↓禁止在字体系列名称列表中缺少通用系列。
        'font-family-no-missing-generic-family-keyword': null,
        // ↓在声明的冒号后面需要一个空格或禁止空格。
        'declaration-colon-space-after': 'always-single-line',
        // ↓在声明的冒号之前需要一个空格或禁止使用空格。
        'declaration-colon-space-before': 'never',
        // ↓在声明块内要求或不允许尾随分号。
        'declaration-block-trailing-semicolon': 'always',
        // ↓在规则之前要求或禁止使用空行。
        'rule-empty-line-before': [
            'always',
            {
                ignore: ['after-comment', 'first-nested'],
            },
        ],
        // ↓禁止使用未知单位。
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        // Specify the alphabetical order of the attributes in the declaration block

        indentation: 4,

        // Sass rules
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-function-named-arguments': 'never',
        'scss/at-function-parentheses-space-before': 'always',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-named-arguments': 'never',
        'scss/at-mixin-parentheses-space-before': 'always',
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        'scss/dollar-variable-colon-space-after': 'always-single-line',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-empty-line-before': [
            'always',
            {
                except: ['after-comment', 'after-dollar-variable', 'first-nested'],
            },
        ],
        'scss/dollar-variable-no-missing-interpolation': true,
        // 'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
        'scss/dollar-variable-pattern': null,
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/double-slash-comment-empty-line-before': 'always',
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/declaration-nested-properties': 'never',
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true, //
        'scss/operator-no-unspaced': true, // Causing url parsing error, temporarily disabled.
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/no-duplicate-dollar-variables': true,

        // ↓样式顺序
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'float',
            'width',
            'height',
            'max-width',
            'max-height',
            'min-width',
            'min-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-collapse',
            'margin-top-collapse',
            'margin-right-collapse',
            'margin-bottom-collapse',
            'margin-left-collapse',
            'overflow',
            'overflow-x',
            'overflow-y',
            'clip',
            'clear',
            'font',
            'font-family',
            'font-size',
            'font-smoothing',
            'osx-font-smoothing',
            'font-style',
            'font-weight',
            'hyphens',
            'src',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'color',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-size-adjust',
            'text-shadow',
            'text-transform',
            'word-break',
            'word-wrap',
            'white-space',
            'vertical-align',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'pointer-events',
            'cursor',
            'background',
            'background-attachment',
            'background-color',
            'background-image',
            'background-position',
            'background-repeat',
            'background-size',
            'border',
            'border-collapse',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-color',
            'border-image',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-spacing',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'border-radius-topright',
            'border-radius-bottomright',
            'border-radius-bottomleft',
            'border-radius-topleft',
            'content',
            'quotes',
            'outline',
            'outline-offset',
            'opacity',
            'filter',
            'visibility',
            'size',
            'zoom',
            'transform',
            'box-align',
            'box-flex',
            'box-orient',
            'box-pack',
            'box-shadow',
            'box-sizing',
            'table-layout',
            'animation',
            'animation-delay',
            'animation-duration',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
            'animation-fill-mode',
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'background-clip',
            'backface-visibility',
            'resize',
            'appearance',
            'user-select',
            'interpolation-mode',
            'direction',
            'marks',
            'page',
            'set-link-source',
            'unicode-bidi',
            'speak',
        ],
    },
    ignoreFiles: ['**./*.js,', '**./*.ts,', '**./*.tsx,', '**./*.jsx,'],
}
