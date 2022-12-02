import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const PageNotFound = () => {

   const route = useRouter()

   useEffect(() => {
        const timer = setTimeout(() => {
            route.push('/')
        },7000)

        return () => clearTimeout(timer)
   },[])


  return (
    <div className="container">
        <h1>Oops! Page Not Found</h1>
        <Link href='/'>Go to Home Page</Link>

        <style jsx>
            {`
                .container {
                    max-width:1200px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    padding:100px 50px;
                    text-align:center;
                }
            `}
        </style>
    </div>
  )
}

export default PageNotFound