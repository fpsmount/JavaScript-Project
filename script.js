//Tabuada

function enviar1() {
    let tabuada = [4];
    tabuada[0] = Number(document.querySelector("#number").value);
    tabuada[2] = document.querySelector(".entre");
    tabuada[1] = document.querySelector("#op").value;

    if (tabuada[0] === 0) {
        alert("Error!!\nCampo vazio ou número igual a 0");
    }else {
        tabuada[2].innerHTML = ("");
        switch (tabuada[1]) {
            case "+":
                for (i = 0;  i <= 10;  i++) {
                    tabuada[3] = Number(tabuada[0]+i);
                    tabuada[2].innerHTML += (`${tabuada[0]} + ${i} = ${tabuada[3]}<br>`);
                }
                break;
            case "-":
                for (i = 0;  i <= 10;  i++) {
                    tabuada[3] = Number((tabuada[0]+i) - tabuada[0]);
                    tabuada[2].innerHTML += (`${tabuada[0]+i} - ${tabuada[0]} = ${tabuada[3]}<br>`);
                }
                break;
            case "*":
                for (i = 0;  i <= 10;  i++) {
                        tabuada[3] = Number(tabuada[0]*i);
                        tabuada[2].innerHTML += (`${tabuada[0]} x ${i} = ${tabuada[3]}<br>`);
                    }
                break;
            case "/":
                for (i = 0;  i <= 10;  i++) {
                    tabuada[3] = Number((tabuada[0]*i)/tabuada[0]);
                    tabuada[2].innerHTML += (`${tabuada[0]*i} ÷ ${tabuada[0]} = ${tabuada[3]}<br>`);
                }
                break;
        }
    }
}
function limpar1() {
    const limpa = document.querySelector("#number");
    limpa.value = '';
    const output = document.querySelector(".entre");
    output.innerHTML = ('');   
}

//Media da notas

function enviar2() {
    let nota = [4];
    nota[0] = String(document.querySelector("#nota1").value);
    nota[0] = parseFloat(nota[0].replace(",","."));
    nota[1] = String(document.querySelector("#nota2").value);
    nota[1] = parseFloat(nota[1].replace(",","."));
    nota[2] = String(document.querySelector("#nota3").value);
    nota[2] = parseFloat(nota[2].replace(",","."));
    nota[3] = String(document.querySelector("#nota4").value);
    nota[3] = parseFloat(nota[3].replace(",","."));

    let i = 0;
    let soma = 0;
    let media = 0;
    const output = document.querySelector(".entre");
    for(i in nota) {
        soma += nota[i];
    }
    media = soma/nota.length;
    output.innerHTML = (`Media dos alunos ${(media.toFixed(2)).replace(".", ",")}`);
}

function limpar2() {
    const limpa1 = document.querySelector("#nota1");    
    const limpa2 = document.querySelector("#nota2");    
    const limpa3 = document.querySelector("#nota3");    
    const limpa4 = document.querySelector("#nota4");
    const output = document.querySelector(".entre");
    limpa1.value =("");    
    limpa2.value =("");    
    limpa3.value =("");    
    limpa4.value =("");
    output.innerHTML = ("");

}

//IMC

function enviar3() {
    const output = document.querySelector(".entre");
    let peso = String(document.querySelector("#peso").value);
    peso = parseFloat(peso.replace(",","."));
    let altura = String(document.querySelector("#altura").value);
    altura = parseFloat(altura.replace(",","."));
    let calc = peso/(altura*altura);

    if (calc < 18.5) {
        output.innerHTML = (`Seu imc é ${(calc.toFixed(2)).replace(".", ",")}. Você está abaixo do peso ideal!`);

    }else if(calc >= 18.5 && calc < 25 ) {
        output.innerHTML = (`Seu imc é ${calc.toFixed(2).replace(".", ",")}. Você está no peso ideal!`);

    }else if(calc >= 25 && calc < 30) {
        output.innerHTML = (`Seu imc é ${calc.toFixed(2).replace(".", ",")}. Você está no sobrepeso!`);

    }else if(calc >= 30 && calc < 40) {
        output.innerHTML = (`Seu imc é ${calc.toFixed(2).replace(".", ",")}. Você está com obesidade!`);

    }else {
        output.innerHTML = (`Seu imc é ${(calc.toFixed(2)).replace(".", ",")}. Você está com obesidade grave!`);
    }
}

function limpar3() {
    const limpa = document.querySelector("#altura");
    limpa.value = '';
    const limpa2 = document.querySelector("#peso");
    limpa2.value = '';
    const output = document.querySelector(".entre");
    output.innerHTML = ('');   
}

//peso ideal

