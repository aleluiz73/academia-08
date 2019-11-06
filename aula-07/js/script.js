let login = "batatinha"
let senha = "frita"
let loginUser;
let senhaUser;
let tentativa = 1;



while (tentativa < 4 ) {
loginUser = prompt("digita ai seu login");
senhaUser = prompt("bota sua senha");
        if(loginUser === login && senhaUser === senha ){
        alert("aeeee to logo");
    }else{
        alert("errrouuuu");
        tentativa = tentativa + 1;
    }
}