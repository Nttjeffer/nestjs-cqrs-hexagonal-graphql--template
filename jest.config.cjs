module.exports = {
	moduleFileExtensions: ['js', 'json', 'ts'],
	roots: ['<rootDir>', '../src'],
	modulePaths: ['<rootDir>/../'],
	moduleNameMapper: {
		'^@Operations/(.*)$': '<rootDir>/../src/operations/$1',
		'^@Shared/(.*)$': '<rootDir>/../src/shared/$1',
	},
	rootDir: 'test',
	testRegex: '.*\\.spec\\.ts$',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
	collectCoverageFrom: ['**/*.(t|j)s'],
	coverageDirectory: '../coverage',
	testEnvironment: 'node',
};
