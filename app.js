 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDvEeaB3PJdcxa2ILJhprYbeBR0HapbJF0",
    authDomain: "time-sheet-2d40a.firebaseio.com",
    databaseURL: "https://time-sheet-2d40a.firebaseio.com/",
    storageBucket: "gs://time-sheet-2d40a.appspot.com"
  };

  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  var name = "";
  var role = "";
  var start = "";
  var rate = 0;

  // Capture Button Click
$("#add-employee").on("click", function(event) 
{
    // Don't refresh the page!
    event.preventDefault();

    // Code in the logic for storing and retrieving the most recent user.
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    start = $("#startDate-input").val().trim();
    rate = $("#rate-input").val().trim();

    var employee = 
    {
        name: name,
        role: role,
        start: start,
        rate: rate
    }
    // Don't forget to provide initial data to your Firebase database.
        database.ref().push(employee);  
});

// Firebase watcher + initial loader
database.ref().on("child_added", function(snapshot) {
var empName = snapshot.val().name;
console.log(empName);
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().start);
    console.log(snapshot.val().rate);

    //$("#tbody").append("<tr>");

    $("#tbody").text(snapshot.val().name);
    $("tr").text(snapshot.val().role);
    $("#tbody").text(snapshot.val().start);
    $("#tbody").text(snapshot.val().rate);

    //$("#name-display").text(snapshot.val().name);
    //$("#role-display").text(snapshot.val().role);
    //$("#start-display").text(snapshot.val().start);
    //$("#rate-display").text(snapshot.val().rate);
  },
  function(errorObjects){
    console.log("Errors handled: " + errorObject.code);
  });