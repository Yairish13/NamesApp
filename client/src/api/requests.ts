import axios, { AxiosResponse } from "axios";
import { actualNameObjectType } from "../types/types";

const baseUrl: string = "http://localhost:3000";



export const getNameInfo = async (name: string):Promise<actualNameObjectType> => {
  try {
    const {data} = await axios.get(`${baseUrl}/${name}`);
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
