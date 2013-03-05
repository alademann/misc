// ==UserScript==
// @name           GreenTools Deploys Filter
// @description    I am tired of looking through 1,876,345,980 CI builds to find the one I just deployed
// @author         Aaron Lademann
// @include        https://dev.webfilings.com/deploytools/deploys.php
// @version        1.0
// ==/UserScript==

var myScript = document.createElement('script'); 

myScript.type = 'text/javascript'; 
myScript.async = true;
myScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js' // ie: jquery hosted on google cdn

var s = document.getElementsByTagName('script')[0]; 

s.parentNode.insertBefore(myScript, s);

var jsCookie = document.createElement('script');

jsCookie.type = 'text/javascript';
jsCookie.async = true;
jsCookie.src = '//cdn.jsdelivr.net/jquery.cookie/1.3.1/jquery.cookie.js';

s.parentNode.insertBefore(jsCookie, myScript);

jsCookie.onload = function(){

    var pageLocation = location.href;
    var newPageLoc = pageLocation;
    // var filters = []];
    var refreshContent = $("head meta[http-equiv='refresh']").attr("content");
    // keep it free from query strings so its always sanitary
    if(newPageLoc.lastIndexOf("?") >= 0) {
        newPageLoc = newPageLoc.substring(0, newPageLoc.lastIndexOf("?"));
        refreshContent = refreshContent.substring(0, refreshContent.lastIndexOf("?"));
    }
    
    // keep it free from query strings so its always sanitary
    console.log("clean refresh is = " + refreshContent);

    // GLOBAL CONSTANTS    
    var _personFilter = "Aaron Lademann";
    var $arr_tbl = $(".data_table");
    var $arr_tblDeploys = $arr_tbl.find("tr");
    var colnames = [];


    var _updateURL = function(){
        // keep window.location up-to-date based on filtering from user
        refreshContent = refreshContent + filters;
        newPageLoc = newPageLoc + filters;
        console.log("refreshContent = " + refreshContent);
        console.log("newPageLoc = " + newPageLoc);
    };

    var _bindFilters = function() {
        var newLocation = filters;
        // if(pageLocation.lastIndexOf("?") == -1) {
        //     document.location.href = newLocation;   
        // } else {
        //     $("head meta[http-equiv='refresh']").attr("content", newLocation);
        // }

        
        $('.filter').each(function(index) {
            $(this).bind('keyup', function(e) {
                var filter = $(this).attr("name");
                updateQueryStringParameter(filter, $(this).val());
            });
        });
        console.log($("head meta[http-equiv='refresh']").attr("content"));
    };

    var _createFilterRow = function(cols) {
        // create an input to filter each column

        $arr_tbl.prepend("<tr id='filterRow'></tr>");
        for (var col=0; col < cols; col++) {
            $("#filterRow").append("<td><input class='filter' name='" + colnames[col].toLowerCase() + "' id='" + colnames[col].toLowerCase() + "' type='text' placeholder='" + colnames[col] + "' /></td>");
            // initialize all the new query vars we can use based on columns available
            filters.push = colnames[col];
        }
// console.log(filters);
        _bindFilters();
        // _updateURL();

    };

    var _doneCounting = function() {
        var $firstRow = $arr_tbl.find("tr:first");
        var $cols = $firstRow.find("th");
        var _colCount = $cols.length;
        
        $cols.each(function(index){
            colnames.push($(this).text());
            if(index + 1 == _colCount) {
                _createFilterRow(_colCount);        
            }
        });
        
    };

    var _tblRows = $arr_tblDeploys.length;
    
    $arr_tblDeploys.each(function(index){
        var personKey = $(this).find("td:eq(3)").text();
        var filterMatch = personKey.lastIndexOf(_personFilter) >= 0;
        if(filterMatch || index == 0) {

        } else {
            // does not match our filter
            $(this).remove();
        }
        
        // console.log("index: " + index, " _tblRows: " + _tblRows);
        if(index + 1 == _tblRows) {
            //_doneCounting();
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


var updateQueryStringParameter = function (key, value, uri) {
    if(!uri) {  
        uri = location.href;
    }
    var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
    separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
};

