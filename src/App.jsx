import './App.css'
import AllRoutes from './Components/AllRoutes'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
// import SignIn from './Pages/SignIn/SignIn'
// import AddData from './Components/AddData'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
