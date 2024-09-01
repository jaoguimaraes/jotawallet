import transactionService from "../services/transactionService.js";

async function create(req, res) {
    const body = req.body;
    const { _id: id } = res.locals.user;

    try {
        const transaction = await transactionService.create(body, id);
        return res.status(201).send(transaction);
    } catch (err) {
        return res.status(409).send(err.message);
    }
}

async function findAllByUser(req, res) {
    const {_id: id} = res.locals.user;

    try {
        const transactions = await transactionService.findAllByUser(id)
        return res.send(transactions);
    } catch {
        return res.status(500).send(err.message);
    }
}

async function PatchTransaction(req, res) {
    const {_id: userId } = res.locals.user;
    const updateData = req.body;
    
    try {        
        const transaction = await transactionService.PatchTransaction(userId, updateData);
        return res.send(transaction);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

async function DeleteTransaction(req, res) {
    const { id: transactionId } = req.params;

    try {
        const result = await transactionService.DeleteTransaction(transactionId);
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Transaction not found" });
        }
        return res.status(200).send({ message: "Transaction deleted successfully" });
    } catch {
        return res.status(500).send({ message: err.message });
    }
}
export default { create, findAllByUser, PatchTransaction, DeleteTransaction}