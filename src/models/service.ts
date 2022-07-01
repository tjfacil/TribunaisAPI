import { model, Schema } from 'mongoose';

export interface IService {
  _id?: string;
  id: string;
  court_id: string;
  comarca_id: string;
  comarca_nome: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
  referencia?: string;
  telefone_secretaria?: string;
  outros?: string;
  telefone?: string;
  email?: string;
  email_gabinete?: string;
  balcao_virtual?: string;
  agendamento_magistrado?: string;
  tipo_serventia?: string;
  tipo_processamento?: string;
  atribuicoes?: string;
  juiz_titular?: string;
  juiz_exercicio?: string;
  horario_funcionamento?: string;
  fax?: string;
}

const schema = new Schema<IService>(
  {
    id: { type: String, required: true },
    court_id: { type: String, required: true },
    comarca_id: { type: String, required: true },
    comarca_nome: { type: String, required: true },
    endereco: { type: String, required: false },
    numero: { type: String, required: false },
    complemento: { type: String, required: false },
    bairro: { type: String, required: false },
    cidade: { type: String, required: false },
    cep: { type: String, required: false },
    referencia: { type: String, required: false },
    telefone_secretaria: { type: String, required: false },
    outros: { type: String, required: false },
    telefone: { type: String, required: false },
    email: { type: String, required: false },
    email_gabinete: { type: String, required: false },
    balcao_virtual: { type: String, required: false },
    agendamento_magistrado: { type: String, required: false },
    tipo_serventia: { type: String, required: false },
    tipo_processamento: { type: String, required: false },
    atribuicoes: { type: String, required: false },
    juiz_titular: { type: String, required: false },
    juiz_exercicio: { type: String, required: false },
    horario_funcionamento: { type: String, required: false },
    fax: { type: String, required: false },
  },
  { collection: 'services' }
);

export const Service = model<IService>('Service', schema);
