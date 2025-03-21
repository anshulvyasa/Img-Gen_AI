import { useState } from 'react'
import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import {logo} from './assets';
import { Home ,CreatePost} from "./Pages"

function App() {
  const [count, setCount] = useState(0);

  return ( 

  <BrowserRouter>

  <header 
  className='w-full  flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]'>

    <Link to="/">
      <img src={logo} alt='logo'
      className='w-28 object-contain'/> 
      {/* this Css ensures that the image is not cropped and scaled properly when the aspact ratio are changed */}

    </Link>

    <Link to="/create-post"
    className='font-inter font-medium bg-[#4653b4] text-white px-4 py-2 rounded-md'>

      Create

    </Link>

  </header>


  <main className='sm:p-8 px-4 py-8 w-full bg-[#dadbdf] min-h-[calc(100vh-73px)}'>
    {/* define the routes where the url will go when the link is clicked */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create-post" element={<CreatePost/>}/>
    </Routes>
  </main>

  </BrowserRouter>
  )
}

export default App
