'use strict';

function RecommendationListCtrl($scope, $http) {
  $http.jsonp('http://secure-shelf-4168.herokuapp.com/recommendations/?callback=JSON_CALLBACK').success(function(data) {
    $scope.recommendations = data.recommendations;
  });

  $http.jsonp('http://secure-shelf-4168.herokuapp.com/topRecommendations/?callback=JSON_CALLBACK').success(function(data) {
    $scope.topRecommendations = data.topRecommendations;
  });
}


function LoginCtrl($scope, $http) {
  $http.jsonp('http://secure-shelf-4168.herokuapp.com/session/?callback=JSON_CALLBACK').success(function(data) {
    $scope.recommendations = data.recommendations;
  });
}