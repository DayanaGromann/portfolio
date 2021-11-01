

function abrePortfolio(evt, tipoPortf) {
    // Declare all variables
    var i, conteudoAba, abaLink;

    // Get all elements with class="tabcontent" and hide them
    conteudoAba = document.getElementsByClassName("conteudoAba");
    for (i = 0; i < conteudoAba.length; i++) {
        conteudoAba[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    abaLink = document.getElementsByClassName("abaLink");
    for (i = 0; i < abaLink.length; i++) {
        abaLink[i].className = abaLink[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tipoPortf).style.display = "block";
    evt.currentTarget.className += "active";

    
}

document.getElementById("defaultOpen").click();
