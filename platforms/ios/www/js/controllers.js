angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
            
            
            $scope.a = function(){
            Wechat.isInstalled(function (installed) {
                               alert("Wechat installed: " + (installed ? "Yes" : "No"));
                               }, function (reason) {
                               alert("Failed: " + reason);
                               });
            
            };
            
            
            
            
            $scope.b = function(){
            var scope = "snsapi_userinfo",
            state = "_" + (+new Date());
            Wechat.auth(scope, state, function (response) {
                        // you may use response.code to get the access token.
                        alert(JSON.stringify(response));
                        }, function (reason) {
                        alert("Failed: " + reason);
                        });
            
            };

            
            $scope.c = function(){
            
            Wechat.share({
                         text: "This is just a plain string",
                         scene: Wechat.Scene.TIMELINE   // share to Timeline
                         }, function () {
                         alert("Success");
                         }, function (reason) {
                         alert("Failed: " + reason);
                         });
            };

            
            
});
