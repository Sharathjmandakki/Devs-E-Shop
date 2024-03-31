import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import axios from 'axios';
export default function Update() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRPassword] = useState("");
    const UpdateData = (e) => {
        e.preventDefault();
        if (password === rpassword) {
            axios.post("http://localhost:9090/updatepassword", {
                password: password,
                email: email
            })
                .then(response => {
                    // Handle success, response contains the data returned by the server
                    if(response.data==="Updated"){
                        alert(response.data)
                        window.location.href="/login"
                    }else{                        
                    document.getElementById("error").innerHTML = response.data;
                    }
                })
                .catch(error => {
                    // Handle error    
                    document.getElementById("error").innerHTML = "Error";
                });
        } else {
            document.getElementById("error").innerHTML = "Password Mis Match (both password should be same)";
        }
    }
    const navgate = useNavigate();
    const back = () => {
        navgate(-1);
    }
    return (
        <div className='md:mt-28 flex justify-center'>
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-3" action="#" onSubmit={UpdateData}>
                    <div className='flex justify-between' >
                        <button onClick={back}><MdArrowBackIos className='text-2xl text-center font-medium text-gray-900 dark:text-white' /></button>
                        <h5 class="text-2xl text-center font-medium text-gray-900 dark:text-white">Update Your Password</h5>
                    </div>
                    <hr />
                    <div className='text-red-500 text-center p-2' id='error'></div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@devsshop.com" required value={email} onChange={e => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required value={password} onChange={e => { setPassword(e.target.value) }} />
                    </div>
                    <div>
                        <label for="rpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="rpassword" id="rpassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required value={rpassword} onChange={e => { setRPassword(e.target.value) }} />
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                </form>
            </div>
        </div>
    )
}