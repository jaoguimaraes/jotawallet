import { model, Schema } from "mongoose";

const TransactionSchema = new Schema({
    value: { type: Number, require: true },
    description: { type: String, require: true },
    type: { type: String, require: true },
    userId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
    created_at: { type: Date, default: Date.now() },
});

export default model("transactions", TransactionSchema);