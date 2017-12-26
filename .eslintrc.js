module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "mocha": true,
        "node": true,
        "jquery": true,
        "commonjs": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "one-var": [
            "error",
            "always"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "accessor-pairs": [
            "error"
        ],
        "array-callback-return": [
            "error"
        ],
        "block-scoped-var": [
            "error"
        ],
        "curly": [
            "error",
            "all"
        ],
        "default-case": [
            "error"
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": [
            "error"
        ],
        "no-caller": [
            "error"
        ],
        "no-case-declarations": [
            "error"
        ],
        "no-else-return": [
            "error"
        ],
        "no-empty-function": [
            "error"
        ],
        "no-eval": [
            "error"
        ],
        "no-implied-eval": [
            "error"
        ],
        "no-extra-bind": [
            "error"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-iterator": [
            "error"
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-new-func": [
            "error"
        ],
        "no-new-wrappers": [
            "error"
        ],
        "no-param-reassign": [
            "error"
        ],
        "no-proto": [
            "error"
        ],
        "no-self-compare": [
            "error"
        ],
        "no-sequences": [
            "error"
        ],
        "no-useless-call": [
            "error"
        ],
        "no-useless-concat": [
            "error"
        ],
        "no-void": [
            "error"
        ],
        "no-with": [
            "error"
        ],
        "radix": [
            "error",
            "always"
        ],
        "vars-on-top": [
            "error"
        ],
        "wrap-iife": [
            "error",
            "any"
        ],
        "no-undefined": [
            "error"
        ],
        "no-use-before-define": [
            "error"
        ],
        "array-bracket-spacing": [
            "error"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never",
            }
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "error"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "func-name-matching": [
            "error"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "max-params": [
            "error",
            6
        ],
        "new-parens": [
            "error"
        ],
        "newline-after-var": [
            "error",
            "always"
        ],
        "newline-before-return": [
            "error"
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-multiple-empty-lines": [
            "error"
        ],
        "no-nested-ternary": [
            "error"
        ],
        "no-tabs": [
            "error"
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "object-curly-newline": [
            "error",
            {
                "multiline": true,
                "minProperties": 2
            }
        ],
        "object-curly-spacing": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
            "error"
        ],
        "space-unary-ops": [
            "error"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
    }
};
