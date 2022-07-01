import { model, Schema } from 'mongoose';

export interface IService {
  _id?: string;
  codInterno: string;
  codTribunal: string;
  codComarca: string;
  comarcaNome: string;
  serventia: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
  referencia?: string;
  telefoneSecretaria?: string;
  outros?: string;
  telefone?: string;
  email?: string;
  emailGabinete?: string;
  balcaoVirtual?: string;
  agendamentoMagistrado?: string;
  tipoServentia?: string;
  tipoProcessamento?: string;
  atribuicoes?: string;
  juizTitular?: string;
  juizExercicio?: string;
  horarioFuncionamento?: string;
  fax?: string;
}

const schema = new Schema<IService>(
  {
    codInterno: { type: String, required: true },
    codTribunal: { type: String, required: true },
    codComarca: { type: String, required: true },
    comarcaNome: { type: String, required: true },
    serventia: { type: String, required: true },
    endereco: { type: String, required: false },
    numero: { type: String, required: false },
    complemento: { type: String, required: false },
    bairro: { type: String, required: false },
    cidade: { type: String, required: false },
    cep: { type: String, required: false },
    referencia: { type: String, required: false },
    telefoneSecretaria: { type: String, required: false },
    outros: { type: String, required: false },
    telefone: { type: String, required: false },
    email: { type: String, required: false },
    emailGabinete: { type: String, required: false },
    balcaoVirtual: { type: String, required: false },
    agendamentoMagistrado: { type: String, required: false },
    tipoServentia: { type: String, required: false },
    tipoProcessamento: { type: String, required: false },
    atribuicoes: { type: String, required: false },
    juizTitular: { type: String, required: false },
    juizExercicio: { type: String, required: false },
    horarioFuncionamento: { type: String, required: false },
    fax: { type: String, required: false },
  },
  { collection: 'services' }
);

export const Service = model<IService>('Service', schema);
