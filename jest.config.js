const path = require('path')

const rootDir = path.join(__dirname, './build')
const roots = [rootDir]
const testMatch = ['**/*.spec.js']
const ignoredTests = ['node_modules/']

module.exports = {
    testMatch,
    testPathIgnorePatterns: ignoredTests,
    rootDir,
    roots,
    verbose: true,
}
