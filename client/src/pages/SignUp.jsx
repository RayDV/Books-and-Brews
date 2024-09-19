import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
  <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

      {/* left side */}
      <div className="flex-1">
        <Link
          to="/"
          className="font-bold text-4xl"
          >
          <span>Brews'N'Books</span>
        </Link>
        <p className='text-sm mt-5'>
          Explore and review local cafes and book-friendly spaces. Sign up to start finding your ideal study spot today!
        </p>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div className="">
            <Label value='Your username' />
            <TextInput type='text' placeholder='JohnDoe123' id='username' />
          </div>

          <div className="">
            <Label value='Your email' />
            <TextInput type='email' placeholder='JohnDoe@domain.com' id='email' />
          </div>

          <div className="">
            <Label value='Your password' />
            <TextInput type='password' placeholder='Password' id='password' />
          </div>
          {/* in flowbite we need to specify the type. Without flowbite default is submit */}
          <Button gradientDuoTone={'purpleToPink'} type='submit'>
            Sign Up
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to={'/sign-in'} className='text-blue-500'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
