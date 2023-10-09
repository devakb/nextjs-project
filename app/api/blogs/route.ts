import { NextRequest, NextResponse } from "next/server";


const categories = [
  "Technology",
  "Travel",
  "Food and Cooking",
  "Health and Fitness",
  "Fashion",
  "Business and Finance",
  "Sports",
  "Entertainment",
  "Home and Garden",
  "Science",
  "Books and Literature",
  "Music",
  "Art and Design",
  "Education",
  "Personal Development",
  "Pets",
  "Automotive",
  "Environmental",
  "Parenting",
  "Hobbies and Crafts"
];

const getAllData = async (limit: number, offset: number, perPage: number, request: NextRequest) => {
  
  const { searchParams } = request.nextUrl;

  let fs_data : Array<any> =  await fetch("https://devakb.github.io/json-server/db.json").then(res => res.json()).then(res => res.blogs ?? []);

  let data : Array<any> = fs_data; // all data

  let categories : Array<String> = [];

  if(searchParams.has('categories') && searchParams.get('categories') !== ""){

    categories = searchParams.get('categories')?.split(",") ?? [];

    categories = categories.map((item) => item.toLowerCase());

    data = data.reduce((acc, curItem) => {

        if(categories.includes(curItem.category.toLowerCase())){
            acc.push(curItem);
        };

        return acc;

    }, []);
   
  }



  // building data

  let totalData = data.length;

  let pageData = [];

  for(let i = offset; i <= limit; i++){
    if(data[i] === undefined){
      break;
    }

    pageData.push(data[i]);
  }

  return {
    totalRecords: data.length,
    total: pageData.length,
    totalPages: Math.round(totalData / perPage),
    blogs: pageData,
  };
}


export const GET = async (request: NextRequest) => {

    const { searchParams } = request.nextUrl;

    let page = Number(searchParams.get('page') ?? 1);

    if(isNaN(page)){
      page = 1;
    }

    let perPage = 20;
    let limit = perPage * page;
    let offset = limit - perPage;

    let blogData = await getAllData(limit, offset, perPage, request);

    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({
      success: true,
      currentPage: page,
      perPage,
      ...blogData,
      allcategories: categories,
    });

};
