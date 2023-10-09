import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import { PageNotFoundError } from "next/dist/shared/lib/utils";


const getSingleData = async (id: number) => {
  
  let fs_data : Array<any> = await fetch("https://devakb.github.io/json-server/db.json").then(res => res.json()).then(res => res.blogs ?? []);

  let data : Array<any> = fs_data; // all data

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

      data = await getSingleData(id);
      
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      blog: data,
    })


};
