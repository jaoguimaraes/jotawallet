import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware)

transactionRouter.post(
    "/transactions",
    schemaValidationMiddleware(CreateTransaction),
    transactionController.create
);

transactionRouter.get(
    '/transactions',
    transactionController.findAllByUser
);

transactionRouter.patch(
    '/transactions/:id',
    transactionController.PatchTransaction
);

transactionRouter.delete(
    '/transactions/:id',
    transactionController.DeleteTransaction
)

export default transactionRouter;