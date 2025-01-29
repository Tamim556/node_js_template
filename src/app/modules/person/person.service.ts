import { TPerson } from "./person.interface";
import { Person } from "./person.model";


const createPersonIntoDb = async(payload:TPerson)=>{


    const result = await Person.create(payload)

    return result;
}



const getPersonFromDb = async()=>{


    const result = await Person.find();

    return result;
}


const singlePerson = async (input: string) => {
    const result = await Person.findOne({
        $or: [{ name: input }, { phone: input }]
    });

    return result;
};




export const PersonServices = {createPersonIntoDb ,getPersonFromDb ,singlePerson}