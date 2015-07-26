//Last Updated 6/27/2013 @ 1:10AM by ML
//Previously Updated 5/20/2013 @ 9:36AM by ML

function postCp(cpdata,callback) {
	if (typeof cpdata != 'undefined')
	{
		if (typeof s_registered_user_id != 'undefined' || typeof cpdata.uid != 'undefined') {
			if (typeof cpdata.uid == 'undefined')
			{
				cpdata.uid = s_registered_user_id;
			}
			if (typeof cpdata.url == 'undefined')
			{
				cpdata.url = encodeURIComponent(window.location.href.split("?")[0]);
			}
			cpdata.date = new Date().getTime();
			var cpJSON = JSON.stringify(cpdata);
			var stagingChk = "";
			if (window.location.href.indexOf(".staging.") != -1)
				{
				stagingChk = ".staging";
				}
			if (window.location.href.match(/\.qa\d\d/) != null)
				{
				stagingChk = stagingChk + window.location.href.match(/\.qa\d\d/)[0];
				}
				
				$.ajax({
					type: "GET",
					contentType: "application/jsonp",
					url: "http://api" + stagingChk + ".medscape.com/cp/events.json",
					data: 'event=' + cpJSON,
					dataType: "jsonp",
					timeout: 2000,
					complete: callback
				});
				
				/* if (window.XMLHttpRequest)
				{
					xmlhttp = new XMLHttpRequest();
				}
				else
				{
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
	
				if (typeof callback != 'undefined')
				{
					xmlhttp.onreadystatechange=function()
					{
						if (xmlhttp.readyState==4 && xmlhttp.status==201)
						{
							callback();
						}
					}
				}
	
				xmlhttp.open("GET", "http://api" + stagingChk + ".medscape.com/cp/events.json?" + "event=" + cpJSON, true);
				xmlhttp.send(); */
				
		}
	}
}