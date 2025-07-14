import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import ChatContainer from '../Components/ChatContainer'
import RightSidebar from '../Components/RightSidebar'

const HomePage = () => {
        const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className='text-[12px] w-full h-screen text-white sm:px-[15%] sm:py-[8%] '>
        <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/30 grid grid-cols-1 ${selectedUser?"md:grid-cols-[1fr_1.5fr_1fr] lg:grid-cols-[1fr_2fr_1fr]":" grid-cols-2"} h-full `}>
            <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>

    </div>
  )
}

export default HomePage