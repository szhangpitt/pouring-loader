var appModule = angular.module('tagdemo', []);

appModule.controller('UIController', ['$scope', function ($scope) {

		$scope.imageLoadPercentage = 0;
		$scope.tagLoadPercentage = 0;
		$scope.advLoadPercentage = 0;

	}]);





appModule.directive('loadProgressIcon', [function () {
	return {
		restrict: 'A',
		replace: true,
		scope: {
			iconclass: '@', 
			progress: '@', 
			reverse: '@', 
			towards: '@' /*could be up, down, right*/, 
			instant: '@',
			activecolor: '@',
			defaultcolor: '@'
		},
		template: '<div class="pouring-loader" style="{{elementStyle}}"> ' +
						'<div class=" view-port" style="{{viewPortStyle}}" ng-class="{\'fg\': towards === \'down\' || towards === \'right\', \'bg\': towards === \'up\' || !towards}">' +
							'<span style="{{iconStyle}} {{backColorStyle}}" class="{{iconclass}}"></span>' +
						'</div>'	+
						'<div class=" view-port" ng-class="{\'bg\': towards === \'down\' || towards === \'right\', \'fg\':  towards === \'up\' || !towards}"' +
						    'style="{{viewPortStyle}} {{towards === \'right\' && \'width\' || \'height\'}}: {{(towards === \'down\' || towards === \'right\') && progress || (100 - progress)}}%">'	+
							'<span style="{{iconStyle}} {{frontColorStyle}}" class="{{iconclass}}"></span>' 	+	
						'</div>' +
					'</div>',
		link: function (scope, element, attrs) {	
			var elementHeight = element.height();		
			var DEFAULT_BACK_COLOR = '#333', DEFAULT_FRONT_COLOR = '#3BAFDA'; 
			var inertiaStyle = (scope.instant === 'true') ? '' : (' -moz-transition: height 0.8s ease-out, width 0.8s ease-out; ' + 
								    '-o-transition: height 0.8s ease-out, width 0.8s ease-out;' +
	    							'-webkit-transition: height 0.8s ease-out, width 0.8s ease-out;' +
								    'transition: height 0.8s ease-out, width 0.8s ease-out;');
									

			scope.elementStyle = ' position: relative ';
			scope.viewPortStyle = inertiaStyle + ' position: absolute; left: 0px; top: 0px; bottom: 0px; overflow: hidden; margin: 0px; ';
			
			scope.iconStyle = 'margin: 0; font-size: ' + elementHeight + 'px; ' 
			
			var backToBeSized = scope.towards && (scope.towards === 'down' || scope.towards === 'right');
			scope.backColorStyle = ' color: ' + (!backToBeSized ? (scope.activecolor || DEFAULT_FRONT_COLOR) : (scope.defaultcolor || DEFAULT_BACK_COLOR)) + '; ';
			scope.frontColorStyle = ' color: ' + (backToBeSized ? (scope.activecolor || DEFAULT_FRONT_COLOR) : (scope.defaultcolor || DEFAULT_BACK_COLOR)) + '; ';
			
			
		}
	};
}])

