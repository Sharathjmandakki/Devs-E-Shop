import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Login & Register/Register'
import Login from './Login & Register/Login'
import User from './User/User'
import Update from './Login & Register/Update'
import MyOrders from './User/MyOrders'
import Home from './User/Home'
import Contact from './User/Contact'
import Cart from './User/Cart'
import Admin from './Admin/Admin'
import PageNot from './Helpers/PageNot'
import DSUsers from './Admin/DSUsers'
import AdminPanal from './Admin/AdminPanal'
import AddItem from './Admin/AddItem'
import AddUser from './Admin/AddUser'
import EditUser from './Admin/EditUser'
import ListItems from './Shop/ListItems'
import SelectedItem from './Shop/SelectedItem'
import About from './Login & Register/About'
import Trending from './Trending/Trending'
import AddCatgory from './Trending/AddCatgory'
import ViewTrendingCatgory from './Trending/ViewTrendingCatgory'
import ViewTrendingItem from './Trending/ViewTrendingItem'

export default function App() {
  return (
    <div>
      <Routes>
        {/* Login and Legister */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/update' element={<Update />} />
        <Route path='/about' element={<About/>} />
        {/* User */}
        <Route path='/' element={<User />}>
          <Route path='' element={<Home />} />
          <Route path='myorders' element={<MyOrders />} />
          <Route path='cart' element={<Cart />} />
          <Route path='contact' element={<Contact />} />
          <Route path='items' element={<ListItems/>}/>
          <Route path='*' element={<PageNot/>} />
        </Route>
        {/* Admin */}
        <Route path='/admin/' element={<Admin />}>
          <Route path='' element={<Home />} />
          <Route path='myorders' element={<MyOrders />} />
          <Route path='cart' element={<Cart />} />
          <Route path='add' element={<AddItem/>} />
          <Route path='adminpanal' element={<AdminPanal />} />
          <Route path='users' element={<DSUsers />} >
          <Route path='edituser' element={<EditUser/>} />
          </Route>
          <Route path='items' element={<ListItems/>}/>
          <Route path='adduser' element={<AddUser/>}/>
          <Route path='trending' element={<Trending/>}>
          <Route path='' element={<AddCatgory />} />
          <Route path='trendingcatgory' element={<ViewTrendingCatgory />} />
          <Route path='trendingitem' element={<ViewTrendingItem />} />
          </Route>
          <Route path='*' element={<PageNot/>} />
        </Route>
        {/* Extra */}        
        <Route path='/item' element={<SelectedItem/>} />
      </Routes>
    </div>
  )
}
