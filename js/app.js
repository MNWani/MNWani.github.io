var app = angular.module('AppS1', ['ngRoute', 'RouteControllers']);
 
app.config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/events', {
        templateUrl: 'templates/events.html',
        controller: 'EventsController'
    })
    .when('/songs', {
        templateUrl: 'templates/songs.html',
        controller: 'SongsController'
    })
    .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController' 
    })
    .when('/bookings', {
        templateUrl: 'templates/bookings.html',
        controller: 'BookingsController' 
    })
    .when('/about us', {
        templateUrl: 'templates/about us.html',
        controller: 'AboutusController'
    })
    .when('/contacts', {
        templateUrl: 'templates/contacts.html',
        controller: 'ContactsController'
    })
    .when('/terms & conditions', {
        templateUrl: 'templates/terms & conditions.html',
        controller: 'Terms&conditionsController'
    })   
    .when('/privacy policy', {
        templateUrl: 'templates/privacy policy.html',
        controller: 'PrivacypolicyController'
    });
});

