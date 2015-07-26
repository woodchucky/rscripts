// updated 2/20/2015 by JS
// previous update 10/22/2014 at 12:00pm by ML
/* Set the domain and sub-domain */
function SetmBoxDOMenv () {
	var pageCurrentURL = window.location.href.toLowerCase();
    var subDOMenv;
        if (/qa02/i.test(pageCurrentURL)) {
            if (/staging/i.test(pageCurrentURL)) {
                subDOMenv = ".staging.qa02";
            } else {
                subDOMenv = ".qa02";
            }
        } else if (/qa01/i.test(pageCurrentURL)) {
            if (/staging/i.test(pageCurrentURL)) {
                subDOMenv = ".staging.qa01";
            } else {
                subDOMenv = ".qa01";
            }
        } else if (/qa00/i.test(pageCurrentURL)) {
            if (/staging/i.test(pageCurrentURL)) {
                subDOMenv = ".staging.qa00";
            } else {
                subDOMenv = ".qa00";
            }
        } else if (/proddev/i.test(pageCurrentURL)) {
            subDOMenv = ".proddev";
        } else if (/staging/i.test(pageCurrentURL)) {
            subDOMenv = ".staging";
        } else {
            subDOMenv = "";
        }
    return subDOMenv;
}
	
var MboxsubDom = SetmBoxDOMenv();
/*
Replacing the direct call to http://www.medscape.com/javascript/mbox.js with this file instead
Allows Medscape to restrict where the mbox is loaded.
*/
var mboxof = false;
var mboxr = [
//To Open to the mbox to the Entire .com Site uncomment the line below this
//"www.medscape.com",
//--------------------
//To Open to the mbox to the Entire .org Site uncomment the line below this
//"www.medscape.org",
//--------------------
//Examples Currently open to the mbox: www.medscape.com/slideshow with the following line
//"slideshow"
];
var mboxlocsplit = location.pathname.split("/");
var mboxa = jQuery.inArray(location.hostname, mboxr);