import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

export const registerAPI=async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/users/`,reqBody)
} 

export const loginAPI=async (loginmailid,loginpassword,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/login?email=${loginmailid}&password=${loginpassword}`,"",reqHeader)
} 

export const markedSeatAPI=async (reqBody,reqHeader)=>{
    debugger
    return await commonAPI("POST",`${SERVER_URL}/book-seats/`,reqBody,reqHeader)
} 

export const getSeatAvailabilityAPI=async (moviename,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getSeatAvailbility?moviename=${moviename}`,"",reqHeader)
} 

