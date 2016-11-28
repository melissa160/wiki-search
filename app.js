
var search = "";
var html = "";

$('#search-input').keyup(function() {
  search = $('#search-input').val().toLowerCase();


  var url = 'https://en.wikipedia.org/w/api.php';
  data = {
    format:'json',
    action:'query',
    generator:'search',
    gsrnamespace:'0',
    gsrlimit:'10',
    prop:'extracts',
    pilimit:'max',
    exintro:'',
    explaintext:'',
    exsentences:'1',
    exlimit:'max',
    gsrsearch:search,
    rvprop:'content',


  }
   
  if (search){
    $.ajax({
      type:"GET",
      dataType: "jsonp",
      url: url,
      useDefaultXhrHeader: false, //important, otherwise its not working
      data: data,
      success: success
    });
  }else{
    $(".p").html("");

  }

});

$('#search-btn').on('click', function() {
  $( '#search-input').keyup();
});

$('#random-btn').on('click', function() {
 window.open("https://en.wikipedia.org/wiki/Special:Random");
});




function success(json){
	var obj = json.query.pages;
    $(".p").html("");
    for(var i in obj){
      if( obj[i].hasOwnProperty('extract') ) {
        // La propiedad existe, sea cual sea su valor
        html = "<div class='dictionary'><a href='https://en.wikipedia.org/wiki?curid="+obj[i].pageid+"' target='_blank'><p><strong>"+obj[i].title+"</strong></p><p>"+obj[i].extract+"</p></a></div>";
        $(".p").append(html);
      }else{
      }
  };

  
; 
}

