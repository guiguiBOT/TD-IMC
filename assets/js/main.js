function calculIMC() {
    size = parseFloat(document.querySelector("#size").value);
    weight = parseFloat(document.querySelector("#weight").value);
    let resultContainer = document.querySelector("#speech");
    let operation = weight / (size * size);
    result = operation.toFixed(2);
    resultContainer.innerHTML = result;
    let speech = document.querySelector("#speech");
    let veryLowScore = "Score inférieur à 18.5 : Etat de maigreur";
    let normalScore = "Entre 18.5 et 25 : corpulence normale";
    let surpoids = "Entre 25 et 30 : surpoids";
    let classOneScore = "Entre 30 et 35 : obésité modérée de classe 1";
    let classTwoScore = "Entre 35 et 40 : obésité élevée de classe 2";
    let highScore = "Supérieur à 40 : il s'agit là d'obésité morbide ou massive.";
    let errorEmpty = "Vous devez entrer des valeurs";
    let errorNegative = "Vous ne pouvez pas entrer de valeurs négatives";
    let errorHighValue = "Le score est très élevé, si les valeurs entrées sont exactes, vous devriez consulter un médecin";
    let errorNan = "Valeur nulle ou incorrecte";

    if (size < 0 || weight < 0) {
        speech.innerHTML = errorNegative;
    } else if (isNaN(size) == true || isNaN(weight) == true || size == "" || weight == "") {
        speech.innerHTML = errorNan;
    } else if (size === "" || weight === "") {
        speech.innerHTML = errorEmpty;
    } else if (result > 60) {
        speech.innerHTML = errorHighValue;
    } else if (result < 18.5) {
        speech.innerHTML = veryLowScore;
    } else if (result >= 18.5 && result < 25) {
        speech.innerHTML = normalScore;
    } else if (result >= 25 && result < 30) {
        speech.innerHTML = surpoids;
    } else if (result >= 30 && result < 35) {
        speech.innerHTML = classOneScore;
    } else if (result >= 35 && result < 40) {
        speech.innerHTML = classTwoScore;
    } else if (result > 40) {
        speech.innerHTML = highScore;
    }
}

