window.onload = function () {
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
    var emailPop = document.getElementById('emailPop');
    var passPop = document.getElementById('passPop');

    firebase.auth().signOut();
    
    signupBtn.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        //not sure what's trying to be done here, but i added a null check
        //because the signup button in after_signup.html was broken
        if(emailPop != null && passPop != null)
        {
            emailPop.style.visibility = 'hidden';
            emailPop.style.display = 'none';
            passPop.style.visibility = 'hidden';
            passPop.style.display = 'none';
        }



        if(email == ""){
            emailPop.style.visibility = 'visible';
            emailPop.style.display = 'block';
        }
        if(password.length < 6){
            passPop.innerHTML = "Invalid Password <br> Must be 6 characters or more";
            passPop.style.visibility = 'visible';
            passPop.style.display = 'block';
        }
        
        console.log("email: " + email + "\npassword: " + password);
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.catch(
            function(e){
                if(e.code == "auth/email-already-in-use"){
                    passPop.innerHTML = "Email already in use. Click Sign In link below!";
                    passPop.style.visibility = 'visible';
                    passPop.style.display = 'block';                
                }
                if(e.code == "auth/invalid-email"){
                    emailPop.innerHTML = "Invalid Email";
                    emailPop.style.visibility = 'visible';
                    emailPop.style.display = 'block';               
                }
                console.log(e.code);
            }
        );
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            window.location = "welcome.html";
        } else {
            console.log('not logged in');
        }
    });
}