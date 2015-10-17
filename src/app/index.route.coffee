angular.module 'devme'
  .config ($stateProvider, $urlRouterProvider, $locationProvider) ->
    'ngInject'
    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/main/main.html'
        controller: 'MainController'
        controllerAs: 'MainCtrl'
      .state 'findDevs',
        url: '/developers'
        templateUrl: 'app/find_developers/find_developers.html'
        controller: 'FindDevelopersController'
        controllerAs: 'FindDevelopersCtrl'
      .state 'findProjects',
        url: '/projects'
        templateUrl: 'app/find_projects/find_projects.html'
        controller: 'FindProjectsController'
        controllerAs: 'FindProjectsCtrl'

    $urlRouterProvider.otherwise '/'
    $locationProvider.html5Mode true
