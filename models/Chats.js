import mongoose from "mongoose";

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    receptor: {
        type: String,
        required: true
    },
    emisor: {
        type: String,
        required: true
    },
    mensajes: []
});

const Chats = mongoose.model("Chats", chatSchema);
export default Chats;