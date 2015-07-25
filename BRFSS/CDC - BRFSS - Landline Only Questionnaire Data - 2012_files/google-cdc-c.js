
// And now send the account/subweb specific request (if enabled).
$(document).ready(function() {
	var _cdcGoogleAnalytics = CDC.Metrics.GoogleAnalytics.Registration();
	if (_cdcGoogleAnalytics.Enabled) {
		_gaq.push(
			['_setAccount', _cdcGoogleAnalytics.AccountNumber],
			['_setDomainName', _cdcGoogleAnalytics.Domain],
			['_trackPageview'],
			['_trackPageLoadTime']
		);
	}
});

// Write out the GA script reference that actually fires the metrics requests.
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Add the click handlers to track specific events in GA.
$(document).ready(function() {
	$('a').not('a[href^="#"]').click(function() {
		var href = $(this).attr('href');
		if ($(this).hasClass('external') && !$(this).hasClass('skip')) {
			_gaq.push(['_trackEvent', 'Outbound Links', href, href, undefined, false]);
			setTimeout(function() { }, 100);
		} else if ($(this).find('span.plugIns').length > 0) {
			var fileType = href;
			if (fileType.indexOf('?') > -1) {
				fileType = fileType.substring(0, fileType.indexOf('?'));
			}
			if (fileType.indexOf('#') > -1) {
				fileType = fileType.substring(0, fileType.indexOf('#'));
			}
			fileType = fileType.substring(fileType.lastIndexOf('.') + 1).toUpperCase();
			_gaq.push(['_trackEvent', 'Download', fileType, href, undefined, true]);
		} else if ($(this).parent().attr('id') == 'facebookBlock') {
			_gaq.push(['_trackSocial', 'Facebook', 'Recommend', href]);
		} else if ($(this).parent().attr('id') == 'twitterBlock') {
			_gaq.push(['_trackSocial', 'Twitter', 'Tweet', href]);
		} else {
			// Determine the type of button clicked by the CSS class of the parent <li> element.
			var network = $(this).parents('li').attr('class');
			if (network && network.length > 0) {
				network = network.charAt(0).toUpperCase() + network.slice(1).toLowerCase(); 
			}
			var socialAction = "Share"; // Default for non-Facebook/Twitter actions.
			// For Facebook/Twitter we want to differentiate the actions for right-rail and bottom buttons.
			if ($(this).parent().hasClass('facebook')) {
				socialAction = "Like";
			} else if ($(this).parent().hasClass('twitter')) {
				socialAction = "Follow";
			}
			if (network == 'Facebook' ||
				network == 'Twitter' ||
				network == 'Favorites' ||
				network == 'Delicious' ||
				network == 'Google' ||
				network == 'Digg') {
				_gaq.push(['_trackSocial', network, socialAction, href]);
			}
		}
	});
});
