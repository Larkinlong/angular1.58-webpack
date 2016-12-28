webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _controllers = __webpack_require__(2);

	var _controllers2 = _interopRequireDefault(_controllers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(3);
	var shoeStoreApp = angular.module('shoeStoreApp', ['ngRoute', 'storeControllers']);

	shoeStoreApp.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider.when('/home', {
	        templateUrl: 'views/home.html'
	    }).when('/about', {
	        templateUrl: 'views/about.html',
	        controller: 'controllers'
	    }).otherwise({
	        redirectTo: '/home'
	    });
	}]);
	// controllers引入

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

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
	app.controller('nameController', function ($scope) {
	    $scope.firstName = "long";
	});
	app.controller('abcController', function ($scope) {
	    $scope.firstName = "jin";
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);