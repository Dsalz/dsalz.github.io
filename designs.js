// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var Width = $("#inputWidth");
var Height = $("#inputHeight");
var Color = $("#colorPicker");
makeGrid();

function clearGrid(){
  $("#pixelCanvas").remove();
}


function makeGrid() {
  clearGrid();
  var width = Width.val();
  var height = Height.val();
  var color = Color.val();
  $(".canvas").append("<table id='pixelCanvas'></table>");
  var canvasWidth = (width * 20) + " px";
  var canvasHeight = (height * 20) + " px";

  $("#pixelCanvas").css("width" , canvasWidth);
  $("#pixelCanvas").css("height" , canvasHeight);
    for(var x =0 ; x<height ; x++){
$("#pixelCanvas").append("<tr class ='" + x + "'</tr>");
      
        for(var y=0; y<width ; y++){
            $("."+x).append("<td></td>");
        }
    }
 ChangeGridColor(color);
}

function ChangeGridColor(color){
  $('td').click(function(){
    $(this).css("background-color", color);
  });
}

$("#colorPicker").on("change", function(){
  var color = Color.val();
  ChangeGridColor(color);
})



$("#specs-submit").click(function (){
  makeGrid();
  $('.btn').removeClass("btn-clicked");
  $("#grid-draw").addClass('btn-clicked');
})

$("#grid-delete").click(function(){
  $('.btn').removeClass("btn-clicked");
  $("#grid-draw").addClass('btn-clicked');
  $('td').css("background-color", "white");
  var color = Color.val();
  ChangeGridColor(color);
})



$("#grid-draw").click(function () {
  $(this).addClass('btn-clicked');
  $('#grid-erase').removeClass('btn-clicked')
    var color = Color.val();
    ChangeGridColor(color);
})

$("#grid-erase").click(function () {
$(this).addClass('btn-clicked');
$('#grid-draw').removeClass('btn-clicked')
 ChangeGridColor("white");   
})


