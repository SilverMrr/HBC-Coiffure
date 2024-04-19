function updateTotal() {
    let total = parseInt(document.getElementById('service-select').value, 10);
    document.querySelectorAll('.additional-options input[type="checkbox"]:checked').forEach((checkbox) => {
        total += parseInt(checkbox.value, 10);
    });
    document.getElementById('total-price').innerText = `${total}€`;
}

function bookAppointment() {
    alert('Rendez-vous en cours de réservation...');
}

function bookAppointment() {
    const modal = document.getElementById('appointment-modal');
    const summary = document.getElementById('summary');
    const finalPrice = document.getElementById('final-price');
    
    // Récupération du service principal sélectionné
    const mainService = document.getElementById('service-select');
    const mainServiceText = mainService.options[mainService.selectedIndex].text.split('-')[0].trim(); // Enlève le prix

    // Initialise les services avec la prestation principale
    let services = "<strong>Prestation principale:</strong> " + mainServiceText + "<br>";

    // Ajout des options supplémentaires sélectionnées
    document.querySelectorAll('.additional-options input[type="checkbox"]:checked').forEach((checkbox) => {
        // Enlève le prix des options pour une affichage plus concis
        const serviceName = checkbox.parentElement.textContent.split('+')[0].trim();
        services += serviceName + "<br>";
    });
    
    // Mise à jour du texte du résumé dans le modal en utilisant innerHTML pour interpréter le HTML
    summary.innerHTML = services;
    finalPrice.textContent = document.getElementById('total-price').textContent;
    modal.style.display = "block";
}

// Pour fermer le modal
document.getElementsByClassName('close')[0].onclick = function() {
    const modal = document.getElementById('appointment-modal');
    modal.style.display = "none";
}

// Fermer le modal si l'utilisateur clique en dehors de celui-ci
window.onclick = function(event) {
    const modal = document.getElementById('appointment-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
