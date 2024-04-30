// models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface UserInterface extends Document {
    name: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const UserModel = mongoose.model<UserInterface>('User', UserSchema);

export default UserModel;
