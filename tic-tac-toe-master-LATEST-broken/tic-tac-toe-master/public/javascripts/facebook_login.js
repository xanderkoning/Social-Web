FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    testAPI();
  }
  else {
    FB.login();
  }
});
  
function testAPI() {

    function sortMethod(a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

	console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?=fields=public_profile', function(response) {
		console.log('Successful login for: ' + response.name);
		document.getElementById('fbusername').innerHTML ='Thanks for logging in, ' + response.name + '!';
        document.getElementById('fbpicture').style.display = "block";
        document.getElementById('fbpicture').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture" />';
        document.getElementById('inputFullNameRegister').innerHTML = response.name;
        document.getElementById('inputUserNameRegister').innerHTML = response.id;
        document.getElementById('inputPasswordRegister').innerHTML = 'tictactoe';
    });
    
    FB.api('/me/friends', function(response) {
        var result_holder = document.getElementById('fbfriends');
        var friend_data = response.data.sort(sortMethod);
        console.log('number friends: ' + friend_data.length);
        var results = '';
        for (var i = 0; i < friend_data.length; i++) {
            results += '<tr><td><img src="https://graph.facebook.com/' + friend_data[i].id + '/picture"></td><td width="100%">' + friend_data[i].name + '</td></tr>';
        }

        // and display them at our holder element
        result_holder.innerHTML = results;
    }, {scope: 'user_friends'});
}