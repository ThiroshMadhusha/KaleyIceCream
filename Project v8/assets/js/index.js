

$("#add_user").submit(function(event){
    alert("Data inserted successfully...")
})

$("#update_user").submit(function(event){
    event.preventDefault();
var unindeced_array=$(this).serializeArray();
var data={}
$.map(unindeced_array,function(n,i){
    data[n['name']]=n['value']
})
console.log(data)

var request={
    "url":`http://localhost:8000/api/userss/${data.id}`,
    "method":"PUT",
    "data":data
}
$.ajax(request).done(function(response){
    alert("Data Updated Successfully...")
})
})

if(window.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url":`http://localhost:8000/api/userss/${id}`,
            "method":"DELETE"
        }
        
        if(confirm("Do you really want to delete this record ?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully...")
                location.reload()
            })
        }

    })
}


$("#user_profile").submit(function(event){
    event.preventDefault();
var unindeced_array=$(this).serializeArray();
var data={}
$.map(unindeced_array,function(n,i){
    data[n['name']]=n['value']
})
console.log(data)

var request={
    "url":`http://localhost:8000/api/userss/${data.id}`,
    "method":"PUT",
    "data":data
}
$.ajax(request).done(function(response){
    alert("y...")
})
})
