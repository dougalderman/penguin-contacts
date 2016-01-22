angular.module('penguin')
.controller('mainCtrl', function($scope, penguinSvc) {
    
    $scope.penguins = [];
    
    penguinSvc.getPenguins().then(function(penguins) {
        $scope.penguins = penguins;
    })
    
    $scope.penguins = penguinSvc.getPenguins();
    
    $scope.addNewPenguin = function(penguin) {
        penguinSvc.addNewPenguin(penguin).then(function(newPenguin) {
            $scope.penguins.push(newPenguin);
        })
    }
    
    
})