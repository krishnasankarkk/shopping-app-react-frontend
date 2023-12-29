// import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // Fetching data from a Django REST API endpoint using axios
  axios.get('https://krishna0.pythonanywhere.com/users/')
    .then(response => {
      // Handle the response data
      console.log(response.data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the axios request:', error);
    });

  return (
    <>
      
    </>
  )
}

export default App
