angular.module('LunchCheck',[])
		.controller('LunchCheckController',LunchCheckController);
		
		LunchCheckController.$inject = ['$scope'];
		function LunchCheckController($scope){
		$scope.lunch={};
		$scope.message='';
		
		var eval = function(){
			var arr='';
			arr = $scope.lunch.cal;
			var comma = ',';
			var count = 0;
			var tValue = '';
			
			if($scope.lunch.cal === undefined || $scope.lunch.cal === '')
			{
				$scope.message = 'Please enter data first';
			}
			else
			{
				var array = arr.split(comma);
				array.forEach(function(value){
					tValue = value.trim();
					if(tValue!='')
					{
						count++;
					}
				});
				
				if(count<=3)
				{
					$scope.message = 'Enjoy';
				}
				else if(count>3)
				{
					$scope.message = 'Too much!';
				}
			}
			
		};
		$scope.eval = eval;
		}