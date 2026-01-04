
        const form = document.getElementById("calcForm");

     form.addEventListener("submit", function (e) {
    e.preventDefault();

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if (num1 === "" || num2 === "") {
        error.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    const a = Number(num1);
    const b = Number(num2);

    if (isNaN(a) || isNaN(b)) {
        error.textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    document.getElementById("somme").textContent = a + b;
    document.getElementById("difference").textContent = a - b;
    document.getElementById("produit").textContent = a * b;

    if (b === 0) {
        document.getElementById("quotient").textContent = "Impossible (division par zéro)";
    } else {
        document.getElementById("quotient").textContent = a / b;
    }
});
    