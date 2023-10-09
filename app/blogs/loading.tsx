"use client";

import React from "react";

//BlogsSkeleton
const Loading = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-full lg:w-3/12 px-2">
          <h5 className="font-medium mb-4">CATEGORIES</h5>
          <ul className="flex flex-wrap lg:block w-auto lg:mb-0 mb-10">
            <div className="w-full h-8 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
            <div className="w-full h-8 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
            <div className="w-full h-8 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
        </ul>
      </div>
      <BlogsItemSkeleton />
    </div>
  );
};

export const BlogsItemSkeleton = () => {
  return (
    <div className="w-full lg:w-9/12">
      <div className="flex flex-wrap mb-10">
        {[...Array(20).keys()].map((item, index) => {
          return (
            <div key={index} className="w-full md:w-6/12 lg:w-4/12 px-2 py-2">
              <div className="border rounded-lg bg-white h-full flex flex-col relative">
                <div className="w-full h-36 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>

                <div className="p-4 flex-grow">
                  <div className="w-full h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse mb-4"></div>

                  <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                  <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                  <div className="w-full h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                  <div className="w-6/12 h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                </div>

                <div className="border-t p-4 self-end w-full">
                  <div className="w-64 h-2 mb-1 rounded bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loading;
