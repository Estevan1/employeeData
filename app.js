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
    email = $("#email-input").val().trim();
    age = $("#age-input").val().trim();
    comment = $("#comment-input").val().trim();

   
    // Don't forget to provide initial data to your Firebase database.
    database.ref().push({
      age: age,
      name: name,
      email: email,
      comment: comment
    });  

});