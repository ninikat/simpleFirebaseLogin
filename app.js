// Initialize Firebase
  const config = {
    apiKey: "AIzaSyBrxS2eF5zuHkgJBN1X5L3kKliOqUkRSck",
    authDomain: "contactform-1e32f.firebaseapp.com",
    databaseURL: "https://contactform-1e32f.firebaseio.com",
    projectId: "contactform-1e32f",
    storageBucket: "contactform-1e32f.appspot.com",
    messagingSenderId: "273553414019"
  };
  firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignUp');
const btnLogOut = document.getElementById('btnLogOut');


//add login event
btnLogin.addEventListener('click', e=>{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    //sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
});

btnSignup.addEventListener('click', e=>{
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message))
    
});

btnLogOut.addEventListener('click', e=>{
    firebase.auth().signOut();
})

// add a real time listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log(firebaseUser);
        btnLogOut.classList.remove('hidden');
        btnLogin.classList.add('hidden');
    } else{
        console.log('not logged in');
        btnLogOut.classList.add('hidden');
        btnLogin.classList.remove('hidden');
    }
});

