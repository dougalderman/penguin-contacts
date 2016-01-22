angular.module('penguin')
.service('penguinSvc', function($http) {
    
//    var url = 'https://penguin-contacts.firebaseio.com/';
//
//    var listRef = new Firebase(url + 'penguins');
//    
//    this.addNewPenguin = function(newPenguin) {
//        $firebaseArray(listRef).$add(newPenguin);    
//    };
//    
//    this.getPenguins = function() {
//        return $firebaseArray(listRef);
//    }
    
     this.addNewPenguin = function(newPenguin) {
        return $http({
            method: 'POST',
            url: 'api/penguins',
            data: newPenguin
        }).then(function(response) {
            return response.data;
        });
     }
     
     this.getPenguins = function() {
        return $http({
            method: 'GET',
            url: 'api/penguins'
        }).then(function(response) {
            return response.data;
        });
     }

         
         
})
