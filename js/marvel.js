var marvel = {
    render: function () {
        var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=31cbbb53ef7c50fcc604a64d80fdc6d0&hash=11e95e5fa04ba98322549adb42ab201d";
        var mensagem = document.getElementById("mensagem");
        var footer = document.getElementById("footer");
        var marvel1 = document.getElementById("marvel-container");
        $.ajax({
            url: url,
            type: "GET",
            beforeSend: function () {
                mensagem.innerHTML = "Carregando...";

            },
            complete: function () {
                mensagem.innerHTML = "Carregado com sucesso";
            },
            success: function (data) {
                footer.innerHTML = data.attributionHTML;
                var string = "";
                string += "<div class='row'>";

                for (var i = 0; i < data.data.results.length; i++) {
                    var element = data.data.results[i];


                    string += "<div class='col-md-2'>";
                    string += "<a href='"+element.urls[0].url+"'target='_blank' />";
                    string += "<img src='"+element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
                    string += "<h6>"+element.title+"<h6>";
                    string += "</div>";

                    if ((i + 1) % 5 == 0) {
                        string += "</a>";
                        string += "</div>";
                        string += "<div class='row'>";

                    }
                }
                marvel1.innerHTML = string;
            },
            error: function () {
                mensagem.innerHTML = "Por favor tente novamente mais tarde";
            }

        });
    }
};
marvel.render();