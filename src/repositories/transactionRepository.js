import TransactionSchema from '../schemas/Transaction.js'

async function create (data) {
    return TransactionSchema.create(data);
}

async function findAllByUser(id) {
    return await TransactionSchema.find({ userId: id })
}

async function PatchTransaction(userId, updateData) {    
    return await TransactionSchema.findOneAndUpdate(
        { userId: userId },
        updateData,
        { new: true }
    );
}

async function DeleteTransaction(transactionId) {
    return await TransactionSchema.deleteOne({ _id: transactionId });
}
export default { create, findAllByUser, PatchTransaction, DeleteTransaction };