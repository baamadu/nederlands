// De vertalingen voor NL en EN
const teksten = {
    nl: {
        welkom: "Best-Inn Hotels heeft een aantal hotels overgenomen van Fletcher en Leonardo. Je vindt ons nu in prachtige natuurgebieden zoals de Veluwe en de bossen bij Oisterwijk, maar ook in historische steden zoals Amsterdam en Breda.",
        headerTitle: "Best-Inn Hotels",
        headerDescription: "Hotels in natuurgebieden en historische steden",
        sectionTitle: "Welkom bij Best-Inn Hotels",
        whyTitle: "Waarom kiezen voor ons?",
        priceTitle: "Kamerprijzen vanaf €120 per nacht.",
        businessTitle: "Perfect voor zakelijke klanten en weekendjes weg.",
        checkoutTitle: "Late checkout tot 13:00 uur.",
        ctaTitle: "Bekijk onze aanbieding",
        footerText: "&copy; 2025 Best-Inn Hotels"
    },
    en: {
        welkom: "Best-Inn Hotels has taken over several hotels from Fletcher and Leonardo. You can now find us in beautiful natural areas like the Veluwe and the forests near Oisterwijk, as well as in historic cities like Amsterdam and Breda.",
        headerTitle: "Best-Inn Hotels",
        headerDescription: "Hotels in natural areas and historic cities",
        sectionTitle: "Welcome to Best-Inn Hotels",
        whyTitle: "Why choose us?",
        priceTitle: "Room prices starting from €120 per night.",
        businessTitle: "Perfect for business clients and weekend getaways.",
        checkoutTitle: "Late checkout until 1:00 PM.",
        ctaTitle: "See our offer",
        footerText: "&copy; 2025 Best-Inn Hotels"
    }
};

// Functie om de tekst te veranderen
function veranderTekst(taal) {
    const tekst = teksten[taal];

    document.getElementById("welcome-text").innerHTML = tekst.welkom;
    document.getElementById("header-title").innerHTML = tekst.headerTitle;
    document.getElementById("header-description").innerHTML = tekst.headerDescription;
    document.getElementById("section-title").innerHTML = tekst.sectionTitle;
    document.getElementById("why-title").innerHTML = tekst.whyTitle;
    document.getElementById("price-title").innerHTML = tekst.priceTitle;
    document.getElementById("business-title").innerHTML = tekst.businessTitle;
    document.getElementById("checkout-title").innerHTML = tekst.checkoutTitle;
    document.getElementById("cta-title").innerHTML = tekst.ctaTitle;
    document.getElementById("footer-text").innerHTML = tekst.footerText;
}

// Standaard de tekst in NL weergeven
window.onload = function() {
    veranderTekst("nl");
};

// Event listeners voor de taalkeuze knoppen
document.getElementById("nl-button").addEventListener("click", function() {
    veranderTekst("nl");  // Verander naar Nederlands
});

document.getElementById("en-button").addEventListener("click", function() {
    veranderTekst("en");  // Verander naar Engels
});


// 1. Zorg ervoor dat in index.html %WELKOM_TEKST% wordt vervangen door de variabele welkomTekst_nl

// 2. Voeg een knop NL en EN toe; als je op EN drukt, vervang de tekst dan door welkomTekst_en, nl vlag => welkomTekst_nl

