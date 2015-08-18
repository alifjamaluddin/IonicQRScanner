// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var qrapp = angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

qrapp.controller("ScannerController", function($scope,$cordovaBarcodeScanner){
  $scope.scanBarcode = function(){
    $cordovaBarcodeScanner.scan().then(function(imageData){
      // alert(imageData.text);
      $scope.result = "Result: " + imageData.text + "\n" +
                      "Format: " + imageData.format + "\n";
      console.log("format " + imageData.format);
    }, function(error){
      console.log("an error happened" + error);
    });
  }
});

