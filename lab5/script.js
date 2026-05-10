
function pornesteCeas() {
    var $el = $("#ceas-footer");
    if ($el.length === 0) return;

    function actualizeaza() {
        var acum = new Date();
        var h = acum.getHours();
        var m = acum.getMinutes();
        var s = acum.getSeconds();
        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;
        $el.text(h + ":" + m + ":" + s);
    }

    actualizeaza();
    setInterval(actualizeaza, 1000);
}


function afiseazaSalut() {
    var $el = $("#salut-dinamic");
    if ($el.length === 0) return;

    var ora = new Date().getHours();
    var mesaj = "";

    if (ora >= 5 && ora < 12) {
        mesaj = "Buna dimineata! Bine ati venit pe pagina Ford EcoBoost.";
    } else if (ora >= 12 && ora < 18) {
        mesaj = "Buna ziua! Explorati motoarele EcoBoost 1.5L.";
    } else {
        mesaj = "Buna seara! Descoperiti tehnologia EcoBoost.";
    }

    $el.text(mesaj);
}


function activeazaTabele() {
    var $randuri = $(".data-table tr");

    $randuri.on("click", function() {
        $randuri.removeClass("rand-activ");
        $(this).addClass("rand-activ");
    });
}


function creeazaButonSus() {
    var $buton = $("<button>")
        .attr("id", "btn-sus")
        .attr("title", "Inapoi sus")
        .text("▲");

    $buton.appendTo("body");

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 300) {
            $buton.show();
        } else {
            $buton.hide();
        }
    });

    $buton.on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 400);
    });
}


function activeazaZoom() {
    var $img = $(".hero-image");
    if ($img.length === 0) return;

    var $overlay = $("<div>").attr("id", "zoom-overlay");
    var $imgMare = $("<img>")
        .attr("src", $img.attr("src"))
        .attr("alt", $img.attr("alt"));

    $overlay.append($imgMare).appendTo("body");

    $img.css("cursor", "zoom-in");

    $img.on("click", function() {
        $overlay.css("display", "flex");
    });

    $overlay.on("click", function() {
        $overlay.hide();
    });
}


function animeazaPagina() {
    var $elemente = $(
        ".section-title, .description-text, .data-table, .engine-card, .hero-image-wrapper, .summary-text"
    );

    // jQuery: .each() in loc de .forEach()
    $elemente.each(function(i, el) {
        $(el).css({
            opacity: "0",
            transform: "translateY(18px)",
            transition: "opacity 0.5s ease, transform 0.5s ease"
        });

        setTimeout(function() {
            $(el).css({
                opacity: "1",
                transform: "translateY(0)"
            });
        }, 80 + i * 70);
    });
}


$(document).ready(function() {
    pornesteCeas();
    afiseazaSalut();
    activeazaTabele();
    creeazaButonSus();
    activeazaZoom();
    animeazaPagina();
});