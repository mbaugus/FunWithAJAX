var url = "http://prs.doudsystems.com/Vendors/";

function list(){
    return $.getJSON(url + "List");
}

function get(id){
    return $.getJSON(url + "Get/" + id);
}