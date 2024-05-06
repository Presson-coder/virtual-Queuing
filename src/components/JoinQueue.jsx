import React from 'react'

const JoinQueue = () => {
  return (
    <div className='bg-white'>
        <nav className='w-64 fixed left-0 top-0 bg-orange-500 h-screen '>
            <div>
                <img src="" alt="" />
                <h1 className='text-white  mt-20 flex justify-center'>Presson Zhou</h1>
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
        <div className='flex justify-center ml-64' >
        <h1 className='text-2xl font-bold text-orange-500 '>Join Queue</h1>
        </div>
        <div className='border border-orange-600 rounded-lg ml-64'>
            <form action="post">
                <label htmlFor="Queue Type" className='text-orange-600'>Queue Type</label>
                <select name="queue_type" id="queue_type" className='text-orange-600 bg-white'>
                    <option value="">Select a queue</option>
                    <option value="73 A Joshua M. Nkomo Street, Bulawayo Zimbabwe AGENCy " className='text-orange-600'></option>
                    <option value="Samora Mitchel , Harare Zimbabwe" className='text-orange-600'></option>
                {/* <input type="text" name="queue_type" id="queue_type" /> */}
                </select>
            </form>
        </div>
    </div>
  )
}

export default JoinQueue