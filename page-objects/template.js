const NamePage = function () {}

NamePage.prototype = Object.create({}, {
    elenemtName: {get: () => { return element(by.id("identificator")); } },
})

module.exports = NamePage