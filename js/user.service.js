var url = "http://prs.doudsystems.com/Users/";

$().ready(function() {


});

function list(){
    return $.getJSON(url + "List");
}

function get(id){
    return $.getJSON(url + "Get/" + id);
}