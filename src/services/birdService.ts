import axios from "axios";
import  {Bird} from "../types/BirdTypes"

const API_URL = "http://localhost:4000/api/"


//Get All Birds
export const fetchBirds=async() :Promise<Bird[]>=>
{
    const response = await axios.get(API_URL);
    return response.data;
}

//get Bird by Id
export const getBirdById=async(id:string) :Promise<Bird[]>=>
    {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    }

//Create A Bird
export const createBird=async(bird:Bird) :Promise<Bird>=>
    {
        const response = await axios.post(API_URL,bird);
        return response.data;
    }

    //Update A bird
    export const UpdateBirds=async(id:string, bird:Omit<Bird, 'id'>):Promise<Bird>=>
        {
            const response = await axios.put(`${API_URL}/${id}`, bird);
            return response.data;
        }

        //Delete A Bird
        export const DeleteBirds=async(id:string) :Promise<void>=>
            {
                 await axios.delete(`${API_URL}/${id}`);
            }