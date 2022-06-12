//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBPHqCy1iDY7mxrEZ1gsH76nu6tvlds6lY",
    authDomain: "c94practice-703eb.firebaseapp.com",
    databaseURL: "https://c94practice-703eb-default-rtdb.firebaseio.com",
    projectId: "c94practice-703eb",
    storageBucket: "c94practice-703eb.appspot.com",
    messagingSenderId: "1082087795354",
    appId: "1:1082087795354:web:2b2646cf0799b16be80d23"
  };
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

function addUser()
{
    uname = document.getElementById('user_name').value;
uage = document.getElementById('user_age').value;
ugrade = document.getElementById('user_grade').value;
uhobbies = document.getElementById('user_hobbies').value;
uschool = document.getElementById('user_school').value;
utime = document.getElementById('user_time').value;
  firebase.database().ref("/").child(uname).update({
    Name:uname,
    Age:uage,
    Grade:ugrade,
    Hobbies:uhobbies,
    School:uschool,
    Time:utime
  })
  document.getElementById('user_name').value  = "";
  document.getElementById('user_age').value  = "";
  document.getElementById('user_grade').value  = "";
  document.getElementById('user_hobbies').value  = "";
  document.getElementById('user_school').value = "";
  document.getElementById('user_time').value = "";
}