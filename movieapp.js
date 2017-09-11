$(document).ready(function(){
    $('#add_movie').click(function(){
        $("#movie_added").load("added_movie.txt");
    });
});
