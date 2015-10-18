(function(){angular.module("devme",["ngResource","ui.router","ui.bootstrap","toastr"])}).call(this),function(){angular.module("devme").factory("githubContributor",["$log","$http",function(t,e){"ngInject";var o,r,n;return o="https://api.github.com/repos/Swiip/generator-gulp-angular",r=function(r){var n,a;return null==r&&(r=30),n=function(t){return t.data},a=function(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))},e.get(o+"/contributors?per_page="+r).then(n)["catch"](a)},n={apiHost:o,getContributors:r}}])}.call(this),function(){angular.module("devme").service("webDevTec",function(){"ngInject";var t,e;t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"haml",title:"HAML",url:"http://haml.info/",description:"Beautiful, DRY, well-indented, clear markup: templating haiku.",logo:"haml.png"}],e=function(){return t},this.getTec=e})}.call(this),function(){angular.module("devme").directive("acmeNavbar",function(){var t,e;return t=["moment",function(t){"ngInject";var e;e=this,e.relativeDate=t(e.creationDate).fromNow()}],e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("devme").directive("acmeMalarkey",function(){var t,e,o;return t=["$log","githubContributor",function(t,e){"ngInject";var o,r,n;n=this,o=function(){return r().then(function(){t.info("Activated Contributors View")})},r=function(){return e.getContributors(10).then(function(t){return n.contributors=t,n.contributors})},n.contributors=[],o()}],o=function(t,e,o,r){var n,a;a=void 0,n=malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){n.type(t).pause()["delete"]()}),a=t.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){n.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){a()})},e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:t,controllerAs:"vm"}})}.call(this),function(){var t;t=function(){function t(t){this.$state=t}return t.prototype.goToDevelopers=function(){return this.$state.go("findDevs")},t.prototype.goToProjects=function(){return this.$state.go("findProjects")},t}(),angular.module("devme").controller("MainController",["$state",t])}.call(this),function(){var t;t=function(){function t(t){this.$state=t}return t}(),angular.module("devme").controller("FindProjectsController",["$state",t])}.call(this),function(){var t;t=function(){function t(t){this.$state=t}return t}(),angular.module("devme").controller("FindDevelopersController",["$state",t])}.call(this),function(){angular.module("devme").run(["$log",function(t){return"ngInject"}])}.call(this),function(){angular.module("devme").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,e,o){"ngInject";return t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"MainCtrl"}).state("findDevs",{url:"/developers",templateUrl:"app/find_developers/find_developers.html",controller:"FindDevelopersController",controllerAs:"FindDevelopersCtrl"}).state("findProjects",{url:"/projects",templateUrl:"app/find_projects/find_projects.html",controller:"FindProjectsController",controllerAs:"FindProjectsCtrl"}),e.otherwise("/"),o.html5Mode(!0)}])}.call(this),function(){angular.module("devme").constant("malarkey",malarkey).constant("moment",moment)}.call(this),function(){angular.module("devme").config(["$logProvider","toastrConfig",function(t,e){"ngInject";return t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}])}.call(this),angular.module("devme").run(["$templateCache",function(t){t.put("app/find_developers/find_developers.html",'<div id="find-developers-page"><div class="skills"><strong>Skills:</strong><p>Javascript, AngularJS, CoffeeScript, Java, GIT</p></div><div class="location"><strong>From where?</strong><p><input type="text" placeholder="Choose the location"> <span>OR</span> <label>anywhere</label> <input type="checkbox"></p></div></div>'),t.put("app/find_projects/find_projects.html",'<div id="find-projects-page"></div>'),t.put("app/main/main.html",'<div id="main-page"><div class="main-choices"><div class="main-choice main-choice-left" ng-click="MainCtrl.goToDevelopers()"><div class="choice-text"><p>I want to</p><p><strong>find developers</strong></p><p></p><p>to work with</p></div></div><div class="main-choice main-choice-right" ng-click="MainCtrl.goToProjects()"><div class="choice-text"><p>I want to</p><p><strong>join a project</strong></p><p>to collaborate</p></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> DevMe</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">Projects</a></li><li><a ng-href="#">Developers</a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-36e788919c.js.map
