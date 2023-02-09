function signIn() {
    var emailidValue = document.getElementById("emailid").value;
    var passwordValue = document.getElementById("password").value;
    var adminValue = document.getElementsByName("typeofuser")[0].checked;
    var studentValue  = document.getElementsByName("typeofuser")[1].checked;
    var typeofuserValue;
    if(adminValue){
        typeofuserValue="admin"
    }
    if(studentValue){
        typeofuserValue="student"
    }
    var login = {emailid:emailidValue,password:passwordValue,typeofuser:typeofuserValue};
   //console.log(login);
    fetch("http://localhost:3000/api/login/signIn",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
                //console.log(result);
        if(result.msg=="Admin login successfully"){
            window.location.href="http://127.0.0.1:5500/adminHome.html"
        }else if(result.msg=="Student login successfully"){
            window.location.href="http://127.0.0.1:5500/studentHome.html"
        } else {
            document.getElementById("msg").innerHTML=result.msg;

        }
    }).catch(error=>console.log(error));
    reset();
}
function signUp() {
    var emailidValue = document.getElementById("emailid").value;
    var passwordValue = document.getElementById("password").value;
    var adminValue = document.getElementsByName("typeofuser")[0].checked;
    var studentValue  = document.getElementsByName("typeofuser")[1].checked;
    var typeofuserValue;
    if(adminValue){
        typeofuserValue="admin"
    }
    if(studentValue){
        typeofuserValue="student"
    }
    
    var login = {emailid:emailidValue,password:passwordValue,typeofuser:typeofuserValue};
   console.log(login);
    fetch("http://localhost:3000/api/login/signUp",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("msg").innerHTML=result.msg;
        console.log(result);    
    }).catch(error=>console.log(error));
    reset();
}

function reset() {
    document.getElementById("emailid").value="";
    document.getElementById("password").value="";
}