module.exports = {
  moduleNameMapper: {
    '^@layouts/(.*)$': '<rootDir>/layouts/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@libs/(.*)$': '<rootDir>/libs/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@api/(.*)$': '<rootDir>/api/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@mock/(.*)$': '<rootDir>/mock/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@data/(.*)$': '<rootDir>/data/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/.tmp/',
  ],
}
