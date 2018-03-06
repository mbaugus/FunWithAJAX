var users;

$().ready(function(){

    list()
        .done(function(res){
        users = res;
        buildUserTable(users);
        console.log(users);
        })
        .fail(function(err){
            console.log(er);
        });

});

function buildUserTable(users)
{
   var tbody = $("#userlist");
   for(var user of users){
       var row = "<tr>";
       row += "<td>" + user.ID + "</td>";
       row += "<td>" + user.FirstName + " " + user.LastName + "</td>";
       row += "<td>" + user.UserName + "</td>";
       row += "<td>" + user.Email + "</td>";
       row += "<td>" + user.Phone + "</td>";
       row += "<td>" + user.IsAdmin + "</td>";
       row += "<td>" + user.IsReviewer + "</td>";
       row += "<td>" + "<a href=''>Detail</a>" + "</td>";
       row += "</tr>";
       tbody.append(row);
   }
}