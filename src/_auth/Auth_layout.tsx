import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Auth_layout = () => {
  const isAuthenticated = false
  return (
    <>
      {isAuthenticated  ? (
      <Navigate to={"/"} />
    ) : 
      (
        <>
         <section className='flex flex-1 justify-center items-center flex-col py-10 w-1/2'>  
            <Outlet /> 
          </section>
          <img src="https://source.unsplash.com/random" alt="Imagen lateral" className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' />
      </>
      )
      }
    </>
  )
}

export default Auth_layout
