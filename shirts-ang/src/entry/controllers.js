// ＊＊＊＊＊
// 轮播图
// ＊＊＊＊＊
var app = angular.module('storeControllers', []);
// app.controller('slideController', 
//     function ($scope) {
//         // 设置轮播图图片间隔
//         $scope.myInterval = 5000;
//         // 轮播图数据初始化
//         var slides = $scope.slides = [];
//         // 添加轮播图源
//         slides.push({ image: '../img/about.png', text: '亲爱的你，情人节快乐' });
//         slides.push({ image: '../img/home.png', text: '亲爱的你，情人节快乐' });
// });
app.controller('nameController',
    function($scope) {
        $scope.firstName = "long";
    });
app.controller('abcController',
    function($scope) {
        $scope.firstName = "jin";
    });