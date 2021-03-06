'use strict';

var SetupCloudController = function($scope, $modalInstance, cloudService, showConfigurationError){
	$scope.model = {};
	$scope.model.showConfigurationError = showConfigurationError;

	$scope.close = function(){
		$modalInstance.close();
	};

	$scope.saveSettings = function(){
		if ($scope.model.kanbanKey != undefined && $scope.model.kanbanKey.length != 0){
			var settings = {kanbanKey: $scope.model.kanbanKey};
			cloudService.saveSettings(settings);

			$scope.close();
		}
	};

	var settings = cloudService.loadSettings();
	
	if (!settings.notSetup){
		$scope.model.kanbanKey = settings.kanbanKey;
	}

};