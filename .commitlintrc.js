module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-case': [2, 'always', 'lowerCase'],
        'header-max-length': [2, 'always', 100],
    },

    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w*)(?:\((.*)\))?: (.*) (.*)$/,
            headerCorrespondence: [`type`, `scope`, `subject`],
            revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
            revertCorrespondence: [`header`, `hash`],
        },
    },
}
