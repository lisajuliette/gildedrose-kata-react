import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
	roots: ['<rootDir>/src'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/',
	}),
};
