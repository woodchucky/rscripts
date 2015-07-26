// Last Updated 12/3/14 by SC
// Previously Updated 9/26/14 12:38PM by EB

var currentheader = "edtab";
var leftpos;
var toppos;
var leavingMedscapePath;
$(document).ready(function() {

    $('.leavingMedscape').each(function() {
 		var path = $(this).attr("href");
		$(this).removeAttr("href");
        $(this).attr("onclick", "leavingMedscape()");	
		 $(this).css("cursor","pointer");
		leavingMedscapePath = path;	
    });
	



	if (!$.cookie("leaveorgalert")) {
		$(".edu_alert").click(function(e){
			leftpos = e.pageX;
			toppos = e.pageY;
  //    $('#status2').html(e.pageX +', '+ e.pageY);
   });
		$(".edu_alert").each(function() {
			var linkpath = $(this).attr('href');
			$(this).attr("href","javascript:leaveORGask('"+linkpath+"');");
		});
	}

   	$('#edtab').removeClass('closedtab');		
	$('#edtab').addClass('opentab');

	$("#todaymenu a").each(function() {
        var nsurl = $(this).attr('href');
		if (nsurl.indexOf("com") == "-1") {
			var nnsurl = "http://www.medscape.com" + nsurl;
			$(this).attr('href',nnsurl);
		}
	});

	changeSeachDB('searchdbtext', "Education");
	$("#searchdbvalue").val("3");

	$('#searchtextinput2').attr('value','Search Medscape Education');

	$("form[name=SearchFormFooter] input[name=newSearchFooter]").val('1');
	$("form[name=SearchFormFooter]").attr('action','http://search.medscape.com/education-search');
	
	checkHorizQ();
	qaCpFunc.init();
	
	if ( $.browser.msie && $('a[href*="joindiscuss"]').attr('href') !=0) {
		var discussionLink = $('a[href*="joindiscuss"]').attr('href');
		if(typeof(discussionLink)!="undefined"){
		discussionLink= discussionLink.split("'");
		$('a[href*="joindiscuss"]').attr("href", "javascript:openNewWindow('"+discussionLink[1]+"');")
		}
	}

});
function openNewWindow(url) {
    popupWin = window.open(url,
    '',
    ' scrollbars, resizable,location=no, width=700, height=480')
}

function leaveORGask(linkpath) {
	$("#leaveORG")
		.css("top", toppos+10+"px")
		.css("left", leftpos+"px");
	$("#leaveORG").fadeIn();
	$("#org_leave_btn").click(function() {
		var expDate=new Date();
		expDate.setFullYear(2030,0,1);
		$.cookie("leaveorgalert", "false", {domain: '.medscape.org', expires: expDate, path: '/'});
		window.location = linkpath;
	});
	$("#org_stay_btn").click(function() {
		$("#leaveORG").hide();	  
	});		
}
function submitToSearchFormHeader() {
	document.forms.SearchFormHeader.submit();
}
function submitToSearchFormFooter() {
	document.forms.SearchFormFooter.action="http://search.medscape.com/education-search";
	document.forms.SearchFormFooter.newSearchFooter.value="1";
	setTimeout("document.forms.SearchFormFooter.submit();", 250);
}
function rotatorEdu(rotateID) {
	var rotatorTotal = $('ul#'+rotateID+' li').size();
	$('#'+rotateID).css({'width':rotatorTotal*195+'px'});
	rotatorTotal=Math.ceil(rotatorTotal/3.0) * 3;
	var thisli=3;
	if (rotatorTotal <= thisli) {
		$('#rotate_left').hide();
		$('#rotate_right').hide();
	}

	$('#rotate_left').click(function() {
		if ($(this).hasClass('rotate_btn-dis')) {
			return }
		else {
			thisli = thisli-3;
			$('ul#'+rotateID).animate({"left": "+=585px"}, "slow");
			if (thisli != rotatorTotal) {
				$('#rotate_right').removeClass('rotate_btn-dis');
			}
			if (thisli == '3') {
				$('#rotate_left').addClass('rotate_btn-dis');
			} else {
				$('#rotate_left').removeClass('rotate_btn-dis');
			}
		}
	});
	
	$('#rotate_right').click(function() {
		 if ($(this).hasClass('rotate_btn-dis')) {
			 return }
		else {
			thisli = thisli+3;
			$('ul#'+rotateID).animate({"left": "-=585px"}, "slow");
			if (thisli != 3) {
				$('#rotate_left').removeClass('rotate_btn-dis');
			}
			if (thisli == rotatorTotal) {
				 $('#rotate_right').addClass('rotate_btn-dis');
			} else {
				$('#rotate_right').removeClass('rotate_btn-dis');
			}
		} 
	});
}
// Virtual Page Tracking
function BItrack_dislayer() {
	var CtrackURL = window.location.href;
	var articleRef = $("input[name=map_artid]").attr("value");
	if (articleRef) {
		CtrackURL = "http://www.medscape.org/viewarticle/" + articleRef;
	}
	window.VPTrackFrame.getFile("desturl="+CtrackURL+"%5fdiscussion");
}

