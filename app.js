 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDvEeaB3PJdcxa2ILJhprYbeBR0HapbJF0",
    authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    databaseURL: "https://time-sheet-2d40a.firebaseio.com/",
    storageBucket: "gs://time-sheet-2d40a.appspot.com"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  // Capture Button Click
$("#add-user").on("click", function(event) 
{
    // Don't refresh the page!
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent user.
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    start = $("#startDate-input").val().trim();
    rate = $("#rate-input").val().trim();

   
    // Don't forget to provide initial data to your Firebase database.
    database.ref().push({
      age: age,
      name: name,
      email: email,
      comment: comment
    });  

});

database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().email);
    console.log(snapshot.val().age);
    console.log(snapshot.val().comment);

    $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().email);
    $("#age-display").text(snapshot.val().age);
    $("#comment-display").text(snapshot.val().comment);
  },
  function(errorObjects){
    console.log("Errors handled: " + errorObject.code);
  });