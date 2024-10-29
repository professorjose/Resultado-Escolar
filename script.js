function verificar(){
    var n1 = document.getElementById('nota1').value;
    var n1 = document.getElementById('nota1').value;
    var n1 = document.getElementById('nota1').value;
    var resultado = document.getElementById('resultado');
    var media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;

    if (media >= 6){
        resultado.textContent = "Parabéns! Aprovado com média " + media.toFixed(1) +".";
    } else {
        resultado.textContent = "Reprovado com média " + media.toFixed(1) + ".";
    }
}