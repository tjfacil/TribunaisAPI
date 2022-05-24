import { model, Schema } from 'mongoose';

export interface ICourt {
  _id?: string;
  id: string;
  code: string;
  abbr: string;
  name: string;
  mainPage: string;
  firstPhysicalSearchPage: string;
  firstElectronicSearchPage: string;
  secondPhysicalSearchPage: string;
  secondElectronicSearchPage: string;
}

const schema = new Schema<ICourt>(
  {
    id: { type: String, required: true },
    code: { type: String, required: true },
    abbr: { type: String, required: true },
    name: { type: String, required: true },
    mainPage: { type: String, required: true },
    firstPhysicalSearchPage: { type: String, required: true },
    firstElectronicSearchPage: { type: String, required: true },
    secondElectronicSearchPage: { type: String, required: true },
    secondPhysicalSearchPage: { type: String, required: true },
  },
  { collection: 'courts' }
);

export const Court = model<ICourt>('Court', schema);
