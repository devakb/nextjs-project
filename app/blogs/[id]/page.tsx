import React from 'react'
import { SingleBlogPost, BlogItemInterface } from './SingleBlogPost';
import axios from "../../Services/axios";
import { notFound } from 'next/navigation';
import Footer from '@/app/Components/Footer';


const getBlogs = async (id: number) : Promise<BlogItemInterface|null> => {

    return await axios.get("blogs/" + id).then(({data}) => {

      if(data.blog.length === 0) return null;

      return data.blog;

    }).catch(() => null);
  
}

const Blog = async ({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | string[] | undefined } })  => {

  let id = params.id;

  const blog : BlogItemInterface|null = await getBlogs(parseInt(id));

  if(blog === null){ notFound() }

  console.log(blog);
  
  return (
    blog && <><SingleBlogPost blog={blog} /> <Footer /> </>
  )
}

export default Blog