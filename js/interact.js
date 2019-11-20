mui.init();
mui('.mui-table-view').on('tap', '.mui-table-view-cell', function() {
	var routename = this.getAttribute('type');
	var params = {
		'home': 'lvjy/main',
		'search': 'lvjy/searchStation',
		'map': 'lvjy/map',
		'routeplan': 'lvjy/routePlan',
		'oilbean': 'lvjy/myOilBean',
		'store': 'lvjy/oilStore',
		'oilstation': 'lvjy/oilStation',
		'orderlist': 'lvjy/orderList',
		'user': 'lvjy/selfCenter',
		'wechart': 'lvjy/wx',
		'msg': 'lvjy/notice'
	};
	var obj = {},
		para;
	if (routename != 'wechart' && routename != 'oilstation') {
		para = Object.assign(obj, {
			'router': params[routename]
		})
		// gotoAppPage(para, false);
	} else if (routename == 'oilstation') {
		para = Object.assign(obj, {
			'router': params[routename],
			'id': 3762
		})
		// gotoAppPage(para, false);
	} else if (routename == 'wechart') {
		para = params['wechart'];
		gotoAppPage(para, true);
	}
})

function gotoAppPage(jsonData, wx, os) {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //g
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	if (isAndroid && !wx) {
		window.openNativePage.postMessage(jsonData);
	} else if (isAndroid && wx) {
		window.openWeixin.postMessage(jsonData);
	} else if (isIOS && !wx) {
		window.webkit.openNativePage.postMessage(jsonData);
	} else if (isIOS && wx) {
		window.webkit.openWeixin.postMessage(jsonData);
	}
}
