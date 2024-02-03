/*Function 4: The goal here is to obtain the last edit made to the page and display it in a 
Notice that can be closed, This should automatically load for each page*/
var lastupdate = document.lastModified;
// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h1>Under Construction</h1>';
msg += 'This page was last edited: ' + lastupdate + '</div>'; 

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
  document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note

