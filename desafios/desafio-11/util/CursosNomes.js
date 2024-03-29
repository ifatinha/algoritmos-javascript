const cursosNames = ["Ambiente, Saúde e Segurança", "Apoio Educacional",
    "Controle e Processos Industriais", "Gestão e Negócios", "Hospitalidade e Lazer",
    "Informação e Comunicação", "Infraestrutura", "Militar", "Produção Alimentícia",
    "Produção Cultural e Design", "Produção Industrial", "Recursos Naturais",
    "Agente Comunitário de Saúde", "Análises Clínicas", "Biotecnologia", "Citopatologia",
    "Controle Ambiental", "Enfermagem", "Equipamentos Biomédicos", "Estética", "Farmácia",
    "Gerência em Saúde", "Hemoterapia", "Saúde Bucal", "Imagem Pessoal",
    "Imobilizações Ortopédicas", "Massoterapia", "Meio Ambiente", "Meteorologia",
    "Nutrição e Dietética", "Óptica", "Órteses e Próteses", "Podologia",
    "Prótese Dentária", "Radiologia", "Reabilitação de Dependentes Químicos",
    "Reciclagem", "Registros e Informações em Saúde", "Segurança do Trabalho",
    "Vigilância em Saúde", "Cursos Técnicos em Apoio Educacional", "Alimentação Escolar",
    "Biblioteconomia", "Infraestrutura Escolar", "Multimeios Didáticos",
    "Orientação Comunitária", "Secretaria Escolar", "Análises Químicas",
    "Automação Industrial", "Eletroeletrônica", "Eletromecânica", "Eletrônica",
    "Eletrotécnica", "Manutenção Automotiva", "Máquinas Navais", "Mecânica",
    "Mecatrônica", "Metalurgia", "Petroquímica", "Química", "Refrigeração e Climatização",
    "Sistemas a Gás", "Cursos Técnicos em Gestão e Negócios", "Administração", "Comércio",
    "Comércio Exterior", "Contabilidade", "Cooperativismo", "Finanças", "Logística", "Marketing",
    "Qualidade", "Recursos Humanos", "Secretariado", "Seguros", "Serviços de Condomínio",
    "Serviços Públicos", "Transações Imobiliárias", "Vendas", "Agenciamento de Viagem",
    "Cozinha", "Eventos", "Guia de Turismo", "Hospedagem", "Lazer", "Serviços de Restaurante e Bar",
    "Cursos Técnicos em Informação e Comunicação", "Informática", "Informática para Internet",
    "Manutenção e Suporte em Informática", "Programação de Jogos Digitais",
    "Redes de Computadores", "Sistemas de Comutação", "Sistemas de Transmissão",
    "Telecomunicações", "Cursos Técnicos em Infraestrutura", "Técnico Aeroportuário",
    "Agrimensura", "Carpintaria", "Desenho de Construção Civil", "Edificações",
    "Estradas", "Geodésia e Cartografia", "Geoprocessamento", "Hidrologia",
    "Manutenção de Aeronaves", "Portos", "Saneamento", "Trânsito", "Transporte Aquaviário",
    "Transporte de Cargas", "Transporte Dutoviário", "Transporte Ferroviário",
    "Transporte Rodoviário", "Comunicações Aeronáuticas", "Controle de Tráfego Aéreo",
    "Desenho Militar", "Eletricidade e Instrumentos Aeronáuticos", "Equipamentos de Voo",
    "Estrutura e Pintura de Aeronaves", "Fotointeligência", "Guarda e Segurança", "Hidrografia",
    "Informações Aeronáuticas", "Manobras e Equipamentos de Convés", "Material Bélico", "Mergulho",
    "Operação de Radar", "Operação de Sonar", "Operações de Engenharia Militar",
    "Preparação Física e Desportiva Militar", "Sensores de Aviação", "Sinais Navais",
    "Sinalização Náutica", "Suprimento", "Alimentos", "Agroindústria", "Apicultura",
    "Cervejaria", "Confeitaria", "Panificação", "Processamento de Pescado", "Viticultura e Enologia",
    "Arte Circense", "Arte Dramática", "Artes Visuais", "Artesanato", "Canto",
    "Composição e Arranjo", "Comunicação Visual", "Conservação e Restauro", "Dança",
    "Design de Calçados", "Design de Embalagens", "Design de Interiores", "Design de Joias",
    "Design de Móveis", "Documentação Musical", "Fabricação de Instrumentos Musicais",
    "Modelagem do Vestuário", "Multimídia", "Paisagismo", "Processos Fotográficos",
    "Produção de Áudio e Vídeo", "Produção de Moda", "Publicidade", "Rádio e Televisão",
    "Regência", "Cursos Técnicos em Produção Industrial", "Açúcar e Álcool", "Biocombustíveis",
    "Calçados", "Celulose e Papel", "Cerâmica", "Construção Naval", "Curtimento",
    "Fabricação Mecânica", "Impressão Gráfica", "Impressão Offset", "Joalheria", "Móveis",
    "Petróleo e Gás", "Plásticos", "Pré-Impressão Gráfica", "Tecelagem", "Vestuário",
    "Agricultura", "Agroecologia", "Agronegócio", "Agropecuária", "Aquicultura", "Cafeicultura",
    "Equipamentos Pesqueiros", "Florestas", "Fruticultura", "Geologia", "Mineração", "Pesca",
    "Recursos Minerais", "Recursos Pesqueiros", "Zootecnia", "Agronegócio", "Automação Industrial",
    "Comércio Exterior", "Comunicação Institucional", "Design de Produto", "Eletrônica Industrial",
    "Eletrotécnica Industrial", "Fabricação Mecânica", "Fotografia", "Gestão Ambiental",
    "Gestão Comercial", "Gestão da Produção Industrial", "Gestão da Qualidade",
    "Gestão de Cooperativas", "Gestão de Recursos Humanos", "Gestão Financeira", "Gestão Hospitalar",
    "Gestão Pública", "Logística", "Manutenção de Aeronaves", "Manutenção Industrial", "Marketing",
    "Mecânica de Precisão", "Mecatrônica Industrial", "Processos Ambientais",
    "Processos Metalúrgicos", "Processos Escolares", "Processos Químicos", "Produção de Grãos",
    "Produção Têxtil", "Radiologia", "Saneamento Ambiental", "Sistemas Biomédicos", "Sistemas Elétricos", "Segurança no Trabalho"]

export default function randomCurseName() {
    return cursosNames[Math.floor(Math.random() * 235) + 0];
}