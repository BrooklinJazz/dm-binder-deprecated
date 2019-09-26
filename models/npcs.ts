import { model, Schema } from 'mongoose';
import { INpc } from './types';

const npcSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

export default model<INpc>('NPC', npcSchema);
