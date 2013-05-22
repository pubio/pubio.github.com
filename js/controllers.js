'use strict';

function RecommendationListCtrl($scope, $http, $apiService) {
	
	alert($apiServices.getApiRoot() );
	
  $http.jsonp($apiServices.getApiRoot() + '/recommendations/?callback=JSON_CALLBACK').success(function(data) {
    $scope.recommendations = data.recommendations;
  });

  $http.jsonp('http://secure-shelf-4168.herokuapp.com/topRecommendations/?callback=JSON_CALLBACK').success(function(data) {
    $scope.topRecommendations = data.topRecommendations;
  });
}

function NavBarController($scope, $http) {
    $scope.onTwitterLogin = function() {
        window.location = "/auth/twitter";
    }
    
    $scope.user = {};
    
    $http({method: 'GET', url: '/api/user'}).
      success(function(data, status, headers, config) {
        $scope.user = data;
    });
    
}