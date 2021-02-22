import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader"
import '../style/App.scss'
import Signup from './auth/Signup';
import Home from './Home';

// const api = axios.create({
//   baseURL: `https://men-api.herokuapp.com/posts`
// })
export default function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

    return (
      <div className='app'>

        {
          loading ? 

          <RingLoader
          loading={loading}
          color={"#7fff"}
          size={30}
          />

          :
          
          
        <BrowserRouter>
           <Route component={Home} path='/' exact />
           <Route component={Signup} path='/signup' exact />
        </BrowserRouter>
        }
      </div>
    );
}