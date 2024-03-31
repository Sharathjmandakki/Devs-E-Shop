import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Trending() {
    const [tab, setTab] = useState(0);
    const addCat = () => {
        setTab(0);
    }
    const viewCat = () => {
        setTab(1);
    }
    const viewItem = () => {
        setTab(2);
    }
    return (
        <div class="md:flex m-10">
            <ul class="flex-column space-y space-y-10 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                <li>
                    <Link to="" onClick={addCat} class={(tab == 0) ? "inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" : 
                    "inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"}>Add Category</Link>
                </li>
                <li>
                    <Link to="trendingcatgory" onClick={viewCat} class={(tab == 1) ? "inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" : 
                    "inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"}>Categories</Link>
                </li>
                <li>
                    <Link to="trendingitem" onClick={viewItem} class={(tab == 2) ? "inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" : 
                    "inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"}>Items</Link>
                </li>
            </ul>
            <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full overflow-scroll-y">
                <Outlet />
            </div>
        </div>
    )
}
