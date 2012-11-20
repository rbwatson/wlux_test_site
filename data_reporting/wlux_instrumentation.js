// The code below assumes the first page is passed a query string
// parameter containing the session id, which it then passes along
// to subsequent pages.

// avoid conflicting with jQuery on the study site
$wlux = jQuery.noConflict();

$wlux(document).ready(function() {
    var loggerURL = "/data_reporting/logger.php";
    //var loggerURL = "http://staff.washington.edu/rbwatson/logger.php";
    var sessIdKey = "session";
    var SESSION_ID = getQsParam(sessIdKey);

    // gets a querystring parameter using its key
    // http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values
    function getQsParam(key) {
        var match = RegExp('[?&]' + key + '=([^&]*)')
                        .exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    // appends the session id to all links on a page
    function appendSessionId() {
        $wlux("a").attr('href', function(i, val) {
            var str = sessIdKey + "=" + SESSION_ID;
            if (val.indexOf('?') == -1) // contains no params yet
                str = '?' + str;
            return val + str;
        });
    }

    // clean up urls before they're reported to the logging service
    function removeQs(url) {
        return url.split('?')[0];
    }

    // logs page transitions
    function logTransition(from, to) {
        $wlux.post(loggerURL, {"type" : "transition",
                               "session_id" : SESSION_ID,
                               "from" : from,
                               "to" : to});
    }

    appendSessionId();

    // log the page open event immediately
    $wlux.post(loggerURL, {"type" : "open",
                           "session_id" : SESSION_ID,
                           "location" : removeQs(window.location.href)});

    /* Log transitions
       Note: this only handles page transitions when clicking achor tags.
       There are many other ways to transition between pages. To handle
       these, we may want to use the window.onbeforeunload event */
    $wlux("a").click(function(e) {
        var from = removeQs(window.location.href);
        var to = removeQs(e.target.href);
        logTransition(from, to);
    });
});
