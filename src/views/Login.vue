<template>
    <div class="login-container">
    
       <div class="login-box">
        <div class="icon">
          <i class="far fa-user"></i>
</div>
        <h1>Login</h1>
        <div class="login-field">
          <input @focus="focus(event)" @blur="focus()" class="input100" type="text" name="Username">
          <span class="focus-input100" data-placeholder="Username"></span>
        </div>
        <div class="login-field">
          <input class="input100" type="text" name="Password">
          <span class="focus-input100" data-placeholder="Password"></span>
        </div>
        <button>LOGIN</button>
        
        
       </div>
    </div>
  </template>
  
  <script>

// document.querySelector(".input100").addEventListener('focus', (event) => {
//         
//         console.log(event)
//     });

  export default {
    beforeCreate: function() {
      document.getElementsByTagName("body")[0].className="add_bg";
  },
    name: 'Login',
    methods: {
    focus(event){
     
      
  
      
     
    }
    
  }
    
  }

  
  </script>


<style scoped>
 .icon{
    display: flex;
    font-size: 30px;
    width: 80px;
    height: 80px;
    background: #1089ff;
    border-radius: 50%;
    font-size: 30px;
    margin: 0 auto;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    color: white;
}

  .input_focus:after{
    top: -30px !important;

  }
  .login-field{
    width: 100%;
    max-width: 350px;
    font-size: 20px;
    position: relative;
  }
  .input100 {
    font-family: Poppins;
    font-size: 15px;
    color: #555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: 0 0;
    padding: 0 5px;
} 
  .focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
} 
  .focus-input100::after {
    font-family: Poppins;
    font-size: 20px;
    color: #999;
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 10px;
    left: 0;
    padding-left: 5px;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    -moz-transition: all .4s;
    transition: all .4s;
}
  .login-field input{
    display: flex;
    font-size: 20px;
    outline: none;
   ;
   border: none;
    width: 100%;
   
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
   

  }
  .login-container h1{
    font-family: "Lato", Arial, sans-serif;
    font-weight: 300;
    font-size: 30px;
    color: #333;
    line-height: 1.2;
    text-align: center;
  
  }
  .login-container {
    
    font-family: Poppins;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    
}
  button{
    width: 100%;
    height: 57px;
   max-width: 350px;
    outline: none;
   border-radius: 0.25rem;
    color: white;
    padding: 10px 30px;
    background: #1089ff !important;
    border: 1px solid #1089ff !important;
    color: #fff !important;
  }
 
  .login-box {
    border-radius: 10px;
    display: flex;
    padding: 40px;
    height: auto !important;
    width: 400px;
    box-shadow: 0px 10px 34px -15px rgb(0 0 0 / 24%);
    background: white !important;
    flex-direction: column;
    align-items: center;
}



</style>
  
<style>
   .add_bg{

    background-color: #f8f9fd;
   }
   body{

    background-color: #f8f9fd;
   }
   #app{

    min-height: 100vh;
   }
</style>