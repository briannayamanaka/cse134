window.onload = function(){
          // Initialize Firebase
		console.log("hi!");
	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyD9qth9IjpvqZTYou6hce8lTQ1pls7KfJk",
	    authDomain: "cse-134b-b2127.firebaseapp.com",
	    databaseURL: "https://cse-134b-b2127.firebaseio.com",
	    storageBucket: "cse-134b-b2127.appspot.com",
	    messagingSenderId: "298947904638"
	  };
	  firebase.initializeApp(config);

	var txtEmail = document.getElementById('email');
	var txtPassword = document.getElementById('password');
	var signupBtn = document.getElementById('submit');

	signupBtn.addEventListener('click', e => {
	    const email = txtEmail.value;
	    const password = txtPassword.value;
	    console.log("email: " + email + "\npassword: " + password);
	    const auth = firebase.auth();
	    const promise = auth.createUserWithEmailAndPassword(email, password);
	    promise.catch(e => console.log(e.message));
  	});

  	firebase.auth().onAuthStateChanged(firebaseUser => {
	    if(firebaseUser) {
	      console.log(firebaseUser);
	    } else {
	      console.log('not logged in');
	    }
  	});
 }
