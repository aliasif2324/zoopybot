
# Facebook WWW App
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '227483767615299',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>


# Facebook code 2. for eBot 
<div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>


# Facebook Canvas App

# Facebook code 1. for eBot app

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1749294911956622',
      xfbml      : true,
      version    : 'v2.6'
    });

    // ADD ADDITIONAL FACEBOOK CODE HERE
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>


# Facebook code 2. for eBot

Setup Facebook Login
Apps on Facebook are most useful when they are personalized based on who is using them. The following snippets of code add a basic Facebook Login integration.
Place an element anywhere within the <body> tag where you want to greet the user:
<h1 id="fb-welcome"></h1>
Include a script to let a person log into your app. It should automatically open the Login Dialog when someone first uses your app. Place the code right after the FB.init call.
// Place following code after FB.init call.

function onLogin(response) {
  if (response.status == 'connected') {
    FB.api('/me?fields=first_name', function(data) {
      var welcomeBlock = document.getElementById('fb-welcome');
      welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
    });
  }
}

FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
  // already logged in, go directly to the welcome message.
  if (response.status == 'connected') {
    onLogin(response);
  } else {
    // Otherwise, show Login dialog first.
    FB.login(function(response) {
      onLogin(response);
    }, {scope: 'user_friends, email'});
  }
});
Next let's load your app within Facebook's Canvas frame.
