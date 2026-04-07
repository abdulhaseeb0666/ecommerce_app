import React from 'react'
import "../globals.css"

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <html>
        <body className='bg-black'>
            <div>
            {children}
            </div>
        </body>
    </html>    

  )
}

export default layout
