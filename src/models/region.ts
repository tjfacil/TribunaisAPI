import { model, Schema } from 'mongoose';

export interface IRegion {
  _id?: string;
  codTribunal: string;
  comarcas: { codComarca: string; nome: string }[];
}

const schema = new Schema<IRegion>(
  {
    codTribunal: { type: String, required: true },
    comarcas: {
      codComarca: { type: String, required: true },
      nome: { type: String, required: true },
    },
  },
  { collection: 'regions' }
);

export const Region = model<IRegion>('Region', schema);
