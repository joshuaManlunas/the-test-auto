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
You can also run via npm script ``npm run pw:test:initial``

For more information please refer to the [Playwright CLI docs](https://playwright.dev/docs/cli)
### Dependencies

* nodejs
* npm
* Playwright
* For Windows users you will need to use Cygwin or GitBash for running terminal commands. You can use CMD or Powershell 
  but you will have issues when you start putting environemnt variables before the npm command like
  ``ENV1=foo ENV2=bar npm run pw:test`` as Windows thinks ENV1 is an actual command.  

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advice for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Joshua Manlunas
[@joshuaManlunas](https://gist.github.com/joshuaManlunas)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)