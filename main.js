function Validation(){
               
     let username = document.getElementById("username").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("password").value;
     let cpassword = document.getElementById("cpassword").value;
    

     if(username==""){
          alert('must have UserName');
          document.form1.username.focus();
          return false;
     }



     if(email==""){
          alert("must have email id");
          document.form1.email.focus();
          return false;
     }

     if(password==""){
          alert("must have password");
          document.form1.password.focus();
          return false;
     }

     if(cpassword==""){
          alert("please confirm password");
          document.form1.cpassword.focus();
          return false;
     }


     if(password!=cpassword){
          alert('password is not match');
          document.form1.cpassword.focus();
          return false;
     }

     if(password==cpassword){
          window.location.href="./hi.html"
     }




     return true;

}