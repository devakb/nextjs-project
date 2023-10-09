import React from 'react'
import { Blogs, BlogsPropsInterface } from './Blogs';
import axios from "../Services/axios";
import Footer from '../Components/Footer';

interface getBlogsQueryParamsInterface{
  page?: number,
  categories?: String,
}

const getBlogs = async (page: number, selectedCategories: Array<string>) => {

    let search_categories = selectedCategories.join(",");
   
    let queryparams : getBlogsQueryParamsInterface = {
      page,
    };

    if(search_categories !== ""){
      queryparams["categories"] = search_categories;
    }



    let returnSet : BlogsPropsInterface = {
      blogs: null,
      pagination: null,
      categories: null,
      selectedCategories: null,
    }

    await axios.get("blogs", {
      params: queryparams
    }).then(({data}) => {

      return returnSet = {
        blogs: data.blogs,
        pagination: {
          totalRecords: parseInt(data.totalRecords),
          totalPages: parseInt(data.totalPages),
          currentPage: parseInt(data.currentPage),
          perPage: parseInt(data.perPage)
        },
        categories: data.allcategories,
        selectedCategories: selectedCategories,
      }

    });

    return returnSet;
    
}

const Blog = async ({ params, searchParams }: { params : any, searchParams: { [key: string]: string | string[] | undefined } })  => {

  let selectedCategories : Array<string> = [];

  let searchCategories = String(searchParams.categories ?? "");

  if(searchCategories !== ""){
    selectedCategories = searchCategories.split(",") ?? [];
  }


  const page = searchParams ? (searchParams.page ?? 1) : 1;
  const blogs = await getBlogs(Number(page), selectedCategories);
  

  return (
    <>
        <Blogs key={Number(page)} {...blogs} />

        <Footer />
    </>
  )
}

export default Blog