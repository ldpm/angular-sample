/**
 * Created by lmiller on 4/18/18.
 */
 

angular.module('demo', [])
    .controller('Photos', function($scope, $http) {
        $http.get('https://drupal7dev-ldpm.c9users.io/articles.json').
        success(function(data) {
            $scope.photos = data;
            console.log(data);
        }).
        error(function (data) {
    $scope.data = "Request failed";
    console.log("fail");
  })
});