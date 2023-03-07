$("#add_user").submit((event)=>{
    alert("Data Inseted Successfully");
});

// update User
$("#update_user").submit((event)=>{
    event.preventDefault();
    var unindexed_array = $("#update_user").serializeArray();
    var data = {

    }
    $.map(unindexed_array,(n,i)=>{
       data[n['name']] = n['value'];
    })
    var request = {
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done((response)=>{
        alert("data updated Successfully");
    })    
});

// delete user
if(window.location.pathname == '/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(()=>{
        var id = $($ondelete).attr('data-id');
        console.log(id);
        var request = {
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }
        if(confirm("Do You Want Delete ?")){
                    $.ajax(request).done((response)=>{
                        alert("data delete Successfully");
                    })
                    window.location.reload(); 
                }
            })
}