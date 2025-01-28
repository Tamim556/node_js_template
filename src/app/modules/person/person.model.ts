import mongoose from "mongoose";
import { TPerson } from "./person.interface";


const PersonSchema = new mongoose.Schema<TPerson>(

    {


        name:{
            type:String , required:[true , 'name is required'] , unique:true 
        },

        phone:{
            type:String
        }



    }
)

export const Person=mongoose.model<TPerson>('person' , PersonSchema)