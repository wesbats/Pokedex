function alteraTema(){
    let atual = document.querySelector("body").className
    if (atual == "dark"){
        document.querySelector("body").classList.remove("dark");
        document.getElementById("tema").src="imagens/sun.png";
    }else{
        document.querySelector("body").classList.add("dark");
        document.getElementById("tema").src="imagens/moon.png";
    }
}