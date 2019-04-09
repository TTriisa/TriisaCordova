//create our angularjs app
var bytutorialEbookApp = angular.module('bytutorialEbookApp', ['ngRoute']);
let currentRoute = ''
//once the html is ready we attach the angularjs directive app into the body
angular.element(document).ready(function () {
    if (window.cordova) {
      document.addEventListener('deviceready', function () {
        angular.bootstrap(document.body, ['bytutorialEbookApp']);
      }, false);
    } else {
      angular.bootstrap(document.body, ['bytutorialEbookApp']);
    }
});

//this will be the app controller which will be triggered once the html is ready
bytutorialEbookApp.controller('chapterController', ['$scope', function ($scope) {
	/**** INITIATE MENU SLIDE OUT ****/
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 0,
		'tolerance': 70,
		touch: true
	});

	//we add an event to our main button so when user perform a click, we called the slideout function.
	document.querySelector('#main-button').addEventListener('click', function() {
		slideout.toggle();
	});

	//when user taps or clicks particular menu, we hide the slideout
	$("#menu-list > li > a").on("click", function(){
		//we check if we need to close it automatically
		if($("html").hasClass("slideout-open")){
			slideout.toggle();
		}
	});

	//animateMe function
	function animateMe(myObject, animateType, duration){
		$(myObject).addClass("animated " + animateType).css("animation-delay", duration + "s");
	}

	//we add the fadeIn animation with 0.1 seconds, for more information animate css, please google animate.css in your browser, there are varieties of animations available.
	animateMe("#box-content", "fadeIn", 0.1);

    if(currentRoute == $('#menu-list > li:last').find("a").attr('href').substring(2)) {
        $('#nextPage').attr("disabled", true);
    } else {
        $('#nextPage').attr("disabled", false);
    }

    if(currentRoute == $('#menu-list > li:first').find("a").attr('href').substring(2) || currentRoute == '' ) {
            $('#prevPage').attr("disabled", true);
        } else {
            $('#prevPage').attr("disabled", false);
        }
}]); 

bytutorialEbookApp.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
        currentRoute = current.$$route.originalPath.substring(1);
        $('#menu-list > li').each(function () {
            //console.log(this.children[0].innerHTML.replace(/\s/g, '').toLowerCase())
            if(this.children[0].innerHTML.replace(/\s/g, '').toLowerCase() == currentRoute) {
                this.classList.add("highlight");
            } else {
                this.classList.remove("highlight");
            }
        });
    });
});

$("#nextPage").on("click", function(){
    if(currentRoute == '') currentRoute = 'chapter1'
    console.log($('a[href$="#/'+currentRoute+'"]:first').parent().next("li").find("a").attr('href'))
    if(typeof $('a[href$="#/'+currentRoute+'"]:first').parent().next("li").find("a").attr('href') !== "undefined") {
        window.location.href = $('a[href$="#/'+currentRoute+'"]:first').parent().next("li").find("a").attr('href');
        window.scrollTo(0,0);
    }
});

$("#prevPage").on("click", function(){
    console.log($('a[href$="#/'+currentRoute+'"]:first').parent().prev("li").find("a").attr('href'))
    if(typeof $('a[href$="#/'+currentRoute+'"]:first').parent().prev("li").find("a").attr('href') !== "undefined") {
        window.location.href = $('a[href$="#/'+currentRoute+'"]:first').parent().prev("li").find("a").attr('href');
        window.scrollTo(0,0);
    }
});