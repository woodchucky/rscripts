// last update 4/28/15 - JN | previous update 2/18/15 JN
window.cme_tracker = window.cme_tracker || function(opt){
	_.mixin({
		pickDeep: function(obj){
			var copy = {},
				keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
			this.each(keys, function(key) {
				var subKeys = key.split('.');
				key = subKeys.shift();
				if(key in obj){
					// pick nested properties
					if(subKeys.length>0){
						// extend property (if defined before)
						if(copy[key]){
							_.extend(copy[key], _.pickDeep(obj[key], subKeys.join('.')));
						}
						else{
							copy[key] = _.pickDeep(obj[key], subKeys.join('.'));
						}
					}
					else{
						copy[key] = obj[key];
					}
				}
			});
			return copy;
		}
	});
	var nanToZero = function(obj){
		if(isNaN(obj)){
			return 0.00;
		} else {
			return parseFloat(Math.round(obj * 100) / 100).toFixed(2);
		}
	};
	//private
	var privateSettings = jQuery.extend({
		inProgressPICMEWrap: "pi-cmeActivities",
		inProgressCMEWrap: "cmeActivities",
		completedWrap: "professionalCredits",
		locWrap: "lettersOfCompletion",
		userInfoWrap: "user-info",
		isCurrentYearSelected: false,
		totalProfessionalCredits: 0,
		totalPICMECreadits: 0,
		defaultCELabels:['CME','NurseCE','PharmacistCE','PsychologistCE','CMLE','NursePractitionerCE','PhysicianAssistantCE','ExternalWebMDTrack','ExternalCME'],
		defaultData: {
			"referrerUri": "",
			"viewCertificateUri": "",
			"continueActivityUri":"",
			"participation": "",
			"ti": "",
			"cc": "",
			"provider": "",
			"credType": "n/a",
			"credit": "0",
			"rxCredit": "0"
		},
		defaultUserInfo: {
			"fName": "n/a",
			"lName": "n/a",
			"stateLicensingUrl": userInfo.stateLicensingUrl,
			"totalCredits": "0.00",
			"totalRXCredits": "0.00",
			"currentYearCredits": null,
			"currentYearrxCredits": null
		},
		defaultRecommendedData: {
			"cid": "n/a",
			"isLegacyCampaign": "n/a",
			"expdt": "n/a",
			"reldt": "n/a",
			"sortdt": "n/a",
			"title":" n/a",
			"description": "n/a",
			"isi": "n/a",
			"visited": "n/a",
			"isNew": "n/a",
			"isExpiring": "n/a",
			"isCompleted": "n/a",
			"completionDate": "n/a",
			"rewardURL": "n/a",
			"item": "n/a",
			"showGift": "n/a",
			"segment": "n/a",
			"adId": "n/a",
			"destUrl": "n/a",
			"type": "n/a",
			"gift": "n/a",
			"promoActivityId": "n/a"
		}
	}, opt);
	var suggestedActivitiesPartial =  _.template(
		"<li>"+
			"<a class='title' href='<%= destUrl %>'><%= title %></a>"+
			"<span class='teaser'><%= description %></span>"+
			"<div class='byline'></div>"+
			"<div class='cmeType'><%= type %></div>"+
		"</li>"
	);
	var noDataPartial = "<div class='errorMsg'>No results available</div>";
	var tableDataPartial= _.template(
		"<div class='activityRow'>"+
			"<div class='activityData cell1'>"+
				"<%if(continueActivityUri !== ''){%>"+
					"<a href='<%=continueActivityUri%>'>Complete Activity</a>"+
				"<% } else {%>"+
					"<a href='<%=referrerUri%>'>View Activity</a><br />"+
					"<a href='<%=viewCertificateUri%>'>View/Print Certificate</a>"+
				"<%}%>"+
			"</div>"+
			"<div class='activityData cell2'><%= participation %></div>"+
			"<div class='activityData cell3'><%= ti %></div>"+
			"<div class='activityData cell4'><%= cc %></div>"+
			"<div class='activityData cell5'><%= provider %></div>"+
			"<div class='activityData cell6'><%= credType %></div>"+
			"<div class='activityData cell7'><%= rxCredit %></div>"+
			"<div class='activityData cell8'><%= credit %></div>"+
		"</div>"
	);
	var totalCreditsPartial = _.template(
		"<div class='credits'>Total Credits <span class='creditTotal'><%= totalCredits %></span></div>"+
		"<div class='rxCredits'>( <%= totalRXCredits %> RX )</div>"
	);
	var currentYearCreditsAndStateDataPartial = _.template(
		"<div class='credits'><%=currentYear %> CREDITS EARNED <span class='creditTotal'><%= currentYearCredits %></span></div>"+
		"<div class='rxCredits'>( <%= currentYearrxCredits %> RX )</div>"+
		"<% if( stateLicensingUrl != '') { %>"+
		"<div class='requirements'><a target='_blank' href='<%= stateLicensingUrl %>'>View State <%= trackerText %> Requirements</a></div>"+
		"<% } %>"
	);
	var userInfoPartial = _.template("Our records identify you as <strong>Dr. <%= fName %> <%= lName %></strong> Username: <strong><%= uName %></strong>");
	var renderTableRows = function(inCmeDataArray, inTarget, validForTotal){
		var target = $(document.getElementById(inTarget)).find(".activityTable");
		target.find(".activityRow").remove();//To do. Remove and remove html
		if(typeof inCmeDataArray === "undefined" || _.isEmpty(inCmeDataArray) === true){
			if(target.parent().find(".errorMsg").length === 0){
				target.parent().append(noDataPartial);
			}
		}else{
			target.parent().find(".errorMsg").remove();
			_.each(inCmeDataArray, function (inCreditData, inCount, obj){
				var cleanedObj = _.pickDeep(inCreditData, _.keys(privateSettings.defaultData));
				if(validForTotal === true){
					privateSettings.defaultUserInfo.totalCredits = parseFloat(privateSettings.defaultUserInfo.totalCredits) + parseFloat(nanToZero(cleanedObj.credit));
					privateSettings.defaultUserInfo.totalRXCredits = parseFloat(privateSettings.defaultUserInfo.totalRXCredits) + parseFloat(nanToZero(cleanedObj.rxCredit));
				}
				target.append(tableDataPartial(_.extend(_.clone(privateSettings.defaultData), cleanedObj)));
			});
		}
		var cleanedObj = jQuery.extend(privateSettings.defaultUserInfo, {"totalCredits":nanToZero(privateSettings.defaultUserInfo.totalCredits), "currentYearrxCredits": nanToZero(privateSettings.defaultUserInfo.totalRXCredits)});
		cleanedObj.totalCredits = nanToZero(cleanedObj.totalCredits);
		cleanedObj.totalRXCredits = nanToZero(cleanedObj.totalRXCredits);

		jQuery("#totalCredits").html(totalCreditsPartial(cleanedObj));
	};
	var renderTotalCreditsAndStateData = function(jsonObj){
		var cleanedObj = jQuery.extend(privateSettings.defaultUserInfo, jsonObj);
	};
	var renderCurrentYearCreditsAndStateData = function(activityData){
		var cleanedObj = jQuery.extend(privateSettings.defaultUserInfo, {currentYear:userInfo.currentYear, "currentYearCredits":nanToZero(privateSettings.defaultUserInfo.currentYearCredits), "currentYearrxCredits": nanToZero(privateSettings.defaultUserInfo.currentYearrxCredits), "trackerText":userInfo.trackerText});
		jQuery("#cmeCredits").html(currentYearCreditsAndStateDataPartial(cleanedObj));
		hideRxCredits();
	};
	var renderUserInfo = function(inUserInfo, inTarget){
		var cleanedObj = jQuery.extend(inUserInfo, {});
		jQuery(inTarget).innerHTML = userInfoPartial(cleanedObj);
	};
	var resetTotalCredits = function(){
		privateSettings.defaultUserInfo.totalCredits = 0;
		privateSettings.defaultUserInfo.totalRXCredits = 0;
	};
	var renderRecommendedActivities = function(inActivityData, inTarget){
		var target = jQuery(document.getElementById(inTarget));
		target.find("li").remove();// todo remove
		if(inActivityData === "" || _.isEmpty(inActivityData) === true) {
			target.append("<li>No Activities Avialable.</li>");
			jQuery("#activities").hide();
		} else {
			_.each(inActivityData, function (inRecommendedData, inCount) {
				target.append(suggestedActivitiesPartial(inRecommendedData));
			});
			if(userInfo.isMobile === false){
				carousel('activitiesList','829','3','64');
			}
			jQuery("#activities").show();
		}
	};
	var searchParamsDatePopulate = function(){
		function gup( name ){
			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)";
			var regex = new RegExp( regexS );
			var results = regex.exec( window.location.href );
			if( results === null ){
				return null;
			} else {
				return results[1];
			}
		}
		if(gup("fmonth") !== null || gup("fyear") !== null || gup("tmonth") !== null || gup("tyear") !== null){
			$("#fmonth").val(gup("fmonth"));
			$("#fyear").val(gup("fyear"));
			$("#tmonth").val(gup("tmonth"));
			$("#tyear").val(gup("tyear"));
		}
	};
	var handlePrint = function(){
		jQuery("#printLink, #credentialsPrintLink").bind("click", function(e){
			e.preventDefault();
			var theLocation = location.protocol+'//'+location.host+location.pathname+"?"+jQuery("#cme-date-form").serialize()+"&type=trackerPrint";
			window.location.href = theLocation;
		});
	};
	var hideRxCredits = function (){
		if(userInfo.stateLicensingUrl !=="/public/nursecestaterequirements"){
			jQuery(".cell7,.rxCredits").hide();
		}
	};
	return {
		publicSettings:{

		},
		init: function () {
			searchParamsDatePopulate();
			handlePrint();
			//to do: move form values to settings? refactor init log, its getting messy.
			function getActivityData(){
				jQuery.ajax({
					cache: false,
					type: "GET",
					timeout: 5000,
					dataType: "json",
					url: "/activitytracker/json?"+jQuery("#cme-date-form").serialize(),
					success: function(jsonObj){
						resetTotalCredits();
						var combinedCEActivities;
						for(var i = 0; i < privateSettings.defaultCELabels.length; i++ ){
							if(_.isUndefined(jsonObj.Completed[privateSettings.defaultCELabels[i]]) === false){
								var CE_completed_array_data = jsonObj.Completed[privateSettings.defaultCELabels[i]];
								combinedCEActivities = _.union(jsonObj.Completed[privateSettings.defaultCELabels[i]], combinedCEActivities);
							}
						}
						var combinedSortedActivities = _.sortBy(combinedCEActivities, function(o) {
							var dateSplite = o.participation.split("/");
							var date = new Date(parseInt(dateSplite[2], 10), parseInt(dateSplite[0] - 1, 10), parseInt(dateSplite[1], 10));
							return -date;
						});
						renderTableRows(combinedSortedActivities, privateSettings.completedWrap, true);
						renderTableRows(jsonObj.Completed.LOC, privateSettings.locWrap, true);
						renderTableRows(jsonObj.InProgress.CMEInprogress, privateSettings.inProgressCMEWrap, false);
						renderTableRows(jsonObj.InProgress.PICMEInprogress, privateSettings.inProgressPICMEWrap, true);
						hideRxCredits();
					},
					error: function(jsonObj){
						alert("Something is not working as expected. Please report this issue here \n http://help.medscape.com/ics/support/ticketnewwizard.asp?style=classic");
					},
					complete: function(){
						if(privateSettings.defaultUserInfo.currentYearCredits !== null && privateSettings.defaultUserInfo.currentYearrxCredits !== null){
							renderCurrentYearCreditsAndStateData();
						} else {
							if($("#fyear").val() != userInfo.currentYear || $("#tyear").val() != userInfo.currentYear || $("#fmonth").val() != 1 && $("#tmonth").val() != 12){
								jQuery.ajax({
									cache: false,
									type: "GET",
									timeout: 5000,
									dataType: "json",
									url: "activitytracker/json?fmonth=1&fyear="+userInfo.currentYear+"&tmonth=12&tyear="+userInfo.currentYear,
									success: function(jsonObj){
										var combinedCEActivities;
										for(var i = 0; i < privateSettings.defaultCELabels.length; i++ ){
											if(_.isUndefined(jsonObj.Completed[privateSettings.defaultCELabels[i]]) === false){
												var CE_completed_array_data = jsonObj.Completed[privateSettings.defaultCELabels[i]];
												combinedCEActivities = _.union(jsonObj.Completed[privateSettings.defaultCELabels[i]], combinedCEActivities);
											}
										}
										_.each(combinedCEActivities, function (inCreditData, inCount, obj){
											var cleanedObj = _.pickDeep(inCreditData, _.keys(privateSettings.defaultData));
											privateSettings.defaultUserInfo.currentYearCredits +=  parseFloat(nanToZero(cleanedObj.credit));
											privateSettings.defaultUserInfo.currentYearrxCredits += parseFloat(nanToZero(cleanedObj.rxCredit));
										});
										renderCurrentYearCreditsAndStateData();
									},
									error: function(jsonObj){
										alert("Something is not working as expected. Please report this issue here \n http://help.medscape.com/ics/support/ticketnewwizard.asp?style=classic");
									}
								});
								renderCurrentYearCreditsAndStateData();
							} else {
								privateSettings.defaultUserInfo.currentYearCredits = privateSettings.defaultUserInfo.totalCredits;
								privateSettings.defaultUserInfo.currentYearrxCredits = privateSettings.defaultUserInfo.totalRXCredits;
								renderCurrentYearCreditsAndStateData();
							}
						}
					}
				});
				hideRxCredits();
			}
			function getRecommendedActivityData(){
				jQuery.ajax({
					cache: false,
					type: "GET",
					timeout: 5000,
					dataType: "json",
					url: '/invitation/view.json?site=2003&clientTypeId=1&channelId=5&status=1&timestamp=' + new Date().getTime().toString(),
					success: function (jsonObj) {
						renderRecommendedActivities(jsonObj.campaigns, "activitiesList");
					},
					error: function (jsonObj) {
						alert("Something is not working as expected. Please report this issue here \n http://help.medscape.com/ics/support/ticketnewwizard.asp?style=classic");
					}
				});
			}
			jQuery("#cme-date-form").submit(function(e){
				e.preventDefault();
				var validDate = true;
				var fmonth = $("#fmonth");
				var fyear = $("#fyear");
				var lmonth = $("#tmonth");
				var lyear = $("#tyear");
				if(parseInt(lyear.val()) < parseInt(fyear.val())){
					validDate=false;
				} else if (parseInt(lyear.val()) == parseInt(fyear.val()) && parseInt(fmonth.val()) > parseInt(lmonth.val())) {
					validDate=false;
				}
				if(validDate === false){
					alert("'From Date' can not be later than 'To Date' ! ");
					return false;
				} else {
					getActivityData();
				}
			});
			jQuery("#yearMbl").bind("change", function(){
				jQuery("#fmonth").val(1);
				jQuery("#fyear").val(jQuery(this).val());
				jQuery("#tmonth").val(12);
				jQuery("#tyear").val(jQuery(this).val());
				getActivityData();
			});
			getActivityData();
			getRecommendedActivityData();
		},
	};
};
// to do refactor this.
$(function(){
	if(userInfo.isMobile === false){
		$('#in-progress, #petWrap').hide();
	} else {
		$('#in-progress').prepend('<ul class="mobileHidden"><li><a href="#in-progress" class="tabLink">In-Progress</a></li></ul>').show();
		$('#petWrap').hide();
	}
	$('#tabs ul li:first').addClass('active');
	$('#tabs ul li a').click(function() {
		var currentOff = $('#tabs ul li.active a').attr('href');
		$('#tabs ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentOn = $(this).attr('href');
		$(currentOff).hide();
		$(currentOn).show();
		return false;
	});
});
