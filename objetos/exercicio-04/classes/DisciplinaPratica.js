import Disciplina from "./disciplina";

class DisciplinaPratica extends Disciplina {

    constructor(cargaHorariaPratica, codigo, nome, cargaHorariaGeral) {
        super(codigo, nome, cargaHorariaGeral);
        this.cargaHorariaPratica = cargaHorariaPratica;
    }

    toString() {
        console.log("Codigo: " + this.codigo);
        console.log("Nome: " + this.nome);
        console.log("Carga Horaria Geral: " + this.cagaHorariaGeral);
        console.log("Carga Horaria Prática: " + this.cargaHorariaPratica);
    }

}

export default DisciplinaPratica;