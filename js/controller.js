angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "home"
    })
    .controller('EventsController', function($scope) {
        $scope.title = "events"
    })
    .controller('SongsController', function($scope, $filter, singles) {
        $scope.title = "songs";
        $scope.singles = singles.getAllSingles();
        $scope.singles2 = $scope.singles;
        $scope.$watch('search', function(val)
        {

          $scope.singles = $filter('filter')($scope.singles2, val);

        });

    })

    .controller('GalleryController', function($scope) {
        $scope.title = "gallery"
    })
    .controller('BookingsController', function($scope) {
        $scope.title = "bookings"
    })
    .controller('AboutusController', function($scope) {
        $scope.title = "about us"
    })
    .controller('ContactsController', function($scope) {
        $scope.title = "contacts"
    })
    .controller('Terms&conditionsController', function($scope) {
        $scope.title = "terms & conditions"
    })
    .controller('PrivacypolicyController', function($scope) {
        $scope.title = "privacy policy"
    })
    .controller('FooterController', ['$scope', function($scope) {
        $scope.someEmail = function() {
        alert("Subscribed!");
    };

}]);


