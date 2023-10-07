import React, {useState, useEffect} from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './components/Event'
import './App.css'
import Python from './pages/python'
import Webdev from './pages/webdev'
import Gamedev from './pages/gamedev'



const App = () => {

  const [events, setEvents] = useState([]);
  // const [category, setCategory] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:3000/events')
      const data = await response.json()
      setEvents(data)
    }
  
    fetchEvents()

  }, []);

  // useEffect(() => {
  //   const fetchCategory  = async () => {
  //     const response = await fetch('http://localhost:3000/:category')
  //     const data = await response.json()
  //     setCategory(data)
  //   }
  
  //   fetchCategory()

  // }, []);

  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/python',
      element: <LocationEvents index={1} />
      // element: <Python data={category} />
    },
    {
      path: '/webdev',
      // element: <Webdev data={category} />
      element: <LocationEvents index={2} />
    },
    {
      path: '/gamedev',
      // element: <Gamedev data={category} />
      element: <LocationEvents index={3} />
    },
    {
      path: '/events',
      element: <Events data={events}/>
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>Software Engineering Communities </h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App