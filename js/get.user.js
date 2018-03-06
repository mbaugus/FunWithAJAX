$().ready(function(){

    get(1)
        .done(function(res){
            CreateUserTable(res);
        })
        .fail(function(err){
            console.error(err);
        });
});

function CreateUserTable(user)
{
    $("#idx").text(user.ID);
    $("#name").text(user.FirstName + " " + user.LastName);
    $("#username").text(user.UserName);
    $("#email").text(user.Email);
    $("#phone").text(user.Phone);
    $("#isadmin").text( (user.IsAdmin ? "Yes": "No" ) );
    $("#isreviewer").text( (user.IsReviewer ? "Yes" : "No"));
}
