import mongoose from "mongoose";

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    participantes: [],
    mensajes: []
});

const Chats = mongoose.model("Chats", chatSchema);
export default Chats;