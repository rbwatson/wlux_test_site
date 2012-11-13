// avoid conflicting with jquery on the study site
$wlux = jQuery.noConflict();
//$loggerURL = "/data_reporting/logger.php";
$loggerURL = "http://staff.washington.edu/rbwatson/logger.php";

$wlux(document).ready(function() {
    var logTransition = function(from, to) {
        $wlux.post($loggerURL, {"type" : "transition", "from" : from, "to" : to});
    };

    // log the page open event immediately
    $wlux.post($loggerURL, {"type" : "open", "location" : window.location.href});

    /* Log transitions
       Note: this only handles page transitions when clicking achor tags.
       There are many other ways to transition between pages. To handle
       these, we may want to use the window.onbeforeunload event */
    $wlux("a").click(function(e) {
        var from = window.location.href;
        var to = e.target.href;
        logTransition(from, to);
    });

});
