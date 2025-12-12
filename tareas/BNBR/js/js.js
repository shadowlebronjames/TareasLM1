

function muerte(){
    const tave = document.getElementById("tavle");
    for(let i=0; i<=10; i++){
        let pepe = tave.children[i];
        for(let k=0; k<=10; k++){
            pepe.children[k].addEventListener("click", crear);
        }
    }
}

function crear(){
    window.close();
}