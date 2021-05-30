const TestPage = function () {}

TestPage.prototype = Object.create(
  {},
  {
    emailField: {
      get: () => {
        return element(by.id("inputEmail"));
      }
    },
    passwordField: {
      get: () => {
        return element(by.id("inputPassword"));
      }
    },
    loginLabel: {
      get: () => {
        return element(by.id("loginLabel"));
      }
    },
  }
);

module.exports = TestPage
