import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { PersonServices } from "./person.service";


const createPerson = catchAsync(async(req , res)=>{

    const result =await PersonServices.createPersonIntoDb(req.body);

    sendResponse(res,{
        status : 200,
        success : true,
        message :"data get successfully",
        data:result
    })

})

const getPerson = catchAsync(async(req , res)=>{

    const result =await PersonServices.getPersonFromDb();


    sendResponse(res,{
        status : 200,
        success : true,
        message :"data get successfully",
        data:result
    })



})

const singlePerson = catchAsync(async(req , res)=>{

    const id = req.params.id
    const result =await PersonServices.singlePerson(id as string);


    

console.log(id,result)
    sendResponse(res,{
        status : 200,
        success : true,
        message :"data get successfully",
        data: result || "data not found",
    })



})


export const PersonController = {createPerson , getPerson ,singlePerson};