// CV Network Join the Discussion Link handler
function joindiscuss(disurl) {
	$('#join_dis_iframe').attr('src',disurl);
	BItrack_dislayer();
	joindis_toggle();
	$('#joindis_layer').css("top",($(window).scrollTop()+20)+"px");
}
// Discussion Layer toggle
function joindis_toggle() {
	$('#joindis_layer').toggle();
}

// Article / CME Workflow - Horizontal Answer Choice Capability
function checkHorizQ() {
	if ($('input[name=horizQ]').length > 0)	{
		$('form[name=questionForm]').each(function() {
			if ($(this).find('input[name=formType]').val() == "INTERNAL") {	
				$(this).find('input[name=horizQ]').each(function() {		
					$(this).parent().next().nextUntil('input[name=question_id]').filter('.answertext12').last().after('<div class="spacer"></div>');
					$(this).parent().next().nextUntil('input[name=question_id]').filter('.answertext12').find('input').each(function() {
						$(this).wrap('<div align="center" />');
						$(this).parent().appendTo(this.parentNode.parentNode);
					});
					$(this).parent().next().nextUntil('input[name=question_id]').filter('.answertext12').addClass('horizQ');
				});		
			}
			else {
				$(this).find('input[name=horizQ]').parent().parent().append('<div class="spacer"></div>');
				$(this).find('input[name=horizQ]').parent().siblings('.answertext12').find('input').each(function() {
					$(this).wrap('<div align="center" />');
					$(this).parent().appendTo(this.parentNode.parentNode);
				});
				$(this).find('input[name=horizQ]').parent().siblings('.answertext12').addClass('horizQ');
			}
		});	
	}
}

/* CME QUESTIONNAIRE CP FUNCTIONS */
var qaCpFunc = { /* QA CP Object Namespace */
	cpQuesArr: [],
	stallSubmit: function (e) { /* Prevent Default Form Submission Once */
		e.preventDefault();
		$(this).unbind('submit', qaCpFunc.stallSubmit);
		qaCpFunc.parseAnsData($(this));
	},
	parseAnsData: function (parentForm) { /* Gather QA Info + Create Array of CP Objects  */
		if (parentForm.find('input[name=formType]').val() == "INTERNAL") {
			$('.cpQuesId').remove();
			$('input[name=question_id]').before('<span class="cpQuesId" style="display:none;"></span>');
		}
		parentForm.find('input[name=qaCp]').each(function () { /* For each question marked for CP, create CP object and push to array */
			var qaCpObj = {
				'activityId': '',
				'appname': 'qna',
				'activityName': ''
			};
			var qaDomTree;
			/* Internal Inline Form */
			if (parentForm.find('input[name=formType]').val() == "INTERNAL") {
				qaCpObj.activityId = $(this).parent().prevUntil('.cpQuesId').filter('input[name=question_id]').val();
				if ($(this).parent().next().nextUntil('input[name=question_id]').length != 0) {
					qaDomTree = $(this).parent().next().nextUntil('input[name=question_id]');
				} else {
					qaDomTree = $(this).parent().next().nextUntil('*:has(input[type=submit])');
				}				
			}
			/* JSP Tag Questionnaire Form */
			else if (parentForm.find('input[name=formType]').val() == "DEFAULT" && parentForm.find('table.qatable').length > 0) {
				qaCpObj.activityId = $(this).parent().parent().parent().find('input[name=question_id]').val();
				qaDomTree = $(this).parent().parent().parent();
			}
			/* CME Workflow Page Forms */
			else {
				qaCpObj.activityId = $(this).parent().parent().find('input[name=question_id]').val();
				qaDomTree = $(this).parent().parent();
			}
			qaDomTree.find('input[name*=option-]').each(function () {
				if (this.checked == true) {
					if (qaCpObj.activityName == "") {
						qaCpObj.activityName = this.value;
					} else {
						qaCpObj.activityName = qaCpObj.activityName + "," + this.value;
					}
				}
			});
			qaDomTree.find('select[name*=option-]').each(function () {
				if (this.selectedIndex != 0 && this.options[this.selectedIndex].value != 0) {
					qaCpObj.activityName = this.options[this.selectedIndex].value;
				}
			});
			qaDomTree.find('input[name*=option-][type=text]').each(function () {
				if ($.trim($(this).val()) != '') {
					qaCpObj.activityName = $.trim($(this).val());
				}
			});
			qaDomTree.find('textarea[name*=option-]').each(function () {
				if ($.trim($(this).val()) != '') {
					qaCpObj.activityName = $.trim($(this).val());
				}
			});
			if (qaCpObj.activityName != '') {
				qaCpFunc.cpQuesArr.push(qaCpObj);
			}
		});
		qaCpFunc.submitAfterCp(parentForm);
	},
	submitAfterCp: function (parentForm) { /* Post all CP Objects in Array, then proceed with Default Form Submission */
		if (qaCpFunc.cpQuesArr.length > 0) {
			$(qaCpFunc.cpQuesArr).each(function (idx) {
				if (idx == qaCpFunc.cpQuesArr.length - 1) {
					postCp(qaCpFunc.cpQuesArr[idx], function () {
						parentForm.submit();
					});
				} else {
					postCp(qaCpFunc.cpQuesArr[idx]);
				}
			});
		} else {
			parentForm.submit();
		}
	},
	init: function () { /* Search for QA CP trigger tag, if present bind QA forms to CP function */
		if ($('input[name=qaCp]').length > 0) {
			$('form[name=questionForm]').each(function () {
				$(this).bind('submit', qaCpFunc.stallSubmit);
			});
		}
	}
};




