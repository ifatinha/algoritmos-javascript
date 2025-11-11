function gerarNumeroNotaFiscal() {
  let uf = "PB";
  let data = new Date().getFullYear() + "" + new Date().getMonth();
  let cnpj = "77.502.417/0001-87";
  let mod = "02";
  let serie = "006";
  let nfs = Math.floor(Math.random() * 899999999 + 100000000);
  let formaEmissao = "9";
  let codNumero = Math.floor(Math.random() * 89999999 + 10000000);
  let dv = Math.floor(Math.random() * 9 + 1);

  let numeroNotaFiscal =
    uf +
    "." +
    data +
    "." +
    cnpj +
    "." +
    mod +
    "." +
    serie +
    "." +
    nfs +
    "." +
    formaEmissao +
    "." +
    codNumero +
    "." +
    dv;

  return numeroNotaFiscal;
}

export default { gerarNumeroNotaFiscal };
