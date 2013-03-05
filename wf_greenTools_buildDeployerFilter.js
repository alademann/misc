// ==UserScript==
// @name           GreenTools Books Only Filter
// @description    I am tired of looking through 1,876,345,980 CI builds to find the one I need to deploy
// @author         Aaron Lademann
// @include        https://dev.webfilings.com/deploytools/appspot_deployer.php
// @version        1.0
// ==/UserScript==

// USING THIS SCRIPT:
// INSTALL IT USING grease monkey (ff) or blankcanvas script handler (chrome)
// GO TO https://dev.webfilings.com/deploytools/appspot_deployer.php?team={branch-prefix}&fname={your first name}&lname={your last name}&appspot={personal/appspot URL}

var myScript = document.createElement('script'); 

myScript.type = 'text/javascript'; 
myScript.async = true;
myScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js' // ie: jquery hosted on google cdn

var s = document.getElementsByTagName('script')[0]; 

s.parentNode.insertBefore(myScript, s);

myScript.onload = function(){

    // GLOBAL CONSTANTS    
    var _buildKeyPrefix = "developer_release_ci-";
    var _buildKeyMime = ".tar.gz";
    var _buildSHAlength = 7; // how many chars in the SHAs?

    // HELPER FUNCTIONS
    var _getBuildInfo = function(key) {

        // do some fancy string manipulation so i can see CLEARLY
        // what the branch name is, what the appspot URL will be, etc...
        
        // remove the prefix and mime type to make it easier to get the version
        var _prefixIndex = key.lastIndexOf(_buildKeyPrefix) + _buildKeyPrefix.length;
        var _mimeIndex = key.lastIndexOf(_buildKeyMime);

        var shortKey = key.substring(_prefixIndex, _mimeIndex);
        
        var _versionPeriodIndex = shortKey.lastIndexOf(".");
        var buildVersion = shortKey.substring(_versionPeriodIndex + 1, shortKey.length);
        var buildSHA = shortKey.substring(_versionPeriodIndex - _buildSHAlength, _versionPeriodIndex - 1);
        var buildBranch = shortKey.substring(0, shortKey.lastIndexOf(buildSHA) - 1);
        var appspotVersion = buildVersion + "-" + buildSHA;

        var build = {
            sha: buildSHA,
            version: buildVersion,
            branch: buildBranch
        };

        return build;

    }; // END prettyBuildNames()

    var _options = { 
        fname: (QueryString.fname == undefined ? undefined : QueryString.fname.toLowerCase()),
        lname: (QueryString.lname == undefined ? undefined : QueryString.lname.toLowerCase()),
        team: (QueryString.team == undefined ? undefined : QueryString.team.toUpperCase()),
        appspot: (QueryString.appspot == undefined ? undefined : QueryString.appspot.toLowerCase())
    };

    var _buildFilter = _options.team + "-";
    var _appspotID;
    if(_options.appspot == "personal" || _options.appspot == undefined) { 
        _appspotID = "wf-" + _options.fname + _options.lname + ".appspot.com";
    } else {
        _appspotID = _options.appspot
    }
    
    // update the title of the page and the heading so folks know it's been filtered
    var $heading = $(".window > h2");
    var _headingMod = _options.team + " TEAM";
    $heading.append("&nbsp;&nbsp;<span style='color: red; text-decoration: underline'>FILTER: " + _headingMod + "</span>");
    $("head > title").text("Appspot Deployer: " + _headingMod);


    // sift through the rows and make it so...
    var $arr_tblBuilds = $(".data_table").find("tr");

    $.each($arr_tblBuilds, function(){
        var buildKey = $(this).find("td:first > a").text();
        var filterMatch = buildKey.lastIndexOf(_buildFilter) >= 0;
        if(filterMatch) {

            // function returns object with the three main things we need
            // to provide USEFUL information to the user.
            var buildMeta = _getBuildInfo(buildKey);
            var shaVersion = buildMeta.version + "-" + buildMeta.sha;
            var appspotURL = "http://" + shaVersion + "." + _appspotID;

            var buildColHTML = "<a title='This build will deploy here: " + appspotURL + "' href='" + appspotURL + "' target='appspotbuild'><span class='branch'>" + buildMeta.branch + "</span>" + "&nbsp;&nbsp;<span class='deployloc' style='color: #66952e;'>(" + shaVersion + ")</span></a>";
            $(this).find("td:first").html(buildColHTML);

        } else {
            // does not match our filter
            $(this).remove();
        }
    });

};


// HELPER FUNCTIONS
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

