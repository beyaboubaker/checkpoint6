a=document.getElementById("textear");
function GRAS(){
    if(a.style.fontWeight=="bold")
    {
        a.style.fontWeight=="normal";
    }
    else{   
         a.style.fontWeight="bold";
}
    

}

function ITAlic() {
    if(a.style.fontStyle=="italic")
    {
        a.style.fontStyle=="normal";
    }
    else{   
         a.style.fontStyle="italic";
}
    

}

function SOULIGNE() {
    if(a.style.textDecoration=="underline")
    {
        a.style.textDecoration=="normal";
    }
    else{   
         a.style.textDecoration="underline";
}
    

}

function taille(){
    x=document.f.s.selectedIndex;
    y=document.f.s.options[x].value+"px";
    a.style.fontSize=y;
}

function police(){
    x=document.f.s1.selectedIndex;
    y=document.f.s2.options[x].value;
    a.style.fontFamily=y;
}
    // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBKlkidr6QIvyzNiYmL0u16fPAxoixkGlE",
    authDomain: "projet-85a95.firebaseapp.com",
    databaseURL: "https://projet-85a95.firebaseio.com",
    projectId: "projet-85a95",
    storageBucket: "",
    messagingSenderId: "272603056379",
    appId: "1:272603056379:web:4da98254ae719c13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var messageRef= firebase.database().ref('Projet');//setting the name of your database

function submitForm(e){
    event.preventDefault();
    //Get values
    var Name= document.getElementById('Name').value;
    var Track= document.getElementById('Track').value;
    var number= document.getElementById('Number').value;
    var Email= document.getElementById('email').value;
    console.log("hello");
    saveMessage(Name,Track,number,Email);//sending data to our database


}


document.getElementById('contactForm').addEventListener('submit',submitForm);
//save message to firebase
function saveMessage(Name,Track,number,Email){
    var newMessageRef= messageRef.push();
    newMessageRef.set({
        Name: Name,
        Track:Track,
        Number:number,
        Email:Email




    });
}



