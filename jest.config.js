// // jest.config.js
const { defaults } = require("jest-config");
module.exports = {
  //
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};
