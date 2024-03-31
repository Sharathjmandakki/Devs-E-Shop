import React, { useEffect, useState } from 'react'
import Search from '../Helpers/Search'
import Slider from '../Helpers/Slider'
import Categories from '../Helpers/Categories'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Items from '../Helpers/Items'
export default function Home() {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [titems, setTitems] = useState();
    const [tiimages, setTIimages] = useState([]);
    const [tcategory, setCateory] = useState();
    const [tcimages, setCIimages] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9090/user')
            .then(response => {
                const userData = response.data;
                setUser(userData.name);
            })
            .catch(error => {
                navigate("/login", { replace: true })
            });

        // items
        try {
            const Trending = async () => {
                const response = await axios.get("http://localhost:9090/viewalltrendingitems");
                const arr = [];
                const cat = [];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    if (element.image != null || element.image != undefined) {
                        const url = element.image.split(',')[0];
                        arr.push(url);
                    } else {
                        arr.push("https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg");
                    }
                    cat.push(element);
                }
                setTIimages(arr);
                setTitems(cat);
            }
            Trending()
        } catch {
            alert("error")
        }
        try {
            //trending catgo
            const data = async () => {
                const response = await axios.get("http://localhost:9090/trendingcat")
                const arr = [];
                const cat = [];
                for (let index = 0; index < response.data.length; index++) {
                    const element = response.data[index];
                    arr.push(element.image);
                    cat.push(element.name);
                }
                setCIimages(arr)
                setCateory(cat)
            }
            data()
        } catch {
            alert("error")
        }
    }, [])
    return (
        <div className='m-10'>
            <h1 className='text-5xl text-center font-bold text-gray-400 mt-10 mb-5 ' style={{fontFamily:'Rubik Scribble',letterSpacing:'3',wordSpacing:'5',fontStyle:'initial'}}><span style={{textTransform:'capitalize'}}>{user}</span>, Wellcome to Dev's Shop</h1>
            <Search />
            <Categories images={tcimages} catgo={tcategory} />
            <Items images={tiimages} catgo={titems} />
            <marquee>⚠️ Test Data </marquee>
        </div>
    )
}
