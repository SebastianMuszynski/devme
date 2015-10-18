(function(){angular.module("devme",["ngResource","ui.router","ui.bootstrap","toastr","ui.select","google.places","ngMap"])}).call(this),function(){angular.module("devme").service("webDevTec",function(){"ngInject";var e,t;e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"haml",title:"HAML",url:"http://haml.info/",description:"Beautiful, DRY, well-indented, clear markup: templating haiku.",logo:"haml.png"}],t=function(){return e},this.getTec=t})}.call(this),function(){angular.module("devme").directive("acmeNavbar",function(){var e,t;return e=["moment",function(e){"ngInject";var t;t=this,t.relativeDate=e(t.creationDate).fromNow()}],t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("devme").directive("acmeMalarkey",function(){var e,t,o;return e=["$log","githubContributor",function(e,t){"ngInject";var o,s,i;i=this,o=function(){return s().then(function(){e.info("Activated Contributors View")})},s=function(){return t.getContributors(10).then(function(e){return i.contributors=e,i.contributors})},i.contributors=[],o()}],o=function(e,t,o,s){var i,r;r=void 0,i=malarkey(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),t.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(e){i.type(e).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(s.contributors,function(e){i.type(e.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})},t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:e,controllerAs:"vm"}})}.call(this),function(){angular.module("devme").factory("githubContributor",["$log","$http",function(e,t){"ngInject";var o,s,i;return o="https://api.github.com/repos/Swiip/generator-gulp-angular",s=function(s){var i,r;return null==s&&(s=30),i=function(e){return e.data},r=function(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))},t.get(o+"/contributors?per_page="+s).then(i)["catch"](r)},i={apiHost:o,getContributors:s}}])}.call(this),function(){var e;e=function(){function e(e){this.$modalInstance=e}return e.prototype.sendMessage=function(){return this.$modalInstance.dismiss("cancel")},e}(),angular.module("devme").controller("MessageController",["$modalInstance",e])}.call(this),function(){var e;e=function(){function e(e){this.$state=e}return e.prototype.goToDevelopers=function(){return this.$state.go("findDevs")},e.prototype.goToProjects=function(){return this.$state.go("findProjects")},e}(),angular.module("devme").controller("MainController",["$state",e])}.call(this),function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e,o,s,i){var r,l,a,n,c,p;this.$state=e,this.$http=o,this.$scope=s,this.$modal=i,this.addMarker=t(this.addMarker,this),this.showProjectMessage=!1,this.showProjectsList=!1,this.mapLocation=!1,this.lastInfoWindow=!1,this.skills=[],this.availableSkills=["JavaScript","Java","Python","CSS","PHP","Ruby","C++","C"],r=["Shell","C#","Objective-C","R","VimL","Go","Perl","CoffeeScript"],(l=this.availableSkills).push.apply(l,r),r=["TeX","Swift","Scala","Emacs Lisp","Haskell","Lua","Clojure","Matlab","Arduino","Groovy"],(a=this.availableSkills).push.apply(a,r),r=["Puppet","Rust","PowerShell","Erlang","Visual Basic","Processing","Assembly","TypeScript","XSLT"],(n=this.availableSkills).push.apply(n,r),r=["ActionScript","ASP","OCaml","D","Scheme","Dart","Common Lisp","Julia","F#","Elixir"],(c=this.availableSkills).push.apply(c,r),r=["FORTRAN","Haxe","Racket","Logos"],(p=this.availableSkills).push.apply(p,r),this.projects=[],this.$http.get("app/data/projects.json").success(function(e){return function(t){var o,s,i,r,l;for(e.projects=t,r=e.projects,l=[],o=0,s=r.length;s>o;o++)i=r[o],l.push(e.addMarker(i));return l}}(this),function(e){return console.log(e)})}return e.prototype.refreshResults=function(e){var t,o,s,i;s=e.search,o=angular.copy(e.items),t=-1,o=o.filter(function(e){return e.id!==t}),s?(i=s,0===o.filter(function(e){return e===s}).length&&(e.items=[i].concat(o))):e.items=o},e.prototype.updateMap=function(){return"object"==typeof this.mapLocation?(google.maps.event.trigger(this.$scope.map,"resize"),this.$scope.map.setCenter(this.mapLocation.geometry.location)):void 0},e.prototype.showMap=function(){return"object"==typeof this.mapLocation},e.prototype.addMarker=function(e){var t,o,s;return null!=e&&(t='<div class="map-project"><h4 class="map-project-title">'+e.name+'</h4><h5 class="map-project-title">'+e.author.name+'</h5><div class="map-project-description">'+e.description+"</div></div>",o=new google.maps.InfoWindow({content:t}),s=new MarkerWithLabel({position:{lat:e.latitude,lng:e.longitude},draggable:!1,icon:" ",map:this.$scope.map,labelContent:'<i class="fa fa-desktop fa-2x" style="color:#E84A5F;"></i>',labelAnchor:new google.maps.Point(22,50),labelClass:"labels"})),s.addListener("click",function(e){return function(){return e.lastInfoWindow&&e.lastInfoWindow.close(),e.lastInfoWindow=o,o.open(e.$scope.map,s)}}(this)),s.addListener("click",function(e){return function(){return o.open(e.$scope.map,s)}}(this)),google.maps.event.addListener(o,"domready",function(e){return function(){return $(".dev-me-map-btn").click(function(){return e.devMe()})}}(this))},e.prototype.showProjectsList=function(){return this.showProjectsList},e.prototype.listProjects=function(){return this.showProjectsList=!0},e.prototype.getProjects=function(){return this.projects},e.prototype.devMe=function(){return this.showDeveloperMessage=!0,this.$modal.open({animation:!0,templateUrl:"app/message/message.html",size:"lg",controller:"MessageController",controllerAs:"MessageCtrl"})},e.prototype.clickBack=function(){return location.reload()},e}(),angular.module("devme").controller("FindProjectsController",["$state","$http","$scope","$modal",e])}.call(this),function(){var e;e=function(){function e(){"ngInject"}return e}(),angular.module("devme").controller("ListDevelopersController",[e])}.call(this),function(){var e,t=function(e,t){return function(){return e.apply(t,arguments)}};e=function(){function e(e,o,s,i){var r,l,a,n,c,p;this.$state=e,this.$http=o,this.$scope=s,this.$modal=i,this.addMarker=t(this.addMarker,this),this.skillsFilter=t(this.skillsFilter,this),this.showDeveloperMessage=!1,this.showDevelopersList=!1,this.mapLocation=!1,this.lastInfoWindow=!1,this.skills=[],this.availableSkills=["JavaScript","Java","Python","CSS","PHP","Ruby","C++","C"],r=["Shell","C#","Objective-C","R","VimL","Go","Perl","CoffeeScript"],(l=this.availableSkills).push.apply(l,r),r=["TeX","Swift","Scala","Emacs Lisp","Haskell","Lua","Clojure","Matlab","Arduino","Groovy"],(a=this.availableSkills).push.apply(a,r),r=["Puppet","Rust","PowerShell","Erlang","Visual Basic","Processing","Assembly","TypeScript","XSLT"],(n=this.availableSkills).push.apply(n,r),r=["ActionScript","ASP","OCaml","D","Scheme","Dart","Common Lisp","Julia","F#","Elixir"],(c=this.availableSkills).push.apply(c,r),r=["FORTRAN","Haxe","Racket","Logos"],(p=this.availableSkills).push.apply(p,r),this.developers=[],this.$http.get("app/data/developers.json").success(function(e){return function(t){var o,s,i,r,l;for(e.developers=t,r=e.developers,l=[],s=0,i=r.length;i>s;s++)o=r[s],l.push(e.addMarker(o));return l}}(this),function(e){return console.log(e)})}return e.prototype.skillsFilter=function(e){var t,o,s,i;for(s=this.skills,t=0,o=s.length;o>t;t++)if(i=s[t],e.skills.indexOf(i)<0)return!1;return!0},e.prototype.refreshResults=function(e){var t,o,s,i;s=e.search,o=angular.copy(e.items),t=-1,o=o.filter(function(e){return e.id!==t}),s?(i=s,0===o.filter(function(e){return e===s}).length&&(e.items=[i].concat(o))):e.items=o},e.prototype.updateMap=function(){return"object"==typeof this.mapLocation?(google.maps.event.trigger(this.$scope.map,"resize"),this.$scope.map.setCenter(this.mapLocation.geometry.location)):void 0},e.prototype.showMap=function(){return"object"==typeof this.mapLocation},e.prototype.addMarker=function(e){var t,o,s;return null!=e&&(t='<div class="map-project map-dev"><h4 class="map-dev-title">'+e.name+'</h4><div class="map-dev-details">'+e.skills.join(", ")+'</div><div class="dev-me-btn red-btn dev-me-map-btn"><i class="fa fa-paper-plane"></i>DevMe</div></div>',o=new google.maps.InfoWindow({content:t}),s=new MarkerWithLabel({position:{lat:e.latitude,lng:e.longitude},draggable:!1,icon:" ",map:this.$scope.map,labelContent:'<i class="fa fa-user fa-2x" style="color:#E84A5F;"></i>',labelAnchor:new google.maps.Point(22,50),labelClass:"labels"}),s.addListener("click",function(e){return function(){e.lastInfoWindow&&e.lastInfoWindow.close(),e.lastInfoWindow=o,o.open(e.$scope.map,s)}}(this))),google.maps.event.addListener(o,"domready",function(e){return function(){return $(".dev-me-map-btn").click(function(){return e.devMe()})}}(this))},e.prototype.showDevelopersList=function(){return this.showDevelopersList},e.prototype.listDevelopers=function(){return this.showDevelopersList=!0},e.prototype.getDevelopers=function(){return this.developers},e.prototype.devMe=function(){return this.showDeveloperMessage=!0,this.$modal.open({animation:!0,templateUrl:"app/message/message.html",size:"lg",controller:"MessageController",controllerAs:"MessageCtrl"})},e.prototype.clickBack=function(){return location.reload()},e}(),angular.module("devme").controller("FindDevelopersController",["$state","$http","$scope","$modal",e])}.call(this),function(){angular.module("devme").run(["$log",function(e){return"ngInject"}])}.call(this),function(){angular.module("devme").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,o){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"MainCtrl"}).state("findDevs",{url:"/developers",templateUrl:"app/find_developers/find_developers.html",controller:"FindDevelopersController",controllerAs:"FindDevelopersCtrl"}).state("findDevs.listDevelopers",{url:"/list_developers",templateUrl:"app/find_developers/list_developers.html",controller:"ListDevelopersController",controllerAs:"ListDevelopersCtrl"}).state("findProjects",{url:"/projects",templateUrl:"app/find_projects/find_projects.html",controller:"FindProjectsController",controllerAs:"FindProjectsCtrl"}),t.otherwise("/"),o.html5Mode(!0)}])}.call(this),function(){angular.module("devme").constant("malarkey",malarkey).constant("moment",moment)}.call(this),function(){angular.module("devme").config(["$logProvider","toastrConfig",function(e,t){"ngInject";return e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}])}.call(this),angular.module("devme").run(["$templateCache",function(e){e.put("app/find_developers/find_developers.html",'<div id="find-developers-page"><a class="comeback" href="/"><i class="fa fa-home"></i></a><div class="dev-stripe skills" ng-hide="FindDevelopersCtrl.showDevelopersList"><div class="container"><strong>Skills:</strong><ui-select class="select-skills" multiple="" theme="bootstrap" ng-model="FindDevelopersCtrl.skills" ng-disabled="disabled"><ui-select-match placeholder="Select main skills...">{{ $item }}</ui-select-match><ui-select-choices refresh="FindDevelopersCtrl.refreshResults($select)" refresh-delay="250" repeat="skill in FindDevelopersCtrl.availableSkills | filter:$select.search">{{ skill }}</ui-select-choices></ui-select></div></div><div class="dev-stripe location" ng-hide="FindDevelopersCtrl.showDevelopersList"><div class="container"><strong>From where?</strong><div class="location-input"><input type="text" g-places-autocomplete="" ng-model="FindDevelopersCtrl.mapLocation" ng-change="FindDevelopersCtrl.updateMap()" placeholder="Choose the location"> <span class="or">OR</span><div class="anywhere-btn red-btn" ng-click="FindDevelopersCtrl.listDevelopers()"><i class="fa fa-globe"></i> anywhere</div></div><map center="53.1677170,8.6542650" zoom="12"></map></div></div><div class="developers-list" ng-show="FindDevelopersCtrl.showDevelopersList"><a class="back-button" href="#" ng-click="FindDevelopersCtrl.clickBack()"><i class="fa fa-undo fa-3"></i></a><div class="song-title"><p class="title">Hey, I just met you, and this is crazy,</p><p class="title">But here\'s my profile, so <span class="red">DevMe</span>, maybe?</p></div><div class="container"><div class="developer" ng-repeat="dev in FindDevelopersCtrl.getDevelopers() | filter: FindDevelopersCtrl.skillsFilter"><p class="dev-name"><strong>{{ dev.name }}</strong></p><p class="dev-skills">{{ dev.skills.join(", ") }}</p><div class="dev-me-btn red-btn" ng-click="FindDevelopersCtrl.devMe()"><i class="fa fa-paper-plane"></i>DevMe</div></div></div></div></div>'),e.put("app/find_projects/find_projects.html",'<div id="find-projects-page"><a class="comeback" href="/"><i class="fa fa-home"></i></a><div class="dev-stripe skills" ng-hide="FindProjectsCtrl.showProjectsList"><div class="container"><strong>Skills:</strong><ui-select class="select-skills" multiple="" theme="bootstrap" ng-model="FindProjectsCtrl.skills" ng-disabled="disabled"><ui-select-match placeholder="Select main skills...">{{ $item }}</ui-select-match><ui-select-choices refresh="FindProjectsCtrl.refreshResults($select)" refresh-delay="250" repeat="skill in FindProjectsCtrl.availableSkills | filter:$select.search">{{ skill }}</ui-select-choices></ui-select></div></div><div class="dev-stripe location" ng-hide="FindProjectsCtrl.showProjectsList"><div class="container"><strong>From where?</strong><div class="location-input"><input type="text" g-places-autocomplete="" ng-model="FindProjectsCtrl.mapLocation" ng-change="FindProjectsCtrl.updateMap()" placeholder="Choose the location"> <span class="or">OR</span><div class="anywhere-btn red-btn" ng-click="FindProjectsCtrl.listProjects()"><i class="fa fa-globe"></i> anywhere</div></div><map center="53.1677170,8.6542650" zoom="12"></map></div></div><div class="projects-list" ng-show="FindProjectsCtrl.showProjectsList"><a class="back-button" href="#" ng-click="FindProjectsCtrl.clickBack()"><i class="fa fa-undo fa-3"></i></a><div class="song-title"><p class="title">Hey, I just met you, and this is crazy,</p><p class="title">But here\'s my <strong>project</strong>, so <span class="red">join me</span>, maybe?</p></div><div class="container"><div class="project" ng-repeat="project in FindProjectsCtrl.getProjects()"><p class="dev-name"><strong>{{ project.name }}</strong></p><p>{{ project.author.name }}</p><p class="project-description">{{ project.description | limitTo: \'200\' }}...</p><div class="dev-me-btn red-btn" ng-click="FindProjectsCtrl.devMe()"><i class="fa fa-paper-plane"></i>Join</div></div></div></div></div>'),e.put("app/message/message.html",'<div class="developer-message"><p class="title">Join the project!</p><input type="email" placeholder="Your e-mail"> <textarea placeholder="Your message..."></textarea><div class="developer-message-btn red-btn" ng-click="MessageCtrl.sendMessage()"><i class="fa fa-paper-plane-o"></i>Collaborate</div></div>'),e.put("app/main/main.html",'<div id="main-page"><div class="main-choices"><div class="main-choice main-choice-left" ng-click="MainCtrl.goToDevelopers()"><div class="choice-text"><p>I want to</p><p><strong>find developers</strong></p><p></p><p>to work with</p></div></div><div class="main-choice main-choice-right" ng-click="MainCtrl.goToProjects()"><div class="choice-text"><p>I want to</p><p><strong>join a project</strong></p><p>to collaborate</p></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> DevMe</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">Projects</a></li><li><a ng-href="developers">Developers</a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-676d1f0825.js.map