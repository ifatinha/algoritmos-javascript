const tiposVenda = ["A Prazo", "À Vista"];
let contador = 10;

while(contador >= 0){
    let cod = tiposVenda[Math.floor((Math.random() * 2) + 0)];
    console.log(cod);    
    contador--;
}