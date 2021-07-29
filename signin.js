
  var firebaseConfig = {
    apiKey: "AIzaSyDQoHNB97Fhd_9gO5mqFZO4VmMEraLvxRM",
    authDomain: "signup-2328c.firebaseapp.com",
    projectId: "signup-2328c",
    storageBucket: "signup-2328c.appspot.com",
    messagingSenderId: "833697196961",
    appId: "1:833697196961:web:fcacbdf94f5196828a79e0"
  };
  
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp() {
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var DOB = document.getElementById("DOB");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value,DOB.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
}

   function signIn() {
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("signed In" + email.value);
}
	
	
   function signOut() {
    
    auth.signOut();
    alert("Signed Out");
    
}
   auth.onAuthStateChanged(function(user){
		
    if(user){
        
        var email = user.email;
        alert("Active User " + email);
        
        
    }else{
        
        alert("No Active User");
    }
    
    
    
});


    

