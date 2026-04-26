function pornesteCeas() {
    var el = document.getElementById("ceas-footer");
    if (!el) return;

    function actualizeaza() {
        var acum = new Date();
        var h = acum.getHours();
        var m = acum.getMinutes();
        var s = acum.getSeconds();
        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;
        el.textContent = h + ":" + m + ":" + s;
    }

    actualizeaza();
    setInterval(actualizeaza, 1000);
}


function afiseazaSalut() {
    var el = document.getElementById("salut-dinamic");
    if (!el) return;

    var ora = new Date().getHours();
    var mesaj = "";

    if (ora >= 5 && ora < 12) {
        mesaj = "Buna dimineata! Bine ati venit pe pagina Ford EcoBoost.";
    } else if (ora >= 12 && ora < 18) {
        mesaj = "Buna ziua! Explorati motoarele EcoBoost 1.5L.";
    } else {
        mesaj = "Buna seara! Descoperiti tehnologia EcoBoost.";
    }

    el.textContent = mesaj;
}


function activeazaTabele() {
    var randuri = document.querySelectorAll(".data-table tr");

    randuri.forEach(function(rand) {
        rand.addEventListener("click", function() {
            randuri.forEach(function(r) {
                r.classList.remove("rand-activ");
            });
            this.classList.add("rand-activ");
        });
    });
}

function creeazaButonSus() {
    var buton = document.createElement("button");
    buton.id = "btn-sus";
    buton.textContent = "▲";
    buton.title = "Inapoi sus";
    document.body.appendChild(buton);

    window.addEventListener("scroll", function() {
        buton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    buton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


function activeazaZoom() {
    var img = document.querySelector(".hero-image");
    if (!img) return;

    var overlay = document.createElement("div");
    overlay.id = "zoom-overlay";

    var imgMare = document.createElement("img");
    imgMare.src = img.src;
    imgMare.alt = img.alt;

    overlay.appendChild(imgMare);
    document.body.appendChild(overlay);

    img.style.cursor = "zoom-in";
    img.addEventListener("click", function() {
        overlay.style.display = "flex";
    });

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
    });
}


function animeazaPagina() {
    var elemente = document.querySelectorAll(
        ".section-title, .description-text, .data-table, .engine-card, .hero-image-wrapper, .summary-text"
    );

    elemente.forEach(function(el, i) {
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        setTimeout(function() {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 80 + i * 70);
    });
}


window.addEventListener("load", function() {
    pornesteCeas();
    afiseazaSalut();
    activeazaTabele();
    creeazaButonSus();
    activeazaZoom();
    animeazaPagina();
});