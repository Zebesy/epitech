
function validate() {
  var checkHomme = document.forms["myForm"]["Homme"].checked;
  var checkFemme = document.forms["myForm"]["Femme"].checked;
  var checkAutre = document.forms["myForm"]["Autre"].checked;
  var checkMr = document.forms["myForm"]["monsieur"].checked;
  var checkMme = document.forms["myForm"]["madame"].checked;
  var inputName = document.forms["myForm"]["username"].value;
  var inputEmail = document.forms["myForm"]["email"].value;
  var inputTel = document.forms["myForm"]["tel"].value;
  var inputWebsite = document.forms["myForm"]["website"].value;
  var inputBorn = document.forms["myForm"]["born"].value;
  var checkBoxes = document.querySelector('input[name="passions"]:checked');


  if (checkHomme == false && checkFemme == false && checkAutre == false) {
    alert("Tous les champs sont obligatoire :\n Veuillez renseigner votre genre.");
  }

  if (checkMr == false && checkMme == false) {
    alert("Tous les champs sont obligatoire :\n Veuillez renseigner 'civilité'.");
  }

  if (inputName == "") {
    alert("Tous les champs sont obligatoire :\n Veuillez renseigner votre nom.");
    document.getElementById('Nom').style.backgroundColor = '#F08080';
    return false;
  }
  if (inputName !== "") {
    document.getElementById('Nom').style.backgroundColor = 'white';
  }

  if (inputEmail == "") {
    alert("Tous les champs sont obligatoire :\n Veuillez renseigner votre email.");
    document.getElementById('email').style.backgroundColor = '#F08080';
    return false;
  }
  if (inputEmail !== "") {
    document.getElementById('email').style.backgroundColor = 'white';
  }

  if (inputTel == "") {
    alert("Tous les champs sont obligatoire :\n Veuillez renseigner votre téléphone.");
    document.getElementById('tel').style.backgroundColor = '#F08080';
    return false;
  }
  if (inputTel !== "") {
    document.getElementById('tel').style.backgroundColor = 'white';
  }

  if (inputWebsite == "") {
    alert("Tous les champs sont obligatoire :\n Veuillez renseigner votre site web.");
    document.getElementById('website').style.backgroundColor = '#F08080';
    return false;
  }
  if (inputWebsite !== "") {
    document.getElementById('website').style.backgroundColor = 'white';
  }

  if (inputBorn == "") {
    alert("Tous les champs sont obligatoire :\n Veuillez renseigner votre date de naissance.");
    document.getElementById('born').style.backgroundColor = '#F08080';
    return false;
  }
  if (inputBorn !== "") {
    document.getElementById('born').style.backgroundColor = 'white';
  }

  if (!checkBoxes) {
    alert("Tous les champs sont obligatoire :\n Veuillez indiquer au moins 1 hobbie.");
    return false;
  }

  return true;

}
