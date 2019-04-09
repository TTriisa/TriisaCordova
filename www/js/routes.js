bytutorialEbookApp.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl : 'pages/introduction.html',
			controller  : 'chapterController'
		})
		.when('/chapter1', {
			templateUrl : 'pages/chapter1.html',
			controller  : 'chapterController'
		})
		.when('/chapter2', {
			templateUrl : 'pages/chapter2.html',
			controller  : 'chapterController'
		})
		.when('/chapter3', {
			templateUrl : 'pages/chapter3.html',
			controller  : 'chapterController'
		})
		.when('/chapter4', { 
			templateUrl : 'pages/chapter4.html',
			controller  : 'chapterController'
		})
		.when('/chapter5', { 
			templateUrl : 'pages/chapter5.html',
			controller  : 'chapterController'
		})
});   