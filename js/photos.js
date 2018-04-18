/**
 * Created by lmiller on 4/18/18.
 */
angular.module('demo', [])
    .controller('Photos', function($scope, $http) {
        $http.get('https://jsonplaceholder.typicode.com/photos').
        then(function(response) {
            $scope.photos = response.data;
        });
    });