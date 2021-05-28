
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDp2R5wEG0mKTU_cVNyaNLN-GjqRnxQ1XM",
      authDomain: "kwitter-abe5b.firebaseapp.com",
      databaseURL: "https://kwitter-abe5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-abe5b",
      storageBucket: "kwitter-abe5b.appspot.com",
      messagingSenderId: "617963189176",
      appId: "1:617963189176:web:b4a90e1e1820e88c9d154d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
