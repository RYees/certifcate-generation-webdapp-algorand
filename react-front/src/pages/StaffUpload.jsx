import React from 'react'

const StaffUpload = () => {
  return (
    <div>
        <div className='bg-red-500 p-2'>
            <div>
               <h1 className='text-center text-3xl text-white p-4'>Send Certificate to Algorand Blockchain</h1>
            </div>      
                <form action="" className='flex flex-wrap gap-40 m-10 p-5 justify-center bg-gray-800'>
                    <div>
                    <div className='p-5'>
                        <input type="text" placeholder='trainee name' className='p-2 rounded hover:bg-gray-100' />
                    </div>

                    <div className='p-5'>
                        <input type="text" placeholder='trainee email' className='p-2 rounded hover:bg-gray-100' />
                    </div>

                    <div className='p-5'>
                        <input type="text" placeholder='trainee certificate' className='p-2 rounded hover:bg-gray-100' />
                    </div>
                    </div>

                    <div>
                        <button className='p-4 bg-red-600 px-10 rounded-full text-white'>Send</button>
                    </div>                    
                </form>
            </div>
    </div>
  )
}

export default StaffUpload