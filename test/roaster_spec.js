const Roaster = require('../page-objects/roaster')
const LoginPage = require('../page-objects/login_page')
const { browser } = require('protractor')

describe("Name of the tested objectives", () => {

    const roaster = new Roaster()
    const {
        mainLabel,
        mainLogo,
        mainText,
        tableLabel,
        heroList,
        hr,
        heroInputLabel,
        heroInputField,
        heroSubmitButton,
        heroInputInformAlert,
        heroInputWarningAlert,
    } = roaster

    const loginPage = new LoginPage()
    const {
        emailField,
        passwordField,
        submitButton,
        overlay,
    } = loginPage

    //create a page object const
    //deconstruct it

    beforeEach( () => {
    
        browser.refresh()
        browser.ignoreSynchronization = true
        browser.get('http://127.0.0.1:5500/hero/indes.html')

    })
    
    afterEach( () => {
    
    })
    
    //we could use f before 'it' to run exectly this test or x before 'it' to skip this test

    it('should display all default elements', () => {
    
        emailField.sendKeys('test@test.com')
        passwordField.sendKeys('12345')
        submitButton.click()


        expect(mainLabel.isDisplayed()).toBe(true)
        expect(mainLogo.isDisplayed()).toBe(true)
        expect(mainText.isDisplayed()).toBe(true)
        expect(tableLabel.isDisplayed()).toBe(true)
        expect(heroList.isDisplayed()).toBe(true)
        expect(hr.isDisplayed()).toBe(true)
        expect(heroInputLabel.isDisplayed()).toBe(true)
        expect(heroInputField.isDisplayed()).toBe(true)
        expect(heroSubmitButton.isDisplayed()).toBe(true)
        expect(heroInputInformAlert.isDisplayed()).toBe(false)
        expect(heroInputWarningAlert.isDisplayed()).toBe(false)
        
    })

    it('should add a hero to the list', () => {
    
        emailField.sendKeys('test@test.com')
        passwordField.sendKeys('12345')
        submitButton.click()

        heroInputField.sendKeys('SuperHero 6')        
        heroSubmitButton.click()

        expect(element(by.css('#heroList > li:nth-child(6)')).isDisplayed()).toBe(true)
        expect(element(by.css('#heroList > li:nth-child(6)')).getText()).toEqual('SuperHero 6')

    })


    // to check is this element present use: expect(elementName.isDisplayed()).toBe(true)
    // to check the text value of the element use: expect(elementName.getText()).toEqual('')
    // to check the checkBox state use: expect(elementName.isSelected()).toBe(true)
    // to interect with an element use: elementName.eventName() f.e. submitButton.click()

    })