function maiorNumero(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

function ordenarCrescente(n1, n2, n3) {
    return [n1, n2, n3].sort((a, b) => a - b);
}

function verificarPalindromo(texto) {
    const limpo = texto.toLowerCase().replace(/\s+/g, "");
    const invertido = limpo.split("").reverse().join("");
    return limpo === invertido ? "É palíndromo" : "Não é palíndromo";
}

function verificarSubconjunto(palavra1, palavra2) {
    if (
        palavra1 === undefined ||
        palavra2 === undefined ||
        String(palavra1).trim() === "" ||
        String(palavra2).trim() === ""
    ) {
        return "erro";
    }

    const p1Minuscula = String(palavra1).toLowerCase();
    const p2Minuscula = String(palavra2).toLowerCase();

    if (p1Minuscula.includes(p2Minuscula)) {
        return "é um subconjunto";
    }

    return "não é um subconjunto";
}

function obterDiaSemana(data) {
    const dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    let objetoData;
    if (data instanceof Date) {
        objetoData = data;
    } else if (typeof data === "string" && data.includes("-")) {
        objetoData = new Date(data + "T00:00:00");
    } else {
        objetoData = new Date(data);
    }

    return dias[objetoData.getDay()];
}

function executarMaior() {
    const n1 = Number(document.getElementById("maior1").value);
    const n2 = Number(document.getElementById("maior2").value);
    const n3 = Number(document.getElementById("maior3").value);
    alert("Maior: " + maiorNumero(n1, n2, n3));
}

function executarOrdem() {
    const n1 = Number(document.getElementById("ordem1").value);
    const n2 = Number(document.getElementById("ordem2").value);
    const n3 = Number(document.getElementById("ordem3").value);
    alert("Ordem crescente: " + ordenarCrescente(n1, n2, n3).join(", "));
}

function executarPalindromo() {
    const texto = document.getElementById("textoPalindromo").value;
    alert(verificarPalindromo(texto));
}

function executarSubconjunto() {
    const p1 = document.getElementById("palavra1").value;
    const p2 = document.getElementById("palavra2").value;
    alert(verificarSubconjunto(p1, p2));
}

function executarDiaSemana() {
    const data = document.getElementById("dataInput").value;
    if (!data) {
        alert("Selecione uma data.");
        return;
    }
    alert(obterDiaSemana(data));
}