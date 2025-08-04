$(function(){
    if(matchMedia ("screen and (max-width: 599px)").matches){
     
        $(function(){
            $(".change1").appendTo(".change1_1");
            $(".change2").appendTo(".change2_1");
            $(".change3").appendTo(".change3_1");
        });
    }
    
});