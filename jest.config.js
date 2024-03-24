module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
      'swiper/css': '<rootDir>/__mocks__/styleMock.js',
      'swiper/css/navigation': '<rootDir>/__mocks__/styleMock.js',
      'swiper/css/pagination': '<rootDir>/__mocks__/styleMock.js',
      'swiper/css/autoplay': '<rootDir>/__mocks__/styleMock.js',
    },
    transformIgnorePatterns: [
      "node_modules/(?!(swiper|ssr-window|dom7)/)"
    ],
   
  };
  