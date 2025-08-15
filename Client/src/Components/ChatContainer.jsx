import React from 'react'
import assets, { messagesDummyData, userDummyData } from '../assets/Chatrr/assets'

function ChatContainer({selectedUser,setSelectedUser}) {
  return selectedUser? (
    <div className='backdrop-blur-xlmx-3'>
      <div className='flex items-center gap-5 px-2 sm:px-5 relative '>
        <img src={assets.profile_martin} alt=""  className='w-10 rounded-full'/>
        <div>
          UserName
        </div>


      <img onClick={()=>{setSelectedUser(null)}} src={assets.arrow_icon} alt="" className=' md:hidden w-5'/>
      <img src={assets.help_icon} alt="" className='w-6 absolute right-5' />
      </div>
      <div className='flex justify-center pt-3 pb-3'>
        <div className='w-[100%] md:w-[90%] h-[0.5px]  bg-white/20'>

        </div>
      </div>
      <div className='flex flex-col gap-1 h-[50%] md:px-3 only-slider overflow-y-scroll '>
        {
           messagesDummyData.map((chat,index)=>{
            console.log("message",index, chat)
            return (
              <div key={index} className={` flex flex-col ${chat.senderId===selectedUser._id?"items-start":"items-end" } my-1`}>
                <div className={`  max-w-[80%] p-2 flex flex-col gap-1`}>
              {
                chat.image?
                <div>
                  <img src={chat.image} alt="" className='w-50 ' />
                </div>
                :
              <div className={`flex items-center just gap-2  ${chat.senderId===selectedUser._id?"":"flex-row-reverse"}`}>
                
                  <img src={assets.avatar_icon} alt="" className='w-8'/>
              
                <div className={`w-[70%] text-[13px] `}>
                  <div>
                 {chat.text} {index}

                  </div>
                </div>

              </div>
              }
                </div>

              </div>
            )
          })
        }
      </div>

    </div>
  ):
  (
    <div className='hidden md:flex flex-col items-center backdrop-blur-xl'>
      <img src={assets.logo_icon} alt="" className='w-[100px] md:w-[125px] pt-[35%] md:pt-[20%]' />
      <div className=' text-2xl md:text-3xl pt-[10%] text-center'>
        Start Chatting
      </div>
    </div>
  )
}

export default ChatContainer