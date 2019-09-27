import { model, Schema } from 'mongoose';
import { IUser } from './types';
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  npcs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'NPC'
    }
  ]
});

export default model<IUser>('User', userSchema);
