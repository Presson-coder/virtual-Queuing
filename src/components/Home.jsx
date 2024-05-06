import React from 'react';
import { FcAlarmClock } from "react-icons/fc";
import { FaUserClock } from "react-icons/fa6";
import service from '../assets/pngwing.com (16).png';
import { FaUserCircle } from "react-icons/fa";
import background from '../assets/thebg.png';

const Home = () => {
  return (
    <div className='flex text-yellow-500' style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}>
        <div className='absolute ml-72 mt-10 mb-14 text-orange-700 text-2xl font-semibold'>
            Welcome to Virtual Queuing, <span className='text-yellow-900'>enjoy convenience!</span>
        </div>
        <nav className='w-64 fixed bg-orange-500 h-screen '>
            <div className='flex flex-col items-center'>
                <FaUserCircle className=' text-white text-5xl mt-8 mb-2'/>
                <h1 className='text-white  '>Presson Zhou</h1>
            </div>

            < button href='#' className='w-3/4 p-2 mx-10 mt-12 mb-2  rounded bg-white text-orange-500 '>
                <h1 className='font-bold '>Home</h1>
            </button>
            < button href='#' className='w-3/4 font-bold p-2 mx-10 my-2 rounded bg-white text-orange-500 '>
                <h1>Join Queue</h1>
            </button>
            < button href='#' className='w-3/4 font-bold p-2 mx-10 my-2 rounded bg-white text-orange-500 '>
                <h1>Skip the weight</h1>
            </button>
            < button href='#' className='w-3/4 font-bold p-2 mx-10 my-2 rounded bg-white text-orange-500 '>
                <h1>Notifications</h1>
            </button>
            < button href='#' className='w-3/4 font-bold p-2 mx-10 my-2 rounded bg-white text-orange-500 '>
                <h1>Reservations</h1>
            </button>
            < button href='#' className='w-3/4 font-bold p-2 mx-10 my-2 rounded bg-white text-orange-500 '>
                <h1>My QR Code</h1>
            </button>
        </nav>
        <button className='right-0 bg-orange-500 text-white hover:bg-orange-400 fixed top-0 rounded p-2 m-4'>Admin</button>
        <div className='flex flex-col h-screen'>
        <div className='w-full   flex flex-row mt-24 ml-64 my-10' >
        <div className='flex flex-row justify-center rounded-lg m-8 bg-orange-600  w-1/2 h-40 p-8 shadow-lg'>
            <h1 className='font-bold text-white text-xl mb-4'>Position</h1>
            <div className='m-8 absolute w-12 h-12 flex justify-end rounded-full bg-white p-3 text-orange-600 text-xl '>
                20
            </div>

        </div>
        <div className='relative rounded-lg m-8 border border-orange-600 w-1/2 h-40 p-8 shadow-lg'>
            <h1 className=' font-bold text-orange-600 text-xl pt-1 pb-4'>Time Remaining</h1>
            <div className='flex justify-between items-center'>
            <FcAlarmClock className='text-white text-5xl'/>
             <div className=' rounded-full bg-orange-600 p-2 text-white text-xl '>
                20 mins
             </div>
            </div>
        </div>  
        <div className='relative border rounded-lg m-8 border-orange-600 w-1/2 h-40 p-8 shadow-lg'>
         <h1 className='font-bold text-orange-600 text-xl'>You will be served at</h1>
          <div className='flex justify-between items-center space-x-4'>
            <img src={service} alt="service time" className='h-24'/>
            <div className='rounded-full text-white p-2 bg-orange-600 text-xl'>1620hrs</div>
          </div>
       </div> 
        </div>
        <div className=' border w-1/2 h-28 rounded border-orange-500 ml-72 '>
            <div className=''>
                <h2 className='text-xl text-orange-600'>Service Branch</h2>
                <hr className=''/>
                <h1 className='text-yellow-400'>Samora Mitchel</h1>
            </div>
        </div> 
        </div>
        
        
    </div>
  )
}

export default Home