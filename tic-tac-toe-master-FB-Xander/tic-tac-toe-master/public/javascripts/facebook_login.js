FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    testAPI();
  }
  else {
    FB.login();
  }
});

function testAPI() {
	console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?=fields=public_profile', function(response) {
		console.log('Successful login for: ' + response.name);
		document.getElementById('fbusername').innerHTML ='Thanks for logging in, ' + response.name + '!';
        document.getElementById('inputFullNameRegister').innerHTML = response.name;
        document.getElementById('inputUserNameRegister').innerHTML = response.name + '' + response.id;
        document.getElementById('inputPasswordRegister').innerHTML = 'tictactoe';
    });
}