export const expectedCourtById = {
  _id: '6139eb623084f8c72b1bbff4',
  abbr: 'TJRJ',
  code: '819',
  firstElectronicSearchPage:
    'http://www4.tjrj.jus.br/ConsultaUnificada/consulta.do#tabs-numero-indice0',
  firstPhysicalSearchPage:
    'http://www4.tjrj.jus.br/ConsultaUnificada/consulta.do#tabs-numero-indice0',
  id: '22',
  mainPage: 'http://www.tjrj.jus.br',
  name: 'Tribunal de Justiça do Rio de Janeiro',
  secondElectronicSearchPage:
    'http://www4.tjrj.jus.br/ConsultaUnificada/consulta.do#tabs-numero-indice0',
  secondPhysicalSearchPage:
    'http://www4.tjrj.jus.br/ConsultaUnificada/consulta.do#tabs-numero-indice0',
};

export const expectedCourtByCode = [
  {
    _id: '6139eb623084f8c72b1bbfee',
    abbr: 'TJMG',
    code: '813',
    firstElectronicSearchPage:
      'https://www4.tjmg.jus.br/juridico/sf/proc_massiva2.jsp',
    firstPhysicalSearchPage: 'https://www4.tjmg.jus.br/juridico/sf/index.jsp',
    id: '16',
    mainPage: 'https://www.tjmg.jus.br/portal-tjmg',
    name: 'Tribunal de Justiça de Minas Gerais',
    secondElectronicSearchPage:
      'https://pjerecursal.tjmg.jus.br/pje/ConsultaPublica/listView.seam',
    secondPhysicalSearchPage:
      'https://pje.tjmg.jus.br/pje/ConsultaPublica/listView.seam',
  },
];

export const expectedCourtByAbbr = [
  {
    _id: '6139eb623084f8c72b1bc00e',
    abbr: 'JFSP',
    code: '40361',
    firstElectronicSearchPage:
      'http://web.trf3.jus.br/consultas/Internet/ConsultaProcessual',
    firstPhysicalSearchPage: 'http://www.jfsp.jus.br/foruns-federais',
    id: '48',
    mainPage: 'http://www.jfsp.jus.br',
    name: 'Justiça Federal de São Paulo',
    secondElectronicSearchPage:
      'https://pje2g.trf3.jus.br/pje/ConsultaPublica/listView.seam',
    secondPhysicalSearchPage:
      'https://eproc.jfes.jus.br/eproc/externo_controlador.php?acao=processo_consulta_publica',
  },
];

export const expectedServiceByInternal = {
  service: [
    {
      _id: '62bf07554a4e4fa8b65a87df',
      serventia:
        '1 VARA DA INFANCIA, DA JUVENTUDE E DO IDOSO - COMARCA DA CAPITAL',
      endereco: 'PRACA ONZE DE JUNHO',
      numero: '403',
      complemento: 'CIDADE NOVA',
      bairro: 'CASTELO',
      cidade: 'RIO DE JANEIRO',
      cep: '20210-010',
      referencia:
        'TELEFONE (21) 31334015 APOS EXPEDIENTE FORENSE,FINAIS DE SEMANA E FERIADOS.',
      telefoneSecretaria: '(21) 2503-6317',
      outros: '',
      email: 'cartorioviji@tjrj.jus.br',
      emailGabinete: 'gab.cap01viji@tjrj.jus.br',
      balcaoVirtual:
        'https://tjrj-apps-balcao-virtual.azurefd.net/meeting/CAPITAL1VARAINFJUVIDO',
      agendamentoMagistrado:
        'https://outlook.office365.com/owa/calendar/GabineteCapital1VaraInfJuvIdoso@tjrj.jus.br/bookings/',
      tipoServentia: 'JUDICIAL',
      tipoProcessamento: 'HIBRIDO',
      atribuicoes: 'DA INFANCIA E DA JUVENTUDE E IDOSO',
      juizTitular: 'Vago',
      comarcaNome: 'Comarca da Capital',
      codComarca: '2001',
      codInterno: '2001216',
      codTribunal: '819',
    },
  ],
};
