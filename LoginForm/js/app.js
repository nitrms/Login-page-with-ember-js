/**************************
* Application
**************************/

App = Ember.Application.create();


/**************************
* Models
**************************/


/**************************
* Views
**************************/

App.LoginFormView = Ember.View.extend({
   
    username: null,
    password: null,
       
   
    submit: function(event) {
       // event.preventDefault();

        var username = this.get('username');
        var password = this.get('password');

        App.loginController.login(username, password)
    }
});






/**************************
* Controllers
**************************/

App.loginController = Ember.Object.create({
    login: function(username, password) {
      // $.ajax stuff goes here
      $.ajax({
          url:"http://localhost/LoginForm/login.php?f=connectToDB",
          cache:false,
          dataType:"json",
        
          success:function(text){
              alert(text);
          },
           error:function(httpRequest, textStatus, errorThrown) { 
                alert("status=" + textStatus + ",error=" + errorThrown);
            }
      })
      
//       alert(username+" "+password);
    }
});