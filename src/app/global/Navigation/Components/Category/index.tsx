'use client'

import { useState } from "react";
import { FaAngleRight } from 'react-icons/fa'
import { CategoryProps } from "./types";
import Link from "next/link";

export default function Category({category, pages}: CategoryProps){
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <button 
                className="flex items-center transition-all gap-2 hover:cursor-pointer  pb-1 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-dark-blue" 
                onClick={() => setVisible(!visible)}
            >
                <span className="font-bold text-dark-blue">{category}</span> 
                <FaAngleRight className={`text-dark-blue transition-all ${visible ? "rotate-90" : null}`}/>
            </button>

            {visible ?
                <div className="p-2 flex flex-col">
                    {pages.map((eachPage, index) => {
                        return <Link href={eachPage.url} key={index}>{eachPage.page}</Link>
                    })}
                </div>
                :
                null
            }
        </div>
);
}
