const Roaster = function () {}

Roaster.prototype = Object.create({}, {
    mainLabel: {get: () => { return element(by.css("body > div.container-fluid > div:nth-child(1) > div > center > h1")); } },
    mainLogo: {get: () => { return element(by.css("body > div.container-fluid > div:nth-child(2) > img")); } },
    mainText: {get: () => { return element(by.css("body > div.container-fluid > div:nth-child(3) > div > p")); } },
    tableLabel: {get: () => { return element(by.css("body > div.container-fluid > div:nth-child(4) > div > center > h1")); } },
    heroList: {get: () => { return element(by.id("heroList")); } },
    hr: {get: () => { return element(by.css("body > div.container-fluid > div:nth-child(5) > div > hr")); } },
    heroInputLabel: {get: () => { return element(by.css("#addHeroForm > label")); } },
    heroInputField: {get: () => { return element(by.css("#heroInput")); } },
    heroSubmitButton: {get: () => { return element(by.id("addHeroButton")); } },
    heroInputInformAlert: {get: () => { return element(by.css("#voteAlert")); } },
    heroInputWarningAlert: {get: () => { return element(by.css("#voteWarningAlert")); } },
})

module.exports = Roaster