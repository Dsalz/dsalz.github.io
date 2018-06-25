// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//store the input selsctors for future reference
var Width = $("#inputWidth");
var Height = $("#inputHeight");
var Color = $("#colorPicker");

//calling the makeGrid function when the page is loaded
makeGrid();


//function for removing table(grid) from the page
function clearGrid(){
  $("#pixelCanvas").remove();
}

//function called to make grid
function makeGrid() {
  // removing grid currently on the page
  clearGrid();
  
  //storing the users input with the help of the variables assigned at the top of the file
  var width = Width.val();
  var height = Height.val();
  var color = Color.val();
  
  //adding an empty table to the page
  $(".canvas").append("<table id='pixelCanvas'></table>");
  
  //calculating the height and width of the new table (for the white background color)
  var canvasWidth = (width * 20) + " px";
  var canvasHeight = (height * 20) + " px";

  //assign calculated values to the table
  $("#pixelCanvas").css("width" , canvasWidth);
  $("#pixelCanvas").css("height" , canvasHeight);
  
  //looping with the given values to dynamically create the rows (each with a class of the index)
    for(var x =0 ; x<height ; x++){
$("#pixelCanvas").append("<tr class ='" + x + "'</tr>"); // nested looping to add the number of columns inputted by the user to the table row using the index class assigned to each row
        for(var y=0; y<width ; y++){
            $("."+x).append("<td></td>");
        }
    }
 ChangeGridColor(color); //enabling td color change on click with the color inputted by the user
}

//Function for changing td color when clicked created to reduce repetitive codes and implement "DRY"
function ChangeGridColor(color){
  $('td').click(function(){
    $(this).css("background-color", color);
  });
}

//Dynamically updating the color of the td on click whenever the color is changed by the user
$("#colorPicker").on("change", function(){
  var color = Color.val();
  ChangeGridColor(color);
})


//event handler when submit button is clicked
$("#specs-submit").click(function (){
  makeGrid();
  $('.btn').removeClass("btn-clicked"); // removing btn-clicked class from all buttons
  $("#grid-draw").addClass('btn-clicked'); //adding btn-clicked class to draw button to tell the user that they can draw now
})

//event handler when clear button is clicked
$("#grid-delete").click(function(){
  $('.btn').removeClass("btn-clicked");  // removing btn-clicked class from all buttons
  $("#grid-draw").addClass('btn-clicked'); //adding btn-clicked class to draw button to tell the user that they can draw now
  $('td').css("background-color", "white"); // wiping canvas clean by changing the color of all the elements to white
  var color = Color.val(); 
  ChangeGridColor(color); // getting color in the color picker and assigning the td to it when clicked
})


//event handler when draw button is clicked
$("#grid-draw").click(function () {
  $(this).addClass('btn-clicked'); //adding btn-clicked class to the draw button to tell the user that they can draw now
  $('#grid-erase').removeClass('btn-clicked') // removing btn-clicked class from the erase button
    var color = Color.val();
    ChangeGridColor(color); // getting color in the color picker and assigning the td to it when clicked
})

//event handler when erase button is clicked
$("#grid-erase").click(function () {
$(this).addClass('btn-clicked'); //adding btn-clicked class to the erase button to remind the user that they are currently erasing
$('#grid-draw').removeClass('btn-clicked') // removing btn-clicked class from the draw button
 ChangeGridColor("white");   // assigning the td background color to white when clicked thereby removing any color there previously
})


