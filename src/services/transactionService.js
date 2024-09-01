import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
    if(!id) throw new Error("User ID is required");
    return await transactionRepository.create({...body, userId: id });
}

async function findAllByUser(id) {
    if(!id) throw new Error("User ID is required");
    return await transactionRepository.findAllByUser(id);  
}

async function PatchTransaction(userId, updateData) {
    if (!userId) throw new Error("User ID is required");
    return await transactionRepository.PatchTransaction(userId, updateData)
}

async function DeleteTransaction (transactionId) {
    if (!transactionId) throw new Error("User ID is required");
    return await transactionRepository.DeleteTransaction(transactionId);
}

export default { create, findAllByUser, PatchTransaction, DeleteTransaction };