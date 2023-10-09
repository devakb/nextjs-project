import React from 'react'

const AuthorCard = ({name} : {name: string}) => {
  return (
    <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
        <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
        <img
            src="/avatar_7.svg"
            alt=""
            className="mr-3 w-9 h-9 rounded-full"
            decoding="async"
        />
        <div className="text-sm leading-4">
            <div className="text-slate-900">{name}</div>
            <div className="text-sky-600 mt-1">@blogs</div>
        </div>
        </li>
    </ul>
  )
}

export default AuthorCard