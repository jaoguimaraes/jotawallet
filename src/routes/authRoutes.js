import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import { CreateUser } from "../schemas/validation/CreateUser.js";
import { AuthUser } from "../schemas/validation/AuthUser.js";

const authRouter = Router();

authRouter.post(
    "/signup",
    schemaValidationMiddleware(CreateUser),
    authController.signup
);
authRouter.post(
    "/signin",
    schemaValidationMiddleware(AuthUser),
    authController.signin
);
authRouter.get("/me", authMiddleware, authController.userLogged);

export default authRouter;