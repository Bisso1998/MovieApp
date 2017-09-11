$(document).ready(function(){
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
      $( "#movie_added" ).append( '<div class="col m4"> <div class="card"> <div class="card-image"> <img src='   + image +   ' id="poster_image_'+'1'+    '> <span class="card-title"><b></b></span> </div> <div class="card-content"> <h6>'+ movie_title +  '</h6> </div> <div class="card-action"> <a href="#">'  + movie_genre +    '</a> </div> </div> </div>' );

    });
});
