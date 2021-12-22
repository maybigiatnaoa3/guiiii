function search(){
    var arr = document.getElementsByTagName('input');
    var Otp = arr[2].value;
    var brr = document.getElementsByTagName('select');
    var Datacollection = brr[0].value;
    console.log(brr)
    
    
    
    
    if(Otp == "" ){
        $(".Notify").show();
        
    }

    
    
    if(Datacollection == ""){
        $(".Notify2").show();
        
    }
}  

