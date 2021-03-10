function getLocation() {
	console.log(navigator.geolocation)
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		alert("浏览器不支持地理定位。");
	}
}

function showPosition(position) {
	console.log(position);
	var lat = position.coords.latitude; //纬度 
	var lag = position.coords.longitude; //经度 
	console.log('纬度:' + lat + ',经度:' + lag);
}

function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			console.log("定位失败,用户拒绝请求地理定位");
			break;
		case error.POSITION_UNAVAILABLE:
			console.log("定位失败,位置信息是不可用");
			break;
		case error.TIMEOUT:
			console.log("定位失败,请求获取用户位置超时");
			break;
		case error.UNKNOWN_ERROR:
			console.log("定位失败,定位系统失效");
			break;
	}
}
window.onload = function() {
	var citys = pro_city_data.citylist;
	var oS1 = document.getElementsByTagName('select');
	for (var i = 0; i < citys.length; i++) {
		oS1[0].innerHTML += '<option value="' + citys[i].p + '">' + citys[i].p + '</option>';
	}
	oS1[0].onchange = function() {
		var value = oS1[0].value
		oS1[1].innerHTML = '<option>城市</option>';
		for (var i = 0; i < citys.length; i++) {
			if (value == citys[i].p) {
				for (var j = 0; j < citys[i].c.length; j++) {
					oS1[1].innerHTML += '<option value="' + citys[i].c[j].n + '">' + citys[i].c[j].n +
						'</option>'
				}
			}

		}
	}
	$('#toTop').click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 100);
	})

	getLocation();

	var bannerSwiper = new Swiper('#bannerSwiper', {
		speed: 2000,
		delay: 2000,
		loop: true,
		autoplay:{delay:2000},
		navigation: {
			nextEl: '.t-index-banner-next',
			prevEl: '.t-index-banner-prev',
		},
	})
}
