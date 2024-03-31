import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Entry() {
    const [pg,setPg]=useState(0);
    const Register=()=>{
        setPg(1)
    }
    const Login=()=>{
        setPg(0)
    }
    return (
        <div>
            <div class="w-full">
                <div class="grid max-w-xs grid-cols-2 gap-2 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
                    <Link to="login" onClick={Login} class={(pg===0)?"px-5 py-1.5 text-xl font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg text-center":"px-5 py-1.5 text-xl font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg text-center"}>
                        Login
                    </Link>
                    <Link onClick={Register} to="register" class={(pg===1)?"px-5 py-1.5 text-xl font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg text-center":"px-5 py-1.5 text-xl font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg text-center"}>
                        Register
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