function enviar4() {
    const output = document.querySelector(".entre");
    let altura = String(document.querySelector("#altura").value);
    altura = parseFloat(altura.replace(",","."));
    let m = document.querySelector("#m");
    let f = document.querySelector("#f");
    let calc;

    if (m.checked == true) {
        calc = (72.7*altura) - 58;
        output.innerHTML = (`O peso ideal para um homem de ${altura.toFixed(2).replace(".", ",")} metros é ${(calc.toFixed(2)).replace(".", ",")} kg `);
    }else if(f.checked == true) {
        calc = (62.1*altura) - 44.7;
        output.innerHTML = (`O peso ideal para uma mulher de ${altura.toFixed(2).replace(".", ",")} metros é ${(calc.toFixed(2)).replace(".", ",")} kg `);
    }
}

function limpar4() {
    const limpa = document.querySelector("#altura");
    limpa.value = '';
    const output = document.querySelector(".entre");
    output.innerHTML = ('');   
}

//Percentual eleitoral

function enviar5() {
    const output = document.querySelector(".entre");
    let validos = parseFloat(document.querySelector("#validos").value);
    let nulos = parseFloat(document.querySelector("#nulos").value);
    let brancos = parseFloat(document.querySelector("#brancos").value);

    let total = nulos + validos + brancos;
    output.innerHTML = (`Total de votos: ${total}<br>`);
    output.innerHTML += (`Percentual de votos brancos: ${((100*brancos)/total).toFixed(2)}%<br>`);
    output.innerHTML += (`Percentual de votos nulos: ${((nulos*100)/total).toFixed(2)}%<br>`);
    output.innerHTML += (`Percentual de votos validos: ${((100*validos)/total).toFixed(2)}%<br>`);
} 

function limpar5() {
    const output = document.querySelector(".entre");
    const limpa = document.querySelector("#nulos");
    const limpa2 = document.querySelector("#brancos");
    const limpa3 = document.querySelector("#validos");
    limpa.value = '';
    limpa2.value = '';
    limpa3.value = '';
    output.innerHTML = "";
}

//Quantas dias viveu

function enviar6() {
    const output = document.querySelector(".entre");
    let dataNasc = document.querySelector("#data").value;
    let datePassada = new Date(dataNasc);
    let dateAtual = new Date();
    let mesAtual = (parseInt(dateAtual.getMonth())) + 1;
    let mesPassado = parseInt(datePassada.getMonth()) + 1;
    let anoPassado = parseInt(datePassada.getFullYear());
    let anoAtual = parseInt(dateAtual.getFullYear());
    let diaPassado = parseInt(datePassada.getDate()) + 1;
    let diaAtual = parseInt(dateAtual.getDate());
    
    let calc = (anoAtual - anoPassado)*365 + (mesAtual - mesPassado)*30 + diaAtual;
    output.innerHTML = `Você viveu aproximadamente ${calc} dias`;
}
function limpar6() {
    const limpa = document.querySelector("#data");
    const output = document.querySelector(".entre");
    limpa.value = '';
    output.innerHTML = "";
}

//Reajuste salarial

function enviar7() {
    const output = document.querySelector(".entre");
    let salario = String(document.querySelector("#salario").value);
    salario = parseFloat(salario.replace(",","."));
    let reajuste = String(document.querySelector("#reajuste").value);
    reajuste = parseFloat(reajuste.replace(",","."));
    let calc = reajuste/100;
    let aumento = (calc*salario) + salario;
    
    output.innerHTML = (`O salário final do seu funcionário é R$ ${(aumento.toFixed(2)).replace(".",",")}`);
}


function limpar7() {
    let salario = document.querySelector("#salario");
    let reajuste = document.querySelector("#reajuste");
    salario.value = "";
    reajuste.value = "";
    const output = document.querySelector(".entre");
    output.innerHTML = "";
}

// Area do retângulo

function enviar8() {
    const output = document.querySelector(".entre");
    let altura = String(document.querySelector("#altura").value);
    altura = parseFloat(altura.replace(",", "."));
    let base = String(document.querySelector("#base").value);
    base = parseFloat(base.replace(",", "."));
    let area = base*altura;
    area = area.toFixed(2);
    output.innerHTML = `A area do seu retângulo é ${area.replace(".", ",")}`;  
}


function limpar8() {
    let altura = document.querySelector("#altura");
    let base = document.querySelector("#base");
    altura.value = "";
    base.value = "";
    const output = document.querySelector(".entre");
    output.innerHTML = "";
}

//Comissão carro

function enviar9() {
    let adc;	
    let i = 'S';
    let calc;
    let cont = 0;
    let final = 0;
    let p = document.querySelector(".entre");
    //inicializo os contadores que precisarei 
    let sal = parseFloat(prompt("Digite o seu salário: "));
    //entrada de dados do salário pelo prompt
        while (i === 'S') {
            //enquanto minha variável for "S" meu contador não para
            adc = parseFloat(prompt("Qual o valor deste carro:  "));
            //entrada de dados
            calc = adc*0.05;
            //5 porcento do valor do carro
            final = final + calc;
            //armazenador contador
            cont = cont + 1;
            //incrementação contador de carros vendidos
            console.log(`Você recebeu uma comissão de R$ ${calc.toFixed(2)} ao vender este carro!`);
            //saída da dados da comissão imediata
            i = String(prompt("Mais um carro vendido [S/n]: ")).toUpperCase();
            //pede confirmação para se quer continuar
            //toUpperCase = quando o valor for "s" minusculo ele converte para maiúsculo e
            //continua o contador
        
        }
    p.innerHTML = (`Você vendeu ${cont} carros e ganhou um aumento de R$ ${(final.toFixed(2)).replace(".",",")} 
    totalizando uma receita de salário 
    final de R$ ${((sal + final).toFixed(2)).replace(".",",")}`);
    
    }


