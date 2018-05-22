

$(".click").click(function() {
    var topics = ["Game+of+Thrones", "Dogs", "Angels+Baseball", "Flowers", "Embroidery", "Sushi", "Denim", "Mountains"];
    var number = parseInt($(this).val());
    console.log(number);
    var input = topics[number];
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+ "&api_key=yoY8WGlVRAFrybPEutH2LAhyth9Nagwa&limit=10")

    xhr.done(function(data) { 
        console.log("success got data", data);

    var gifs = data.data;

    for (i in gifs) {
        $("#showGifs").prepend("<img src='"+gifs[i].images.original.url+" '/> rating:"+gifs[i].rating)   
    }
    }); 
});

