(function(){angular.module("devme",["ngResource","ui.router","ui.bootstrap","toastr","ui.select","google.places","ngMap"])}).call(this),function(){angular.module("devme").service("webDevTec",function(){"ngInject";var e,t;e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"haml",title:"HAML",url:"http://haml.info/",description:"Beautiful, DRY, well-indented, clear markup: templating haiku.",logo:"haml.png"}],t=function(){return e},this.getTec=t})}.call(this),function(){angular.module("devme").directive("acmeNavbar",function(){var e,t;return e=["moment",function(e){"ngInject";var t;t=this,t.relativeDate=e(t.creationDate).fromNow()}],t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("devme").directive("acmeMalarkey",function(){var e,t,o;return e=["$log","githubContributor",function(e,t){"ngInject";var o,r,i;i=this,o=function(){return r().then(function(){e.info("Activated Contributors View")})},r=function(){return t.getContributors(10).then(function(e){return i.contributors=e,i.contributors})},i.contributors=[],o()}],o=function(e,t,o,r){var i,l;l=void 0,i=malarkey(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),t.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(e){i.type(e).pause()["delete"]()}),l=e.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(e){i.type(e.login).pause()["delete"]()})}),e.$on("$destroy",function(){l()})},t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:e,controllerAs:"vm"}})}.call(this),function(){angular.module("devme").factory("githubContributor",["$log","$http",function(e,t){"ngInject";var o,r,i;return o="https://api.github.com/repos/Swiip/generator-gulp-angular",r=function(r){var i,l;return null==r&&(r=30),i=function(e){return e.data},l=function(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))},t.get(o+"/contributors?per_page="+r).then(i)["catch"](l)},i={apiHost:o,getContributors:r}}])}.call(this),function(){var e;e=function(){function e(e){this.$state=e}return e.prototype.goToDevelopers=function(){return this.$state.go("findDevs")},e.prototype.goToProjects=function(){return this.$state.go("findProjects")},e}(),angular.module("devme").controller("MainController",["$state",e])}.call(this),function(){var e;e=function(){function e(e){this.$state=e}return e}(),angular.module("devme").controller("FindProjectsController",["$state",e])}.call(this),function(){var e;e=function(){function e(){"ngInject"}return e}(),angular.module("devme").controller("ListDevelopersController",[e])}.call(this),function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e,o,r,i){var l,a,s,n,p,c;this.$state=e,this.$http=o,this.$scope=r,this.$uibModal=i,this.addMarker=t(this.addMarker,this),this.showDeveloperMessage=!1,this.showDevelopersList=!1,this.mapLocation=!1,this.skills=[],this.availableSkills=["JavaScript","Java","Python","CSS","PHP","Ruby","C++","C"],l=["Shell","C#","Objective-C","R","VimL","Go","Perl","CoffeeScript"],(a=this.availableSkills).push.apply(a,l),l=["TeX","Swift","Scala","Emacs Lisp","Haskell","Lua","Clojure","Matlab","Arduino","Groovy"],(s=this.availableSkills).push.apply(s,l),l=["Puppet","Rust","PowerShell","Erlang","Visual Basic","Processing","Assembly","TypeScript","XSLT"],(n=this.availableSkills).push.apply(n,l),l=["ActionScript","ASP","OCaml","D","Scheme","Dart","Common Lisp","Julia","F#","Elixir"],(p=this.availableSkills).push.apply(p,l),l=["FORTRAN","Haxe","Racket","Logos"],(c=this.availableSkills).push.apply(c,l)}return e.prototype.updateMap=function(){return"object"==typeof this.mapLocation?(google.maps.event.trigger(this.$scope.map,"resize"),this.$scope.map.setCenter(this.mapLocation.geometry.location)):void 0},e.prototype.showMap=function(){return"object"==typeof this.mapLocation},e.prototype.addMarker=function(e){return new google.maps.Marker({position:e,map:this.$scope.map,draggable:!1,animation:google.maps.Animation.DROP})},e.prototype.showDevelopersList=function(){return this.showDevelopersList},e.prototype.listDevelopers=function(){return this.showDevelopersList=!0},e.prototype.devMe=function(){return this.showDeveloperMessage=!0,this.$uibModal.open({animation:!0,templateUrl:"app/find_developers/find_developers.html",controller:"FindDevelopersCtrl"})},e}(),angular.module("devme").controller("FindDevelopersController",["$state","$http","$scope","$uibModal",e])}.call(this),function(){angular.module("devme").run(["$log",function(e){return"ngInject"}])}.call(this),function(){angular.module("devme").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,o){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"MainCtrl"}).state("findDevs",{url:"/developers",templateUrl:"app/find_developers/find_developers.html",controller:"FindDevelopersController",controllerAs:"FindDevelopersCtrl"}).state("findDevs.listDevelopers",{url:"/list_developers",templateUrl:"app/find_developers/list_developers.html",controller:"ListDevelopersController",controllerAs:"ListDevelopersCtrl"}).state("findProjects",{url:"/projects",templateUrl:"app/find_projects/find_projects.html",controller:"FindProjectsController",controllerAs:"FindProjectsCtrl"}),t.otherwise("/"),o.html5Mode(!0)}])}.call(this),function(){angular.module("devme").constant("malarkey",malarkey).constant("moment",moment)}.call(this),function(){angular.module("devme").config(["$logProvider","toastrConfig",function(e,t){"ngInject";return e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}])}.call(this),angular.module("devme").run(["$templateCache",function(e){e.put("app/find_developers/find_developers.html",'<div id="find-developers-page"><div class="dev-stripe skills" ng-hide="FindDevelopersCtrl.showDeveloperMessage"><div class="container"><strong>Skills:</strong><ui-select class="select-skills" multiple="" tagging="true" tagging-label="" theme="bootstrap" ng-model="FindDevelopersCtrl.skills" ng-disabled="disabled"><ui-select-match placeholder="Select main skills...">{{ $item }}</ui-select-match><ui-select-choices repeat="skill in FindDevelopersCtrl.availableSkills | filter:$select.search">{{ skill }}</ui-select-choices></ui-select></div></div><div class="dev-stripe location" ng-hide="FindDevelopersCtrl.showDevelopersList"><div class="container"><strong>From where?</strong><div class="location-input"><input type="text" g-places-autocomplete="" ng-model="FindDevelopersCtrl.mapLocation" ng-change="FindDevelopersCtrl.updateMap()" placeholder="Choose the location"> <span class="or">OR</span><div class="anywhere-btn red-btn" ng-click="FindDevelopersCtrl.listDevelopers()"><i class="fa fa-globe"></i> anywhere</div></div><map ng-show="FindDevelopersCtrl.showMap()" center="-34.397, 150.644" zoom="12"></map></div></div><div class="developers-list" ng-show="FindDevelopersCtrl.showDevelopersList"><p class="title">Developers</p><div class="container"><div class="developer"><p class="dev-name"><strong>Sebastian Muszyński</strong></p><p class="dev-skills">Javascript, Java, C++, GIT, AngularJS</p><div class="dev-me-btn red-btn" ng-click="FindDevelopersCtrl.devMe()"><i class="fa fa-paper-plane"></i>DevMe</div></div><div class="developer"><p class="dev-name"><strong>Sebastian Muszyński</strong></p><p class="dev-skills">Javascript, Java, C++, GIT, AngularJS</p><div class="dev-me-btn red-btn" ng-click="FindDevelopersCtrl.devMe()"><i class="fa fa-paper-plane"></i>DevMe</div></div><div class="developer"><p class="dev-name"><strong>Sebastian Muszyński</strong></p><p class="dev-skills">Javascript, Java, C++, GIT, AngularJS</p><div class="dev-me-btn red-btn" ng-click="FindDevelopersCtrl.devMe()"><i class="fa fa-paper-plane"></i>DevMe</div></div><div class="developer"><p class="dev-name"><strong>Sebastian Muszyński</strong></p><p class="dev-skills">Javascript, Java, C++, GIT, AngularJS</p><div class="dev-me-btn red-btn" ng-click="FindDevelopersCtrl.devMe()"><i class="fa fa-paper-plane"></i>DevMe</div></div></div></div><div class="developer-message" ng-show="FindDevelopersCtrl.showDeveloperMessage"><p class="title">Sebastian Muszyński</p><div class="container"></div></div></div>'),e.put("app/find_developers/list_developers.html",'<div id="list-developers-page">Listing developers...</div>'),e.put("app/find_projects/find_projects.html",'<div id="find-projects-page"></div>'),e.put("app/main/main.html",'<div id="main-page"><div class="main-choices"><div class="main-choice main-choice-left" ng-click="MainCtrl.goToDevelopers()"><div class="choice-text"><p>I want to</p><p><strong>find developers</strong></p><p></p><p>to work with</p></div></div><div class="main-choice main-choice-right" ng-click="MainCtrl.goToProjects()"><div class="choice-text"><p>I want to</p><p><strong>join a project</strong></p><p>to collaborate</p></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> DevMe</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">Projects</a></li><li><a ng-href="developers">Developers</a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-0a0f2b55e7.js.map
