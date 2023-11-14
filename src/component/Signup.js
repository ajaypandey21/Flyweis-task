import React from 'react'
import lock  from "../util/img/security-shield-50.png"
import tc from "../util/img/page-50.png"
import google  from "../util/img/icons8-google-48.png"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex  w-full h-[100vh]  '> 
 <section id="sec1" className='grid grid-rows-2 text-white  bg-blue-950  w-[38.333333%]'>
    <p className=' grid  text-center  px-6 pt-5 font-light'>
       
    Flyweis Technology delivers the world’s most technically advanced security intelligence to disrupt adversaries, empower defenders, and protect organizations. Flyweis Technology’s proactive and predictive platform provides elite, context-rich, actionable intelligence in real time that’s intuitive and ready for integration across the security ecosystem. This text aims to impart an understanding of the important and relatively new discipline that focuses on the hidden side of the government. Such hidden side of the government...
    </p>
    <div className='flex  mt-auto py-4'>
        <img alt="lock" className='h-8 ' src={lock}/><span className='p-2'>Privacy Poilicy</span>
        <img alt='t&c' className='h-8' src={tc} /><span className='p-2' >Term & Condition</span>
    </div>
</section>

        <section className=' flex justify-center items-center  flex-col w-full border '>
            <h1 className='font-semibold'>Welcome Back !!</h1>
            <span className='my-2 font-bold'>Sign-in</span>
            <a href="/" className='flex items-center text-white bg-blue-950 rounded-md pl-16 pr-16 pt-2 pb-2'>
                <img alt="Google" className='h-6 mr-2 mt-1' src={google} />
                <span className='my-2'>Sign in with Google</span>
            </a>
            <span className='my-2 font-bold'>or</span>
            <input placeholder='Email....' class="border border-b-gray-500 w-[26rem] my-1 p-2 focus:border-transparent focus:outline-none"/>

            <input placeholder='Password...' class="border border-b-gray-500 w-[26rem] my-1 p-2 focus:border-transparent focus:outline-none"></input>
             <Link to="/dashboard" >
            <button className=' text-white bg-blue-950 rounded-md pl-16 pr-16 pt-2 pb-2 my-8'>login</button>
              </Link>
            <span>Don't have an account? <a className='font-bold' href='/'>Signup here</a> </span>
        </section>


    </div>
  )
}

export default Signup