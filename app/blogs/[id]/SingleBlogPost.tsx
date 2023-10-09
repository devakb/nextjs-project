'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AuthorCard from '@/app/Components/AuthorCard'
import moment from 'moment'

export interface BlogItemInterface {
  id: number,
  image: string,
  headline: string,
  content: string,
  sub_content: string,
  author_name: string,
  published_at: string,
  category: string,
  is_popular: string,
}

export interface BlogsPropsInterface{
  blog: BlogItemInterface,
}



export const SingleBlogPost = ({blog} : BlogsPropsInterface) => {

  const router = useRouter();

  return (
   <div className="flex justify-start flex-wrap">
      <div className="w-full lg:w-4/12 px-2 py-2 mb-4">
        <Link href="/blogs" className="font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900">← Go back</Link>
      </div>
      <div className="w-full lg:w-6/12 px-2 py-2 mb-4">

            <span className="px-5 py-1 text-[12px] bg-slate-200 text-black inline-block w-auto mb-2">
                {blog.category}
            </span>
            <div className="bg-white h-full flex flex-col relative">

                <dd className=" text-slate-700 my-4 text-sm"><time dateTime={moment(blog.published_at).toISOString()}>
                  {moment(blog.published_at).format("dddd, MMMM Do YYYY")}
                </time></dd>

                <h4 className="font-medium text-3xl  mb-4">{blog.headline}</h4>
                
                <div className="mb-8">
                <AuthorCard name={blog.author_name}/>
                </div>

                <div className="p-5 bg-slate-200 rounded-full">
                  <img src={blog.image} alt="" className='rounded-lg' />
                </div>

                <div className="flex-grow mt-10">
                  <p className="text-base text-gray-500">
                    {blog.content}
                  </p>
                </div>
            </div>
      </div>
      <div className="w-full lg:w-6/12 px-2 py-2">
        
      </div>
    </div>
  )
}

