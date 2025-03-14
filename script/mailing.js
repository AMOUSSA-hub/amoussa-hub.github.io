function sendMail() {
    let name = document.getElementById('nameSender').value;
    let message = document.getElementById('message').value;
    let recipient = "amoussa.rayanpro@gmail.com"; 

    if (!name || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    
    let mailtoLink = `mailto:${recipient}?subject= Demande via le Portfolio de ${name}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    document.getElementById('nameSender').value = "";
    document.getElementById('message').value = "";
    
}