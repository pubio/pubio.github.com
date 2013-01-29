'use strict';

/* App Module */

angular.module('recommendationApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/recommendations', {templateUrl: 'partials/recommendations-list.html',   controller: RecommendationListCtrl}).
      otherwise({redirectTo: '/recommendations'});
}]);
