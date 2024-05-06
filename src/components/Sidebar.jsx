

const Sidebar = () => {
  return (
    <div>
        <nav className='w-1/5 bg-orange-500 h-screen'>
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
        <button className='right-0 bg-orange-500 text-white hover:bg-orange-400 fixed top-0 rounded p-2 m-4'>Admin</button>
    </div>
  )
}

export default Sidebar