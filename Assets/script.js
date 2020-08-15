var apiKey = "hUwSnfxr9wAh5ETKu42zwXv1UY9b0wdg"
var searchTerm = $("#citySearchInput").val()

$(document).ready(function() {
    console.log("test")
    $("#search-id").on("click", function() {
        event.preventDefault()
        $.ajax({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey,
            method: "GET"
        }).then(function(response) {
            var article = response.response.docs
            console.log(article)
            for (var i = 0; i < article.length; i++) {
                var abstract = article[i].abstract
                var newDiv = $("<div>")
                newDiv.text(abstract)
                $("#search-results-id").append(newDiv)

            }

        })


    })

});