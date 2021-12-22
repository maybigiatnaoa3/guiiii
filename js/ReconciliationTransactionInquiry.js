function search(){
    
    var brr = document.getElementsByTagName('select');
    var Datacollection = brr[0].value;
    var filereconciliation = brr[1].value;
    console.log(brr)
    
    
    
    
    

    
    
    if(Datacollection == "0"){
        $(".Notify").show();
        
    }
    if(filereconciliation== "0" ){
        $(".Notify2").show();
        
    }
}  

