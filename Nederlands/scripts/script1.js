// De vertalingen voor NL en EN
const teksten = {
    nl: {
        welkom: "Geniet van een luxe verblijf in één van onze hotels in de natuur of de stad. Inclusief ontbijt en late checkout tot <strong>13:00 uur</strong>.",
        headerTitle: "Aanbieding",
        headerDescription: "Speciaal voor jou bij Best-Inn Hotels",
        sectionTitle: "Weekend Arrangement",
        priceText: "Vanaf €120 per nacht",
        bookingText: "Boek nu voor een <strong>lang weekend</strong> of een <strong>midweek</strong> en profiteer van onze speciale tarieven.",
        ctaText: "Terug naar Home",
        footerText: "&copy; 2025 Best-Inn Hotels"
    },
    en: {
        welkom: "Enjoy a luxury stay in one of our hotels in nature or in the city. Includes breakfast and late checkout until <strong>1:00 PM</strong>.",
        headerTitle: "Special Offer",
        headerDescription: "Especially for you at Best-Inn Hotels",
        sectionTitle: "Weekend Package",
        priceText: "From €120 per night",
        bookingText: "Book now for a <strong>long weekend</strong> or a <strong>midweek</strong> and take advantage of our special rates.",
        ctaText: "Back to Home",
        footerText: "&copy; 2025 Best-Inn Hotels"
    }
};

// Functie om de tekst te veranderen
function veranderTekst(taal) {
    const tekst = teksten[taal];

    document.getElementById("header-title").innerHTML = tekst.headerTitle;
    document.getElementById("header-description").innerHTML = tekst.headerDescription;
    document.getElementById("section-title").innerHTML = tekst.sectionTitle;
    document.getElementById("offer-description").innerHTML = tekst.welkom;
    document.getElementById("price-text").innerHTML = tekst.priceText;
    document.getElementById("booking-text").innerHTML = tekst.bookingText;
    document.getElementById("cta-text").innerHTML = tekst.ctaText;
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
