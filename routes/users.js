const usersRouter = require("express").Router();
const {
    findAllUsers,
    findUserById,
    updateUser,
    createUser,
    deleteUser,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    hashPassword,
 
} = require("../middlewares/users");
const {
    sendAllUsers,
    sendUserById,
    sendUserUpdated,
    sendUserCreated,
    sendUserDeleted,
    sendMe
} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth.js");

usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