function limpar9() {
    const output = document.querySelector(".entre");
    output.innerHTML = "";
}

//idade em horas

function enviar10() {
    const output = document.querySelector(".entre");
    let dataNasc = document.querySelector("#data").value;
    let datePassada = new Date(dataNasc);
    let dateAtual = new Date();
    let mesAtual = (parseInt(dateAtual.getMonth())) + 1;
    let mesPassado = parseInt(datePassada.getMonth()) + 1;
    let anoPassado = parseInt(datePassada.getFullYear());
    let anoAtual = parseInt(dateAtual.getFullYear());
    let diaPassado = parseInt(datePassada.getDate()) + 1;
    let diaAtual = parseInt(dateAtual.getDate());
    let horas = parseInt(dateAtual.getHours());
    let minutos = parseInt(dateAtual.getMinutes());
    let segundos = parseInt(dateAtual.getSeconds());
    let calc = (anoAtual - anoPassado)*365 + (mesAtual - mesPassado)*30 + diaAtual;
    output.innerHTML = `Você viveu ${(calc*24)+horas} horas ${minutos} minutos e ${segundos} segundos `;
    console.log(segundos);
}
function limpar10() {
    const limpa = document.querySelector("#data");
    const output = document.querySelector(".entre");
    limpa.value = '';
    output.innerHTML = "";
}

//Par ou impar

function enviar11() {
    let number = String(document.querySelector("#number").value);
    number = parseFloat(number.replace(",","."));
    const output = document.querySelector(".entre");
    if (number % 2 == 0) {
        output.innerHTML = (`O número ${(number.toFixed(0)).replace(".",",")} é par`);
    }else{
        output.innerHTML = (`O número ${(number.toFixed(0)).replace(".",",")} é impar`);
    }
}
function limpar11() {
    const limpa = document.querySelector("#number");
    limpa.value = '';
    const output = document.querySelector(".entre");
    output.innerHTML = ('');   
}

//Horas de viagem

function enviar12() {
    const output = document.querySelector(".entre");
    let dias = parseInt(document.querySelector("#dias").value);

    let calc = dias*24;

    output.innerHTML = (`Você viajou aproximadamente ${calc} horas.`);
}
function limpar12() {
    const output = document.querySelector(".entre");
    const dias = document.querySelector("#dias");
    dias.value = ("");
    output.innerHTML = "";
}

//Consumo gasolina

function enviar13() {
    let gasolina = String(document.querySelector("#gasolina").value);
    gasolina = parseFloat(gasolina.replace(",","."));
    let litros = String(document.querySelector("#litros").value);
    litros = parseFloat(litros.replace(",","."));
    let distancia = String(document.querySelector("#distancia").value);
    distancia = parseFloat(distancia.replace(",","."));
    let calc = distancia/litros;
    let calc2 = calc*gasolina;
    const output = document.querySelector(".entre");
    output.innerHTML = (`Você gastará R$ ${(calc2.toFixed(2)).replace(".",",")} para percorrer ${distancia} km com seu carro.`);
    
}
function limpar13() {
    const output = document.querySelector(".entre");
    output.innerHTML = ("");
    let gasolina = document.querySelector("#gasolina");
    let litros = document.querySelector("#litros");
    let distancia = document.querySelector("#distancia");
    gasolina.value = "";
    litros.value = "";
    distancia.value = "";
}

//Sucessor e antecessor

function enviar14() {
    let number = parseInt(document.querySelector("#number").value);
    let output = document.querySelector(".entre");
    output.innerHTML = (`O antecessor de ${number} é ${number-1} e o sucessor é ${number+1}`);
}
function limpar14() {
    const limpa = document.querySelector("#number");
    limpa.value = '';
    const output = document.querySelector(".entre");
    output.innerHTML = ('');   
}

//cache garçon

function enviar15() {
    const output = document.querySelector(".entre");
    let conta = String(document.querySelector("#conta").value);
    conta = parseFloat(conta.replace(",","."));
    let cache = String(document.querySelector("#cache").value);
    cache = parseFloat(cache.replace(",","."));
    let incremento = cache/100;
    let final = (conta*incremento) + conta;

    output.innerHTML = `A valor final da conta é R$ ${(final.toFixed(2)).replace(".",",")}`;  
}


function limpar15() {
    const output = document.querySelector(".entre");
    const conta = document.querySelector("#conta");
    const cache = document.querySelector("#cache");
    conta.value = "";
    cache.value = "";
    output.innerHTML = "";
}
