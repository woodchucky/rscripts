//Last Updated 7/17/15 by ML
//Prev Updated 6/29/15 by ML
sessionTimeOut = {
	_timeSet: 60000*20,
	_userstate:"active",
	inactiveTime:"",
	init:function() {
		inactiveTime = setTimeout(sessionTimeOut.logoutUser,sessionTimeOut._timeSet);
		document.onmousemove = sessionTimeOut.resetTimer;
		document.onkeypress = sessionTimeOut.resetTimer;
		document.onscroll = sessionTimeOut.resetTimer;
		document.ontouch = sessionTimeOut.resetTimer;
	},
	logoutUser:function() {
		if(sessionTimeOut._userstate=="active") {
		sessionTimeOut._userstate="inactive";
        $.ajax({
            type:"GET",
            url:"https://login."+getDomain('profreg')+"medscape.com/login/sso/setNetworkAttribute/inactive/true",
            dataType:'jsonp',
            success:function(data) {
                if(window.console){console.log('inactive');}
            }
        });
		}
	},
	resetTimer:function(){
		if(sessionTimeOut._userstate=="active") {
		clearTimeout(sessionTimeOut.inactiveTime);
		inactiveTime = setTimeout(sessionTimeOut.logoutUser,sessionTimeOut._timeSet);
		}
	}
}
var getDomain = function(profreg){
    var _domain ="";
    if (window.location.host.split('.').length == 4){
        _domain = window.location.host.split('.')[1] + ".";
    }
    if (window.location.host.split('.').length == 5){
        _domain = window.location.host.split('.')[1] + "."+ window.location.host.split('.')[2] + ".";
    }
    if(profreg=="profreg"||profreg=="login"){
        _domain = _domain.replace('staging.','').replace('proddev.','');
    }
    return _domain;
}
sessionTimeOut.init();

/* Legacy Tracker Marker Conversion to Omniture Link Scraper */
var trackerMarkerOmni = function(){
	if (typeof $(document).on != 'undefined') {
		$(document).on('click', 'a[href*="/px/tr"]', function(event) {
			var tm = "";
			var clkurl = "";
			if (this.href.match(/(svr|tracker)/) != null) {		
				tm = 'trackerm:' + this.href.match(/\/px\/(trk\.svr|tracker)([^?]+)?/)[0];
			}
			if (this.href.match(/\?exturl=.+$/) != null) {
				clkurl = 'trackerm:' + this.href.match(/\?exturl=.+$/)[0].split("?")[1];
			}
			this.href = this.href.replace(/https?:\/\/[^\/]+\/px\/(tracker|trk\.svr)(\/[^?]+)?\?exturl=/, '');			
			wmdTrackerMarker(tm,clkurl);
		});
	}
}
if (typeof $ != 'undefined') {
	$(document).ready(function() {
		trackerMarkerOmni();
	});
} else {
	window.onload = function() {
		if (typeof $ != 'undefined') {
			trackerMarkerOmni();
		}
	}
}
/* /Legacy Tracker Marker Conversion to Omniture Link Scraper */