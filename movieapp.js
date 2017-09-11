$(document).ready(function(){
  var i=0;
  var k=0;
    $('#add_movie').click(function(){

      var image = document.getElementById('movie_poster').value;
      var movie_title =  document.getElementById('movie_title').value;
      var movie_genre=  document.getElementById('movie_genre').value;
      console.log("MOVEI: " +movie_genre);
      console.log("Image url: " +  image);
      $( "#movie_added" ).append( '<div class="col m6" id=C'+(k)+' > <div class="card"> <div class="card-image"> <img src='   + image +   ' id="poster_image_'+ (i++) +    '> <span class="card-title"><b></b></span> </div> <div class="card-content"> <h6>'+ movie_title +  '</h6> </div> <div class="card-action"> <a href="#">'  + movie_genre +    '</a>   <a class="waves-effect waves-light btn red" id="doneCounter" onclick="hide('+k+')">Delete</a>  <a class="waves-effect waves-light btn blue" onclick="edit('+k+')">Edit</a> </div> </div> </div>' );
      k++;
    });
});

function hide(k)
{
  console.log(k);
  $('#C'+k).remove();
};
function edit(k)
{
  var newName = prompt("Enter new name");
  var newGenre = prompt("Enter new genre");
  var newPoster = prompt("Enter new psoter link");
  $('#C'+k).remove();
  $( "#movie_added" ).append( '<div class="col m6" id=C'+(k)+' > <div class="card"> <div class="card-image"> <img src='   + newPoster +   ' id="poster_image"> <span class="card-title"><b></b></span> </div> <div class="card-content"> <h6>'+ newName +  '</h6> </div> <div class="card-action"> <a href="#">'  + newGenre +    '</a>   <a class="waves-effect waves-light btn red" id="doneCounter" onclick="hide('+k+')">Delete</a>  <a class="waves-effect waves-light btn blue" onclick="edit('+k+')">Edit</a> </div> </div> </div>' );
  k++;
  console.log(k);
}
