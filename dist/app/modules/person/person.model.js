"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PersonSchema = new mongoose_1.default.Schema({
    name: {
        type: String, required: [true, 'name is required'], unique: true
    },
    phone: {
        type: String
    }
});
exports.Person = mongoose_1.default.model('person', PersonSchema);
