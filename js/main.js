/*
Treinamento Digital One
*/
console.log("Em testes!")

function clicaBotao(){
    document.getElementById("agradece").innerHTML = "<b>Obrigado por clicar</b>";
    //innerHTML injeta o atribuido na página (HTML)
    //console.log (document.getElementById("agradece"));
    //alert("Clicou!");
}

function redirecionar(){
    window.open("http://yahoo.com.br"); //Abre em outra janela
//    window.location.href = "https://empregamais.economia.gov.br/"; //Abre na mesma

}

function passeaqui(elemento){
//    document.getElementById("passeMouse").innerHTML = "Trocou texto!"
    elemento.innerHTML = "Trocou texto!"
//    console.log("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "<b>Passe o mouse aqui</b>"
//    document.getElementById("passeMouse").innerHTML = "<b>Passe o mouse aqui</b>"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}