import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen text-white bg-gray-900'>
        <div className='border-b border-b-purple-300/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className="py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                        <span className="text-xl font-mono font-bold">C</span>
                    </div>
                    <span className="text-xl font-semibold tracking-tight">codeclub</span>
                    </div>

                   <div>
                    Your Account
                   </div>
                </div>  
            </nav>
        </div>
        </div>
        <div className='min-h-64 max-w-7xl mx-auto rounded-md my-4 flex bg-slate-500'>
            <div className='bg-gray-50 max-h-full w-1/3'>
            
            </div>
        </div>
    </div>
  )
}

export default Home