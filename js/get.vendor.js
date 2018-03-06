$().ready(function(){

    get(1)
        .done(function(res){
            UpdateVendorTable(res);
        })
        .fail(function(err){
            console.error(err);
        });
});

function UpdateVendorTable(v)
{
    $("#idx").text(v.ID);
    $("#name").text(v.Name);
    $("#code").text(v.Code);
    $("#email").text(v.Email);
    $("#phone").text(v.Phone);
    $("#address").text(v.Address);
    $("#city").text( v.City );
    $("#state").text(v.Phone);
    $("#zip").text(v.Phone);
    $("#recommended").text( (v.IsRecommended ? "Yes": "No" ) );
}
