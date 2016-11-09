let URL = "http://148.75.251.185:8888";

$.ajax({
  method: "GET",
  url: URL+'/students/',
}).done(function(response){
  console.log(response);
});
