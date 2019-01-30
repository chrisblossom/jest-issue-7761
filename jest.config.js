'use strict';

/**
 * https://facebook.github.io/jest/docs/configuration.html#options
 */
module.exports = {
    globalSetup: '<rootDir>/jest.global-setup.js',
    globalTeardown: '<rootDir>/jest.global-teardown.js',
    setupFiles: ['<rootDir>/jest.setup-files.js'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup-files-after-env.js'],

    moduleDirectories: ['node_modules'],
    testEnvironment: 'node',
    collectCoverage: true,

    /**
     * Automatically reset mock state between every test.
     * Equivalent to calling jest.resetAllMocks() between each test.
     *
     * Sane default with resetModules: true because mocks need to be inside beforeEach
     * for them to work correctly
     */
    resetMocks: true,

    /**
     *  The module registry for every test file will be reset before running each individual test.
     *  This is useful to isolate modules for every test so that local module state doesn't conflict between tests.
     */
    resetModules: true,

    /**
     * Equivalent to calling jest.restoreAllMocks() between each test.
     *
     * Resets jest.spyOn mocks only
     */
    restoreMocks: true,
};
