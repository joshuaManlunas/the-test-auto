# The ultimate framework template

This template is a general purpose template I have created based on years of experience creating and developing test
automation frameworks for different organisations.  

## Description

This framework deals with typical legacy corporate applications where logging-in is the costliest process because nobody 
thought of testability when tha application was built. As test automation engineers, we tend to build automation where we log-in once and then do all necessary 
testing in that single session. This is especially true when the application is already pipelined, and we need to be able to run automated 
tests during the deployment of these applications.

I give this framework template to you for free. All I ask if you decide to use it is to please credit me as the original author.

## Getting Started
Clone the framework
```
git clone git@github.com:joshuaManlunas/the-test-auto.git
```
Cd to the directory ``cd the-test-auto/``

Run npm install ``npm install``

Install Playwright dependencies 
```
npx playwright install
```
Run initial test to check everything is working as expected
```
npx playwright test --grep=@initial --headed
```
You can also run via npm script ``npm run pw:test:initial`` or ``pw:test:nonPOM``

Note: I made the nonPOM test to fail on purpose to show off the reporting capabilities of Playwright

For more Playwright information please refer to the [Playwright CLI docs](https://playwright.dev/docs/cli) and [Playwright docs](https://playwright.dev/)
### Dependencies

* nodejs
* For Windows users you will need to use Cygwin or GitBash for running terminal commands. You can use CMD or Powershell 
  but you will have issues when you start putting environemnt variables before the npm command like
  ``ENV1=foo ENV2=bar npm run pw:test`` as Windows thinks ENV1 is an actual command.  

### Authoring Tests
There are two types of tests that are supported by default by this framework.
1. Non Page Object Model -- these type of tests are faster to author although they are a bit more unstructured and test 
files would tend to be larger in terms of lines of code and code reuse is less. It doesn't make it less effective and performant though 
so it just goes down to preference. If this is the preferred test type for you check `example.spec.ts`

Note: `example.spec.ts` was created with `npm init playwright@latest` as shown in Playwright's getting started guide.

2. Page Object Model -- For better organisation and code reuse, organisations would usually use this type of tests.
Test engineers would do the coding work upfront and just reuse and update page objects as needed. 
A sample of this test can be found here `initial.spec.ts`. 

###### Steps to follow when using Page Object Model
* Create page object. This page object needs to implement the `_iPage.ts`. See `LoginPage.ts`
* Integrate the new page object in `__testBootstrap.ts` as a fixture like so: 
```javascript
//__testBootstrap.ts
import {test as base} from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";
import {MainPage} from "../src/pages/MainPage";
import {NewPageObject} from "../src/pages/NewPageObject"; <--

type Pages = {
    loginPage: LoginPage,
    mainPage: MainPage,
    newPage: NewPageObject  <--
}
/**
 * Provide everything a test could need eg. Page-objects, helpers, utils etc. here as fixtures
 */
export const test = base.extend<Pages>({
    //Utilities Section

    //Pages Section
    loginPage: async ({page}, use) => {
        await use( await new LoginPage(page) )
    },
    mainPage: async ({page}, use) => {
        await use( await new MainPage(page) )
    },
    newPage: async ({page}, use) => {
        await use( await new NewPageObject(page) ) <--
    }
})
```
* Use your new page object fixture in tests.
```javascript
import { test, expect } from '../__testBootstrap'
import {frameworkLog as log } from "../../src/utils/fLogger";

test('@initial Test to check everything is working', async ({ loginPage, mainPage,  newPage}) => {
  await test.step('Add items to cart', async () => {
    await newPage.doSomethingMethod() <--
  });
});
```

#### Helpful CLI commands when authoring tests
* `npx playwright codegen <the site> --output=mytest.spec.ts` -- for auto generating locators and tests
* `npx playwright test --debug` -- for debugging tests 
* `npx playwright --help` -- for more info

## Help
For general help and info refer to the official [Playwright documentation](https://playwright.dev/).
CLI Helper info can be reached using the command:
```
npx playwright --help
npx playwright <command> --help
```

## Authors

Joshua Manlunas --
[@joshuaManlunas - GitHub](https://github.com/joshuaManlunas)

## Version History

* 1.0 -- So it begins...

## Contributing Code
* If you want to contribute, create a pull request. 

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

Frustration, boredom, politics, etc.