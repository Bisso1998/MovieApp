$(document).ready(function(){
  var i=0;
  var k=0;
    $('#add_movie').click(function(){
      // $( "#movie_added" ).append( "<p>Test</p>" );

      // $("#movie_added").append.load("added_movie.html");
      // $("movie_added").load("added_movie.html #posts", function() {
      // $("#hi").append($(this).find("#posts").html());
      // $('#movie_added').append($('<div>').load('added_movie.html'));
      var image = document.getElementById('movie_poster').value;
      var movie_title =  document.getElementById('movie_title').value;
      var movie_genre=  document.getElementById('movie_genre').value;
      console.log("MOVEI: " +movie_genre);
      console.log("Image url: " +  image);
      // $("#poster_image").attr("src",image);
      // console.log(image);
      $( "#movie_added" ).append( '<div class="col m4" id=C'+(k)+' > <div class="card"> <div class="card-image"> <img src='   + image +   ' id="poster_image_'+ (i++) +    '> <span class="card-title"><b></b></span> </div> <div class="card-content"> <h6>'+ movie_title +  '</h6> </div> <div class="card-action"> <a href="#">'  + movie_genre +    '</a>           <a class="waves-effect waves-light btn blue" id="doneCounter" onclick="hide('+k+')">done</a> </div> </div> </div>' );
      k++;
    });
});

function hide(k)
{
  console.log(k);
  $('#C'+k).remove();
}
