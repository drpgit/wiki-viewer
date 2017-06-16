// Back-end logic goes here

var searchResults;

function getResults(query) {
  $.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&limit=10&namespace=0&format=json', function(response) {
    for (var i = 0; i < response[1].length; i++) {
      $(".show-results").append("<div class='result'><h4><a href='" + response[3][i] + "' target='_blank'>" + response[1][i] + "</a></h4><p>" + response[2][i] + "</p></div>");
    }
  });
}

// Front-end logic goes here

$(document).ready(function() {
  $(".myRandom").click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
  });

  $("form#wiki-search").submit(function(event) {
    event.preventDefault();

    var inputtedText = $("#mySearch").val();
    getResults(inputtedText);

    $(".show-results").show();
  });
});
