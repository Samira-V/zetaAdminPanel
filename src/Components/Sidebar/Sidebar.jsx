


import SidebarItem from './SidebarItem'
import {links} from './../../data/datas'



export default function Sidebar() {
 
  return (
    <div className="sidebar d-flex flex-column">
      <div className="logo-container">
        <img src='./small-logo.png' className='logo' alt='zeta'></img>
      </div>
      <div className='menu-container'>
        {links.map((item, index) => <SidebarItem key={index} item={item} />)}

      </div>
      <div className='helpBoxWrapper'>
      <div className="sidebar-img-section">
        <div className="sidebar-img-content">
          <img className="img-fluid" src="side-bar.png" alt=""/>
          <h4>Need Help ?</h4><a className="txt" href="https://pixelstrap.freshdesk.com/support/home" data-bs-original-title="" title="">Raise ticket at "support@pixelstrap.com"</a><a className="btn btn-secondary" href="https://themeforest.net/user/pixelstrap/portfolio" data-bs-original-title="" title="">Buy Now</a>
        </div>
      </div>

      </div>
    </div>
  )
}