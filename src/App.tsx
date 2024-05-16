import {Routes, Route} from 'react-router-dom'
import './globals.css';
import SigninForm from './_auth/forms/SigninForm'
import SigninUp from './_auth/forms/SigninUp'
import { Home } from './_root/pages'
import Auth_layout from './_auth/Auth_layout'
import RootLayout from './_root/RootLayout'


function App() {

  return (
    <main className='flex h-screen w-screen align-middle'>
      <Routes>
        {/* {Routes publics} */}
        <Route element={<Auth_layout />}>
          <Route path='/sign-in' element={<SigninForm />}></Route>
          <Route path='/sign-up' element={<SigninUp />}></Route>
        </Route>

        {/* private Routes */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />}></Route>  
        </Route>
      </Routes>
    </main>
  )
}

export default App
