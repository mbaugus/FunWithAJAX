var vendors;

$().ready(function(){

    list()
        .done(function(res){
        vendors = res;
        buildVendorTable(vendors);
        console.log(vendors);
        })
        .fail(function(err){
            console.log(er);
        });

});

function buildVendorTable(vendors)
{
   var tbody = $("#vendorlist");
   for(var v of vendors){
       var row = "<tr>";
       row += "<td>" + v.ID + "</td>";
       row += "<td>" + v.Name + "</td>";
       row += "<td>" + v.Code + "</td>";
       row += "<td>" + v.Email + "</td>";
       row += "<td>" + v.Phone + "</td>";
       row += "<td>" + v.Address + "</td>";
       row += "<td>" + v.City + "</td>";
       row += "<td>" + v.State + "</td>";
       row += "<td>" + v.Zip + "</td>";
       row += "<td>" + (v.IsRecommended ? "Yes" : "No") + "</td>";
       row += "<td>" + "<a href=''>Detail</a>" + "</td>";
       row += "</tr>";
       tbody.append(row);
   }
}