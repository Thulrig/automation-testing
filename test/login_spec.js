const { browser } = require('protractor')
const LoginPage = require('../page-objects/login_page')

describe("Name of the tested objectives", () => {

const loginPage = new LoginPage()
const {loginTitleText, emailLabel, emailField, passwordLabel, passwordField, rememberCheckBoxLabel, rememberCheckBox, submitButton, errorMessage, overlay} = loginPage

beforeEach( () => {

    browser.ignoreSynchronization = true
    
    browser.get('http://127.0.0.1:5500/hero/indes.html')
})

afterEach( () => {

})

it('should display all Login page elements', () => {

    expect(overlay.isDisplayed()).toBe(true)

    expect(loginTitleText.isDisplayed()).toBe(true)
    expect(loginTitleText.getText()).toEqual('Welcome. Please, LogIn')

    expect(emailLabel.isDisplayed()).toBe(true)
    expect(emailField.isDisplayed()).toBe(true)
    expect(emailField.getText()).toEqual('')

    expect(passwordLabel.isDisplayed()).toBe(true)
    expect(passwordField.isDisplayed()).toBe(true)
    expect(emailField.getText()).toEqual('')


    expect(rememberCheckBoxLabel.isDisplayed()).toBe(true)
    expect(rememberCheckBox.isDisplayed()).toBe(true)
    expect(rememberCheckBox.isSelected()).toBe(false)

    expect(submitButton.isDisplayed()).toBe(true)

    expect(errorMessage.isDisplayed()).toBe(false)

})

it('should display error message when no email and password entered', () => {

    submitButton.click()

    expect(errorMessage.isDisplayed()).toBe(true)
    expect(errorMessage.getText()).toEqual('Email or Password is required!')

})

it('should display error message when no password entered', () => {

    passwordField.sendKeys('12345')

    submitButton.click()

    expect(errorMessage.isDisplayed()).toBe(true)
    expect(errorMessage.getText()).toEqual('Email or Password is required!')

})

it('should display error message when no email entered', () => {

    emailField.sendKeys('test@test.com')

    submitButton.click()

    expect(errorMessage.isDisplayed()).toBe(true)
    expect(errorMessage.getText()).toEqual('Email or Password is required!')

})

it('should log user in', () => {

    emailField.sendKeys('test@test.com')
    passwordField.sendKeys('12345')

    submitButton.click()

    expect(overlay.isDisplayed()).toBe(false)

})

})