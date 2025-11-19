import Disciplina from "./Disciplina.js";

class DisciplinaPratica extends Disciplina {
  constructor(cargaHorariaPratica, codigo, nome, cargaHorariaGeral) {
    super(codigo, nome, cargaHorariaGeral);
    this.cargaHorariaPratica = cargaHorariaPratica;
  }

  toString() {
    console.log(
      this.codigo +
        ". " +
        this.nome +
        " (" +
        this.cagaHorariaGeral +
        " + " +
        this.cargaHorariaPratica +
        ")."
    );
  }
}

export default DisciplinaPratica;
