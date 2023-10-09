'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import {BlogsItemSkeleton} from './loading'

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

export interface PaginationInterface{
  perPage: number,
  totalRecords: number,
  totalPages: number,
  currentPage: number,
}

export interface BlogsPropsInterface{
  blogs: Array<BlogItemInterface>|null,
  pagination: PaginationInterface|null,
  categories: Array<string>|null,
  selectedCategories: Array<string>|null,
}



export const Blogs = ({blogs, pagination, categories, selectedCategories} : BlogsPropsInterface) => {

  const router = useRouter();

  let [loading, setLoading] = useState<boolean>(false);

  const handleCategoryFilter = (event : React.ChangeEvent<HTMLInputElement>) => {

    setLoading(true);

    let value = event.target.value;
    
    let categorySet = new Set(selectedCategories);

    if(event.target.checked && !categorySet.has(value)){
      categorySet.add(value);
    }else if(!event.target.checked && categorySet.has(value)){
        categorySet.delete(value);
    }

    let categories = Array.from(categorySet);
    
    let categoryStr = categories.join(",");

    if(categoryStr === ""){
      router.push(`?page=1`);
    }else{
      router.push(`?categories=${categories.join(",")}`);
    }

  }

  const changePage = async (page: number, currentPage: number) => {

    if(currentPage === page || page <= 0 || page > (pagination?.totalPages ?? 0)){
      return;
    }

    setLoading(true);

    if(selectedCategories?.length){
      let categoryStr = selectedCategories.join(",");
      router.push(`?page=${page}&categories=${categoryStr}`);
    }else{
      router.push(`?page=${page}`);
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }
  


  useEffect(() => {

    setLoading(false);

    return () => {};

  }, [blogs]);

  return (
   <div className="flex flex-wrap justify-between">

        <div className="w-full lg:w-3/12 px-2">
          <h5 className="font-medium mb-4">CATEGORIES</h5>
          <ul className="flex flex-wrap lg:block w-auto lg:mb-0 mb-10">
            {
              categories && categories.map((item, index) => {
                return (
                  <li className="mx-3 my-2 lg:mx-0" key={index}>
                    <label htmlFor={`category_select_${item}`} className='flex'>
                      <input type="checkbox" className="mr-2" id={`category_select_${item}`} onChange={handleCategoryFilter} value={item} defaultChecked={selectedCategories?.includes(item)} />
                      <label htmlFor={`category_select_${item}`}>{item}</label>
                    </label>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="w-full lg:w-9/12">

          <Pagination pagination={pagination} changePage={changePage}/>

          {loading ? <BlogsItemSkeleton /> : <>
            <div className="flex flex-wrap my-5">
                {
                  blogs && blogs.map((item, index) => {
                    return (
                      <Link key={index} href={`/blogs/${item.id}`} className="w-full md:w-6/12 lg:w-4/12 px-2 py-2">
                          <div className="border rounded-lg bg-white h-full flex flex-col relative">

                              <div className="absolute right-1 top-2">
                                <span className="px-5 py-1 text-[12px] bg-slate-200 text-black inline-block w-auto">
                                  {item.category}
                                </span>
                              </div>

                              <img src={item.image} alt="" />

                              <div className="p-4 flex-grow">

                                <h4 className="font-medium text-xl h-20 mb-4">{item.headline}</h4>

                                <p className="text-base text-slate-500">
                                  {item.sub_content}...
                                </p>
                              </div>
                              
                              <div className="border-t p-4 self-end w-full">
                                  <span className="text-sm text-slate-400">
                                      <span className="border-r pr-2">{item.author_name}</span> <span className="pl-2">{item.published_at}</span>
                                  </span>
                              </div>
                          </div>
                      </Link>
                    )
                  })
                }
            </div>
          </>}

          <Pagination pagination={pagination} changePage={changePage}/>

        </div>
    </div>
  )
}

const Pagination = ({pagination,changePage} : {pagination: PaginationInterface|null, changePage: CallableFunction}) => {

  let disabledPrev = (pagination?.currentPage ?? 1) === 1;

  let disabledNext = (pagination?.currentPage ?? 1) === (pagination?.totalPages ?? 0);

  return (
    (pagination?.totalPages ?? 0) > 1 && <div className="w-full"><div className="flex justify-end">
        <div className="flex gap-1 select-none">

            <div onClick={() => changePage((pagination?.currentPage ?? 1) - 1, pagination?.currentPage ?? 1)} className={`${disabledPrev ? 'bg-slate-200 opacity-50' : 'hover:bg-slate-100  cursor-pointer '} rounded-lg w-20 h-10 border flex items-center justify-center`}>
            ← Prev
            </div>

            {pagination && [...Array(pagination.totalPages).keys()].map((item, index) => {
              return <div onClick={() => changePage(index + 1, pagination?.currentPage ?? 1)} className={`rounded-full w-10 h-10 border flex items-center justify-center cursor-pointer ${pagination?.currentPage === (index + 1) ? 'bg-sky-700 text-white' : 'hover:bg-slate-100' }`} key={index}>{index + 1}</div>
            })}

            <div onClick={() => changePage((pagination?.currentPage ?? 1) + 1, pagination?.currentPage ?? 1)} className={`${disabledNext ? 'bg-slate-200 opacity-50' : 'hover:bg-slate-100  cursor-pointer '} rounded-lg w-20 h-10 border flex items-center justify-center`}>
              Next →
            </div>

        </div>
    </div>
    </div>
  )
}