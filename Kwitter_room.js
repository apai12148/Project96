var firebaseConfig = {
    apiKey: "AIzaSyCH2kMVSGPTNG2LNzG_YoLbg9oipYQhgzQ",
    authDomain: "classtest-58de2.firebaseapp.com",
    projectId: "classtest-58de2",
    storageBucket: "classtest-58de2.appspot.com",
    messagingSenderId: "709970277497",
    appId: "1:709970277497:web:8337e85c1717ba9d8f50a8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name  + "!"

    function addRoom(){
        room_name=document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name",room_name);
  
        window.location="kwitter_page.html"
      }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log(Room_names)
       row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+"</div><hr>"
       document.getElementById("output").innerHTML += row
       //End code
       });});}
 getData();

 function redirectToRoomName(name){
    console.log(name);
    
    localStorage.setItem("room_name", name);
    
    window.location = "kwitter_page.html";
    }

    function logout(){

      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}