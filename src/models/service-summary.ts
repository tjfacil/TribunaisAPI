import { model, Schema } from 'mongoose';

export interface IServiceSummary {
  _id?: string;
  comarcaNome: string;
  codComarca: string;
  codTribunal: string;
  data: { codInterno: string; serventia: string }[];
}

const schema = new Schema<IServiceSummary>(
  {
    comarcaNome: { type: String, required: true },
    codComarca: { type: String, required: true },
    codTribunal: { type: String, required: true },
    data: {
      codInterno: { type: String, required: true },
      serventia: { type: String, required: true },
    },
  },

  { collection: 'servicesSummary' }
);

export const ServiceSummary = model<IServiceSummary>('ServiceSummary', schema);
