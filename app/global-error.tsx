"use client";

import { startTransition } from 'react'
import { useRouter } from 'next/navigation';

const Error = ({error, reset} : {error : Error , reset : () => void}) => {
  const router = useRouter();

  return (
    <div className='absolute top-[50%] left-[50%] translate-[-50%]'>
      <h1 className='font-bold text-5xl'>There was a problem reaching this page</h1> 
      <button type='button'
        onClick={() => {
          startTransition(() => { router.refresh(); 
            reset();
            reset();
          })
        }}
        className='font-bold text-xl bg-gray-300 border-2 border-black p-2 rounded-2xl cursor-pointer active:scale-90'
      >Reload</button> 
    </div>
  )
}

export default Error
