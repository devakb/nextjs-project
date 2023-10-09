import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import { PageNotFoundError } from "next/dist/shared/lib/utils";


const getSingleData = (id: number) : Array<any> => {
  
  let fs_data = fs.readFileSync("./app/api/blogs/data.json", 'utf-8');

  let data : Array<any> = JSON.parse(fs_data); // all data

  data = data.reduce((acc, curItem) => {

      if(curItem.id == id){
          acc.push(curItem);
      };

      return acc;

  }, []);


  return data[0] ?? [];


}


export const GET = async (request: NextRequest, { params }: { params: { id: string|number } }) => {


    let id = Number(params.id);
    let data : Array<any> =  [];

    if(!isNaN(id)){

      data = getSingleData(id);
      
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      blog: data,
    })


};
