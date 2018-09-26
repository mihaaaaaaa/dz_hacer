$(document).ready(function() {
	var randomNumber = Math.random();

	let userType = null;
	let userPass = null;

	let newUserName = null;
	let newUserId = null;
	let newUserClass = null;
	var newUserClassNum = ['0', '3', '7'];

	let userPost = null;

	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

  		function playMP3(){
  			$('myAudio').play();
			$('body').toggleClass('-visible');
		};

	function spellAdmin(){
		if(!confirm('Create new User?')){
			spellAdmin();
		} else {
			newUserName = prompt('NewUserName');
			newUserId = getRandomInt(100, 999);
			newUserClass = getRandomInt(0, 2);
			alert( newUserClassNum[newUserClass] + newUserId);
		};
	};

	function spellUser(){
		if(!confirm('Create new post?')){
			spellUser();
		} else {
			prompt('enter your post.');
			if(!confirm('publish post?')){
				spellUser();
			} else {
				alert('your post has been published');
			};
		};
	};

	function spellHacer(){
		alert('Danger, Russian hackers are attacking!!! Security systems are on.');
		playMP3();
	}

	function checkPass(){
		if (userPass < 8000 && userPass > 6999 ) {
				alert('This is Admin');
				userType = 'admin';
				alert('Hello, Admin');
				spellAdmin();
			} else if (userPass < 4000 && userPass > 2999) {
				alert('This is User');
				userType = 'User';
				alert('Hello, User');
				spellUser();
			} else if (userPass < 1000) {
				alert('This is Hacer');
				userType = 'Hacer';
				spellHacer();
			}else {
				alert('We don\'t have passwords like this here you scum!');
				initiateLogin();
			}
	}

	function initiateLogin(){
		userPass = prompt('Insert the user pass');
		if (userPass.length != 4 ) {
			alert('Error');
			initiateLogin();
		} else {
			checkPass();
		};
	};


	

	initiateLogin();

});