import { model, Schema } from 'mongoose';

export interface IServiceSummary {
  _id?: string;
  code: string;
  name: string;
  data: { id: string; name: string }[];
  court_id: string;
}

const schema = new Schema<IServiceSummary>(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
    data: {
      id: { type: String, required: true },
      name: { type: String, required: true },
    },
    court_id: { type: String, required: true },
  },

  { collection: 'servicesSummary' }
);

export const ServiceSummary = model<IServiceSummary>('ServiceSummary', schema);
