const { browser } = require("protractor");
const TestPage = require("../page-objects/test_page");

describe("Super Hero Page", () => {
  
  let testPage;

  beforeEach(() => {
    testPage = new TestPage();
    

    browser.ignoreSynchronization = true;
    browser.get("http://127.0.0.1:5500/hero/indes.html");
  });

  afterEach(() => {});

  it("Should enter test data into fields and check them", () => {
    
    const {emailField, passwordField, loginLabel} = testPage

    emailField.sendKeys("Just testing");
    passwordField.sendKeys("Just testing");

    expect(loginLabel.getText()).toEqual(
      "Welcome. Please, LogIn"
    );
    expect(emailField.getAttribute("value")).toEqual(
      "Just testing"
    );

    //browser.sleep(5000);
  });
});
