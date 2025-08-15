import React from 'react'
import assets, { userDummyData } from '../assets/Chatrr/assets'
import { useNavigate } from 'react-router-dom'
useNavigate
function SideBar({selectedUser,setSelectedUser}) {
    const navigate=useNavigate()
    

  return (
    <div className={`overflow-y-scroll h-full only-slider ${selectedUser?"hidden md:block":"block"}`}>

        <div className=''>
            <div className='flex justify-between '>
                <img src={assets.logo} className='w-36' alt="" />
                <div className='group relative '>
                    <img src={assets.menu_icon} className='w-7' alt="" />
                    <div className='absolute top-7 right-1 w-28 hidden group-hover:flex bg-gray-900/30 px-2 py-3  flex-col gap-2 rounded-s'>
                        <div onClick={()=>{ navigate('/profile')}} className='group/inner relative cursor-pointer'>
                           Edit Profile
                           <div className='absolute opacity-0  w-[85%] h-[1px] transition duration-300 bg-white group-hover/inner:opacity-100'>

                           </div>
                        </div>
                        <div  className='group/inner relative cursor-pointer'>
                           Logout
                           <div className='absolute opacity-0  w-[55%] h-[1px] transition duration-300 bg-white group-hover/inner:opacity-100'>

                           </div>
                        </div>
                      
                    </div>

                </div>
            </div>
            <div className='flex gap-3 items-center my-3 mr-[10%] bg-gray-700/40 px-4 py-2 rounded-full '>
              

                <img src={assets.search_icon} className='w-3' alt="" />
               
                

                <input type="text" name="" id="" placeholder='Search' className='focus:outline-none focus:ring-0 w-full'/>
              
            </div>
            <div className='flex flex-col  sct'>
                {
                   
                    userDummyData.map((user,index)=>{
                    
                       
                    return <div key={index} onClick={()=>{
                     
                        setSelectedUser(user);
                    }} className={`hover:bg-blue-950/50 flex pl-2 gap-3 py-3 cursor-pointer relative ${selectedUser?._id===user._id && "bg-blue-950/50" } `} >
                        <img src={user?.profilePic || assets.avatar_icon} alt=""  className='w-8 rounded-full'/>
                        <div>
                            <p>{user.fullName}</p>
                            {
                                index<3?
                                <span className='text-red-600/100'>Offline</span>:
                                <span className='text-green-500'>Online</span>
                                
                            }

                        </div>
                            {
                                index>2 &&
                                <div className='absolute right-5 top-[30%] h-5 w-5 rounded-full  bg-purple-500/30 text-center font-sans '>
                                    1
                                </div>

                            }
                      

                    </div>}
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar