const timestamp = 3000;
const ErrorColor = "#D8000C";

 function displayData(input){
           div =  document.getElementById("oks");
            div.innerHTML ='Form submited !! your Email is : ' + input;
 }

function isValidPassword(id,message,method){
    CheckPasss=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        input = document.getElementById(id);

      if(input.value.match(CheckPasss)==null){
          handleWarning(input,message,method);
    
      }
  }
 
function isAlpha(id,message,method){
    CheckAlpha = /[A-Za-z]$/;
     input = document.getElementById(id);
    if(input.value.match(CheckAlpha)==null){
        handleWarning(input,message,method)
    }

}


function handleWarning(input , message , method){
  if(method=="message"){
         var span = document.createElement('span');
         span.innerHTML=message;
         span.style.color=ErrorColor;
         input.after(span)
                setTimeout(()=>{
                    input.parentNode.removeChild(span);
                    
                },timestamp)
            }
            else{
                     alert(message);

                }

}

function isEmpty(id,message,method){
 let input =  document.getElementById(id);   
 if(input.value.length<=1){
            handleWarning(input,message,method)

        }    

}        

function CheckPassword(id1, id2 , message , method){
    var password = input = document.getElementById(id1).value;
    input = document.getElementById(id2);
    if(input.value!=password){
        handleWarning(input,message,method)
    }
}

function isEmail(id,message,method){
  CheckEmail=/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;  
    input = document.getElementById(id);
    if(input.value.match(CheckEmail)==null){
      handleWarning(input,message,method)  
        }else{
            displayData(input.value);
        }    

}






/*
function Validate(e){
            
        //      valid_function_name('id',"warnning message","method"); 
                isEmail('email','Email is Not valid',"message"); 
                isAlpha('name',"Invalid Name","alert");           
                 isValidPassword('pass',"Passoword must be Minimum eight characters long","message");
                 CheckPassword("pass", "cpass","Passowrd not matched ","message");



 }*/
 