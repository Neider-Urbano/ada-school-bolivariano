import React from 'react'
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/NavBar/Navbar.jsx';

const Profile = () => {
    const dataUser=JSON.parse(window.localStorage.getItem("dataUser"))
  return (
    <div>
        <Nav /> 
        <div className="px-5 flex items-center justify-center flex-col md:flex-row mt-28 mb-10 min-h-[300px]">
            <div className="flex mt-7 flex-col md:flex-row md:ml-10 md:mt-0 border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <div >
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="" />
                </div>
                <div className="px-7 py-7">
                    <h1 className="text-center font-bold mb-5">{dataUser.username}</h1>
                    <div>
                        <div className="flex">
                            <h2 className="w-[100px] font-semibold">Nationality</h2>
                            <p >Colombia</p>
                        </div>
                        <div className="flex">
                            <h2 className="w-[100px] font-semibold">Age</h2>
                            <p >21</p>
                        </div>
                        <div className="flex">
                            <h2 className="w-[100px] font-semibold">Role</h2>
                            <p >Admin</p>
                        </div>
                        <div className="flex">
                            <h2 className="w-[100px] font-semibold">Email</h2>
                            <p >jjuly8julianur@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile