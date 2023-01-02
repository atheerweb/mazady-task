import {SubCategory } from "~/types/SubCategory"




export interface MainCategory {
 
        id: number;
        name: string;
        description: null;
        image:string;
        slug: string;
        children: SubCategory[];
}