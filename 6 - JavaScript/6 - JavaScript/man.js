//alert("meu primeiro js")

/*var nome = "Paulo Deyvid";
var idade = 26;
var idade2 = 38;
var frase = "Japão e o melhor time do mundo"

//alert(nome + " term " + idade + " anos "); // CONCATENAÇÃO 
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("japão e pior time do mundo"));
console.log(frase.toLocaleLowerCase());
console.log(frase.toLowerCase());
alert(frase.replace("japão e pior time do mundo"))


var nome = "Paulo Deyvid";
var n1 = 26;
var n2 = 38;
var n3 = "Japão e o melhor time do mundo"

//alert(nome + " term " + idade + " anos "); // CONCATENAÇÃO 
//alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);*/

/*var lista = ["Maça", "Pera", "Laranja"];
lista.push("uva") // para colocar no array
lista.pop("Pera") // para titar do array
console.log(lista.length) //length ver o tamanho do array
console.log(lista.reverse()) //reverse tras os alementos ao contrario
console.log(lista.toString()[0]) // tras tudo como string
console.log(lista.join(' - ')) // tras os espaços de arcordo com sua vontade
alert(lista)*/

//diocionario
/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}]
console.log(frutas);
alert(frutas[1].nome)*/

/*var idade = prompt("Qual idade voce tem?")
//var idade = 18;
if(idade > 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
};*/

/*var count;
for (count = 1; count <= 5; count++) {
    alert(count);
}*/

/*var d = new Date();
alert(d.getMonth());
alert(d.getHours());
alert(d.getMinutes());*/

/*function soma(n1, n2){
    return n1 + n2;
}*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("vai japão", "japão", "Brasil"))*/

/*function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade?");
console.log(validaIdade(idade));

//alert(soma(5, 10))*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //innerHTML coloca o que está entre aspas dentro da tag
    console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar!");
} 

function redirecionar(){
    window.open("https://www.youtube.com"); //Abre outra aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}