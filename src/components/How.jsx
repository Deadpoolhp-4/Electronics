import React from 'react'

const How = () => {
  return (
    <div className='flex-column items-center justify-center gap-4 p-10 px-40 w-full'>
        <div className='text-center text-[#1053D4] text-2xl font-semibold p-4'>
            <h3>
                How it works
            </h3>
        </div>
        <div className='text-center text-black text-5xl font-semibold p-4'>
            <h1>
                How To Get Our Services
            </h1>
        </div>
        <div className='text-center text-gray-500 text-xl p-4'>
            <p>
            Maruti Electronic Services provides a unique solution of " One Stop <br />Shop" with the help of Enquiry and Subject Matter Expert.
            </p>
        </div>
        <div className='text-center px-12'>
            <div className='grid grid-cols-3 gap-10 border-2 border-[#1053D4] p-4 rounded-lg px-12' >
                <div className='flex-column items-center justify-center gap-4 text-black p-10'>
                    <div>
                        <h3 className='text-xl font-semibold text-[#1053D4] px-4 border-2 border-gray-dotted rounded-full w-fit mx-auto'>
                            Step 1
                        </h3>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>
                            Enquiry
                        </h1>
                    </div>
                    <div>
                        <p>
                            General Enquiry options and <br />
                            based on Interest/requirements.
                        </p>
                    </div>
                </div>
                <div className='flex-column items-center justify-center gap-4 text-black p-4 border-x-2 border-[#1053D4]'>
                    <div>
                        <h3 className='text-xl font-semibold box border-2 border-gray-dotted text-[#1053D4] px-4 rounded-full w-fit mx-auto'>
                            Step 2
                        </h3>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>
                        Subject Matter Expert
                        </h1>
                    </div>
                    <div className='text-center text-red-500 text-xl font-semibold'>
                        <p>
                        one-on-one 
                        </p>
                    </div>
                    <div>
                        <p>
                        Technical experts to explore the <br />
                         narrowed down options at an <br />
                         affordable price.
                        </p>
                    </div>
                </div>
                <div className='flex-column items-center justify-center gap-4 text-black p-10'>
                    <div>
                        <h3 className='text-xl font-semibold text-[#1053D4] px-4 rounded-full w-fit mx-auto border-2 border-gray-dotted'>
                            Step 3
                        </h3>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>
                        One Stop Shop
                        </h1>
                    </div>
                    <div>
                        <p>
                        From choosing a right solution 
                        <br />option to complete
                         the <br />requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       <div className='flex-column items-center justify-center gap-4 text-center py-10'>
            <a href='#' className='bg-[#CAEE5A] text-black  font-semibold  px-8 py-4 rounded-full hover:bg-[#99C647] transition-all duration-300'>
                Learn More
            </a>
        </div> 
    </div>
  )
}

export default How
