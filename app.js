function registrar(){
    var email=document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error.message);
      });
}
function login(){
    var email2=document.getElementById('email2').value;
    var password2 = document.getElementById('password2').value;
    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error.message);

      });
}
function observer(){

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('Usuario activo')
          aparece();
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log ('Usuario no activo')
        }
      });
}
observer();
function aparece(){
    var contenido = document.getElementById('Contenido');
    contenido.innerHTML= `
    <p>WELCOME!!!</p>
    <button onclick="cerrar()">Cerrar sesion</button>
    `;
}
function cerrar(){
    firebase.auth().signOut()
    .then(function(){
        console.log('Desconectandose...')
    })
    .catch(function(error){
        console.log('error')
    })

}
