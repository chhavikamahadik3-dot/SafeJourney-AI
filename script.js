function startJourney() {
    document.getElementById("journeyPopup").style.display = "flex";
}

function closeJourney() {
    document.getElementById("journeyPopup").style.display = "none";
}

function confirmJourney() {

    const start = document.getElementById("startPoint").value;
    const destination = document.getElementById("destination").value;
    const departure = document.getElementById("departureTime").value;
    const arrival = document.getElementById("arrivalTime").value;
    const contact = document.getElementById("contact").value;

    if (!start || !destination || !departure || !arrival || !contact) {
        alert("Please fill all journey details.");
        return;
    }

    closeJourney();

    alert(
        "✓ Safe Journey Started!\n\n" +
        start + " → " + destination +
        "\nExpected arrival: " + arrival
    );
}