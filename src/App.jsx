import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'

function App() {

  const { authState } = useContext(AuthContext);


  return (
    <div className="App">
      {
        authState.showAdminPage ?
          <Admin />
          :
          <>
            <Navbar />
            <AllRoutes />
            <Footer />
          </>
      }
    </div>
  )
}

export default App
