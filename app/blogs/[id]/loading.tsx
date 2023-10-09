"use client";

import Link from "next/link";
import React from "react";

//BlogsSkeleton
const Loading = () => {
  return (
    <BlogsItemSkeleton />
  );
};

export const BlogsItemSkeleton = () => {
  return (
    <div className="flex justify-start flex-wrap">
      <div className="w-full lg:w-4/12 px-2 py-2 mb-4">
        <Link href="/blogs" className="font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900">← Go back</Link>
      </div>
      <div className="w-full lg:w-6/12 px-2 py-2 mb-4">

            <div className="bg-white h-full flex flex-col relative">

                <dd className=" text-slate-700 my-4 text-sm">
                  <div className="w-64 h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                </dd>

                <div className="w-full h-4 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                <div className="w-6/12 h-4 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                
                <div className="mb-8">
                  <div className="w-64 h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                </div>

                <div className="w-full h-96 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse mb-4"></div>

                <div className="flex-grow mt-10">
                  <p className="text-base text-gray-500">
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                      <div className="w-6/12 h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                  </p>
                </div>
            </div>
      </div>
      <div className="w-full lg:w-6/12 px-2 py-2">
        
      </div>
    </div>
  );
};

export default Loading;
