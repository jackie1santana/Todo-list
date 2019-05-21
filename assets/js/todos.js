//check off specific todos by clicking
$("ul").on('click', "li", function(event){ 
    $(this).toggleClass("completed");
    event.stopPropagation();
});

//click on trash symbol to delete todo
$("ul").on('click', 'span', function(event){
    $(this).parent().fadeOut(700,function(){
        $(this).remove()
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){

    if(13 === event.which){
        var todoText = $(this).val()
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"  + todoText + "</li>")
    }
})

$(".fa-plus").click(function(){
    $("input").fadeToggle()
    
})





