function sq() {
    var x=document.getElementById('num').value;
    if (x=="") {
      document.getElementById("b").innerHTML="Please Enter Any Number";
    }
    else
    {
    var y;
    y=x*x;
    document.getElementById("b").innerHTML="Squre of " +x+ " = " +y;
    }
    }
    function cb(){
    var x=document.getElementById('num').value;
    if (x=="") {
      document.getElementById("b").innerHTML="Please Enter Any Number";
    }
    else
    {
    var y;
    y=x*x*x;
  
    document.getElementById("b").innerHTML="Cube of " +x+ " = " +y;
    }
  }
    function onenter()
    {
  
      var x=document.getElementById('num').value;
      if (x=="") {
        document.getElementById("b").innerHTML="Please Enter Any Number";
         }
         else
         {
      document.getElementById("b").innerHTML=" Please Select Squre Root Or Cube";
    }}
