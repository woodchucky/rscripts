/* Last Modified by ML 7/28/14 @ 11:36AM */
/* Previously Modified by ML 4/15/14 @ 9:53AM */

function getPlAssign(data) {
	var resultsPet = [];
	for (x = 0; x < data.campaigns.length; x++) {
		if (typeof data.campaigns[x].priority != 'undefined')
		{
			resultsPet.push(data.campaigns[x]);
		}
	}
	
	if (resultsPet.length > 0)
	{	
		resultsPet.sort(function(a, b)
		{
			if (a.priority == b.priority)
			{         
				return (new Date(b.sortdt).getTime() - new Date(a.sortdt).getTime());
			}
			return a.priority - b.priority;
		});	
		var lastDate = new Date(resultsPet[0].sortdt).getTime();
		var topPriority = resultsPet[0].priority;
		for (x = 1; x < resultsPet.length; x++)
		{
			if (lastDate != new Date(resultsPet[x].sortdt).getTime() || resultsPet[x].priority != topPriority)
			{
				resultsPet.slice(0,x);
				break;
			}
		}
	
		if (resultsPet.length > 1)
		{
			var rdmSel = Math.round((Math.random()*(resultsPet.length - 1)));
			resultsPet[0] = resultsPet[rdmSel];
		}
		
		var impId = new Date().getTime().toString().slice(2) + Math.random().toString().substr(2,8);
		var pvId;
		if (typeof s_pageview_id != 'undefined')
		{
			pvId = s_pageview_id;
		}
		
		$('body').append('<div id="petWrap"><div id="pet"><div class="closeBtn"><a href="javascript: closePlBob();"></a></div><div class="bucketHeader"><h5>Recommended CME</h5></div><div class="bucketContent"><ul><li></li></ul></div><div class="bucketFooter"></div></div></div>');
		if ($.trim(resultsPet[0].isi) != "") {
			$('#pet ul li').html('<a href="' + resultsPet[0].destUrl + "&src=PET&impId=" + impId + "&pvId=" + pvId + '"><img src="' + $.trim(resultsPet[0].isi) + '" border="0" alt="' + resultsPet[0].title + '" class="featimg" /></a> <a href="' + resultsPet[0].destUrl + "&src=PET&impId=" + impId + "&pvId=" + pvId + '" class="title">' + resultsPet[0].title + '</a> <span class="cmetag">CME</span> <span class="teaser">' + resultsPet[0].description + '</span>');
		}
		else {
			$('#pet ul li').html('<a href="' + resultsPet[0].destUrl + "&src=PET&impId=" + impId + "&pvId=" + pvId + '" class="title">' + resultsPet[0].title + '</a> <span class="cmetag">CME</span> <span class="teaser">' + resultsPet[0].description + '</span>');	
		}
		$('#pet .title').click(function() {wmdTrack("ed-pet_hdl");});
		$('#pet .featimg').click(function() {wmdTrack("ed-pet_img");});
		$('#petWrap').animate({left: '50%'}, 450);
		wmdPageLink("ed-pet-imp");
		var petCp = {'appname': 'pet', 'activityName': 'petimpr', 'impr':[{'tcid': resultsPet[0].cid, 'activityId': resultsPet[0].promoActivityId, 'impId': impId, 'pvId': pvId}]};
		postCp(petCp);
	}	
}	
function closePlBob() {	
	wmdPageLink("ed-pet_x");
	$('#petWrap').animate({left: '0'}, 450);
	$.cookie('closePlBob' + s_registered_user_id,'true', { expires: 7 });
	$('#petWrap').remove();
}
function checkPlAssign() {
	var cmeInviteUrl = '/invitation/view.jsonp?site=2003&clientTypeId=1&channelId=4&status=1&callback=getPlAssign&timestamp=' + new Date().getTime().toString();
	var script = document.createElement("script");
	script.setAttribute("src",cmeInviteUrl);
	script.setAttribute("type","text/javascript");
	document.body.appendChild(script);
}
$(window).load(function() {
	var plCookieName = 'closePlBob' + s_registered_user_id;	
	if ($.cookie(plCookieName) == null)
	{
		setTimeout(checkPlAssign, 1000);
	}
});