/* Updated 6/10/15 by JS  */
function GenPVID() {

    // getting the date, getting the seconds from epoch
    var timestamp = new Date().getTime() / 1000;
    //Rounding the decimal off
    var epochSec = Math.round(timestamp).toString();
    // making an 8 digit random number
    var randomNumber = Math.random().toString().substr(2, 8);
    // set the global variable to the 19 digit page view id
    var tempPVIDreturn = epochSec + randomNumber;

    s_pageview_id = tempPVIDreturn;

    $(document).trigger("pvidReset");
}