// Message when leaving Medscape page
function leavingMedscape() {


var offset = $('.leavingMedscape').offset();
var leftoffset = offset.left;
var topoffset = offset.top;


var origleaveOrgText = $('.leaveORG_text').html();
var origleaveOrgConfirmBtn = $('#org_leave_btn').html();
var origleaveOrgCancelBtn = $('#org_stay_btn').html();



//convert the ids so the existing functions are removed
$('#org_leave_btn').attr("id","org_leave_btn_external");
$('#org_stay_btn').attr("id","org_stay_btn_external");

//Change the text section
$('.leaveORG_text').html("You are about to visit a website outside of Medscape. Please familiarize yourself with this other website's Privacy Policy as it differs from ours.  The views and opinions expressed on this other website do not necessarily reflect those of Medscape or its affiliated companies. Medscape is not responsible for the content of these websites, nor does Medscape endorse these websites or the information they provide.");




//Onclick of cancel
$( "#org_stay_btn_external" ).click(function() {
externalLinkCancel();
});	
	
//Onclick of confirm	
$('#org_leave_btn_external').html('<a href="'+ leavingMedscapePath +'" target="_blank">Continue</a>');
$('#org_leave_btn_external a').css('color',"#fff");

$('#org_leave_btn_external').click(function(){
		$('#org_leave_btn_external').html('');
		externalLinkCancel();
});
	
	



//show the message box
	$("#leaveORG")
		.css("top", topoffset+10+"px")
		.css("left", leftoffset+"px");
  $('#leaveORG').show();

	
	
	
function externalLinkCancel() {
        $('#leaveORG').hide();
		$('.leaveORG_text').html(origleaveOrgText);
		$('#org_leave_btn_external').attr("id","org_leave_btn");
		$('#org_stay_btn_external').attr("id","org_stay_btn");
        $('#org_leave_btn').html(origleaveOrgConfirmBtn);
        $('#org_stay_btn').html(origleaveOrgCancelBtn);
};	
	
	
	
	
};






// Flat Page Div Rotate


var rotateDivs = {


init: function(elem, speed) {
        rotateDivs.prep(elem);
        setInterval("rotateDivs.execute('"+elem+"')", speed);
      },

prep: function(elem) {
        $(elem+" .rotContent").fadeOut(0);
        $(elem+" .rotContent:first").fadeIn(0).addClass("active");
      },

execute:  function(elem) {
        var active = $(elem+" div.active");
        var next = active.next();
        if (next.length == 0) 
          next = $(elem+" .rotContent:first");
        active.removeClass("active").css("position","absolute").fadeOut(0);
        next.addClass("active").fadeIn(10, function() {
	    $(".rotContent").css("position","static");
	});
     }
};