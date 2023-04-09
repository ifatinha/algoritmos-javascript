class Carro {

    constructor(placa, anoFabricacao) {
        this.placa = placa;
        this.anoFabricacao = anoFabricacao;
        this.totalImposto = 500;
    }

    calcularImposto() {
        let imposto = 500;
        let anoAtual = new Date().getFullYear();

        //console.log("Ano " + this.anoFabricacao + " - Imposto ----> R$" + imposto.toFixed(2));

        for (let i = this.anoFabricacao + 1; i <= anoAtual; i++) {
            
            if (i < (this.anoFabricacao + 10)) {
                if (imposto > 100) {
                    imposto -= 100;
                } else {
                    imposto = 100;
                }
            } else {
                imposto = 0;
            }

            this.totalImposto += imposto;
            //console.log("Ano " + i + " - Imposto ----> R$" + imposto.toFixed(2));
        }
    }

    toString() {
        console.log("Placa: " + this.placa);
        console.log("Ano de Fabricação: " + this.anoFabricacao);
        console.log("Total Impostos: R$" + this.totalImposto.toFixed(2)+"\n");
    }
}

export default Carro;