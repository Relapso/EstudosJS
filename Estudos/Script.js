
function mudarCar(){
    var paragrafos = document.getElementsByTagName("p");

    for (var i = 0; i < paragrafos.length; i++) {
      var paragrafo = paragrafos[i];
  
      if (i == 0) {
        paragrafo.textContent = "aula de programaçao para web";
      } else if (i == 1) {
        paragrafo.style.fontSize = "40px";
      } else if (i === 2) {
        paragrafo.style.color = "blue";
      } else if (i === 3) {
        paragrafo.style.textAlign = "center";
      } else if (i === 4) {
        paragrafo.style.color = "green";
        paragrafo.style.fontSize = "10px";
      } else if (i === 5) {
        paragrafo.textContent = "JavaScript não é Java";
        paragrafo.style.color = "red";
        paragrafo.style.fontWeight = "bold";
      }
    }
}

function mudaCor() {
  var paragrafosPares = document.querySelectorAll("p:nth-of-type(even)");

  for (var i = 0; i < paragrafosPares.length; i++) {
    paragrafosPares[i].style.backgroundColor = "yellow";
  }
}

function ligar(){
var lampada = document.getElementById('lampadaDesligada');
    lampada.src = "Imagem/lamp_on.gif";
}   

function desligar(){
    var lampada = document.getElementById('lampadaDesligada');
    lampada.src = "Imagem/lamp_off.gif";
}

function ligarDesligar(){
    var lampada = document.getElementById('lampada');
    var botao = document.getElementById('ligarDesligar');

    if(lampada.src.match('lamp_off.gif')){
        lampada.src = "Imagem/lamp_on.gif";
        botao.textContent = 'Desligar';
    }else {
        lampada.src = 'Imagem/lamp_off.gif';
        botao.textContent = 'Ligar';
    }


}

function calculadora(){
    var num1 = +document.getElementById("valor1").value;
    var num2 = +document.getElementById("valor2").value;
    var opera = document.getElementById("operacao").value;
    var resultado;
    if(opera === "soma"){
        resultado = num1 + num2;
    } else if(opera === "subtracao"){
        resultado = num1 - num2;
    } else if (opera === "multiplicacao"){
        resultado = num1 * num2;
    }else if(opera === "divisao"){
        resultado = num1 / num2;
    }
    window.alert("Resultado: " + resultado);
}
