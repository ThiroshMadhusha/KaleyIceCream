// const { $where } = require("../../server/model/model");

$("#add_user").submit(function (event) {
  {
    alert("Data Inserted Successfully..!");
  }
});

$("#update_inventory").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  // console.log(unindexed_array);
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/inventorys/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully..!")
  });
});

// Delete Button 

if (window.location.pathname == "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/inventorys/${id}`,
            "method": "DELETE",
        }
        if (confirm("Are You Sure To Delete This Inventory Record")) {
            $.ajax(request).done(function (response) {
                alert("Data Deleted Successfully..!")
                location.reload()
            });
            
        }
        
    })
}