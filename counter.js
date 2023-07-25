$(document).ready(function(){
 let result;
  //add:
  $('#add').click(function(){
   let sum = parseInt($('#f1').val());
         result =sum+=1;
        $('#f1').val(result);

  });  // add end here
  $('#sub').click(function(){
    let sub = parseInt($('#f1').val());
   result = sub -=1;
   $('#f1').val(result);
  });
  //reset:
  $('#reset').click(function(){
    result= 0;
    $('#f1').val(result);
  });
 
}); //jquery ends