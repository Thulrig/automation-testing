const LoginPage = function () {}

LoginPage.prototype = Object.create({}, {
    loginTitleText: {get: () => { return element(by.css("#loginLabel")); } },
    emailLabel: {get: () => { return element(by.css("#loginForm > div:nth-child(1) > label")); } },
    emailField: {get: () => { return element(by.id("inputEmail")); } },
    passwordLabel: {get: () => { return element(by.css("#loginForm > div:nth-child(2) > label")); } },
    passwordField: {get: () => { return element(by.id("inputPassword")); } },
    rememberCheckBoxLabel: {get: () => { return element(by.css("#loginForm > div:nth-child(3) > div > div > label")); } },
    rememberCheckBox: {get: () => { return element(by.id("rememberLoginCheck")); } },
    submitButton: {get: () => { return element(by.buttonText("Sign in")); } },
    errorMessage: {get: () => { return element(by.id("loginAlert")); } },
    overlay: {get: () => { return element(by.id("overlay")); } },
})

module.exports = LoginPage