"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personRoutes = void 0;
const express_1 = __importDefault(require("express"));
const person_controller_1 = require("./person.controller");
const router = express_1.default.Router();
router.post('/person-create', person_controller_1.PersonController.createPerson);
router.get('/', person_controller_1.PersonController.getPerson);
exports.personRoutes = router;
