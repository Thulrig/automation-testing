exports.config = {
  allScriptsTimeout: 5000,

  getPageTimeout: 120000,

  framework: "jasmine2",

  seleniumAddress: "http://localhost:4444/wd/hub",

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      excludeSwitches: ["enable-automation"],
    },
  },

  specs: ["./test/*_spec.js"],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000,
    onPrepare: () => {
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(3000);
    },
  },
};
