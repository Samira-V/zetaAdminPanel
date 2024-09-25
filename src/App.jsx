import './App.css'// import ColorPicker from 'react-pick-color';
import { Route, Routes} from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Widgets from './pages/Widgets/Widgets'
import Projects from './pages/Projects/Projects'
import PageLayout from './pages/PageLayout/PageLayout'

import Setting from './Components/Setting/Setting'
import Default from './pages/Dashboard/Default'
import General from './pages/Widgets/General'
import Ecommerce from './pages/Dashboard/Ecommerce'
import Crypto from './pages/Dashboard/Crypto'




function App() {

 
  return (
    <>
      <div className="main" >
        <div className="sidebarContent">
        <Sidebar />

        </div>
        <div className='container'>
          <Topbar />
          <Setting >
          </Setting>

          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/dashboard/default' element={<Default />}/>
            <Route path='/dashboard/ecommerce' element={<Ecommerce />}/>
            <Route path='/dashboard/crypto' element={<Crypto />}/>

            <Route path='/widgets' element={<Widgets />} />
            <Route path='/widgets/general' element={<General />} />
           
            <Route path='/pagelayout' element={<PageLayout />} />
            <Route path='/project' element={<Projects />} />
           
          </Routes>
        </div>

      </div >

    </>

  )
}

export default App
