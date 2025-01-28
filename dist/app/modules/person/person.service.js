"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonServices = void 0;
const person_model_1 = require("./person.model");
const createPersonIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield person_model_1.Person.create(payload);
    return result;
});
const getPersonFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield person_model_1.Person.find();
    return result;
});
exports.PersonServices = { createPersonIntoDb, getPersonFromDb };
