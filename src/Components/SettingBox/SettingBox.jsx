import React from 'react'
import '/SettingBox.css'
export default function SettingBox() {
  return (
     <div className="customizer-contain open">
      <div className="tab-content" id="c-pills-tabContent">
        <div className="customizer-header">
          <i className="icofont-close icon-close"></i>
          <h5>Preview Settings</h5>
          <p className="mb-0">Try It Real Time <i className="fa fa-thumbs-o-up txt-primary"></i></p>
        </div>
        <div className="customizer-body custom-scrollbar">
          <div className="tab-pane fade" id="c-pills-home" role="tabpanel" aria-labelledby="c-pills-home-tab">
            <h6>Layout Type</h6>
            <ul className="main-layout layout-grid">
              <li data-attr="ltr" className="active">
                <div className="header bg-light">
                </div>
                <div className="body">
                  <ul>
                    <li className="bg-light sidebar"></li>
                    <li className="bg-light body"><span className="badge badge-primary">LTR</span></li>
                  </ul>
                </div></li>
                <li data-attr="rtl"> <div className="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div className="body"> <ul> <li className="bg-light body"><span className="badge badge-primary">RTL</span></li><li className="bg-light sidebar"></li></ul> </div></li><li data-attr="ltr" className="box-layout px-3"> <div className="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div className="body"> <ul> <li className="bg-light sidebar"></li><li className="bg-light body"><span className="badge badge-primary">Box</span></li></ul> </div></li></ul> <h6 className="">Sidebar Type</h6> <ul className="sidebar-type layout-grid"> <li data-attr="normal-sidebar"> <div className="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div className="body"> <ul> <li className="bg-dark sidebar"></li><li className="bg-light body"></li></ul> </div></li><li data-attr="compact-sidebar"> <div className="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div className="body"> <ul> <li className="bg-dark sidebar compact"></li><li className="bg-light body"></li></ul> </div></li></ul> </div><div className="tab-pane fade active show" id="c-pills-layouts" role="tabpanel" aria-labelledby="c-pills-layouts-tab"> <h6 className="">Unlimited Color</h6>
            
            
            <h6>Light layout</h6> <ul className="layout-grid customizer-color"> <li className="color-layout" data-attr="color-1" data-primary="#6362e7" data-secondary="#ffc500"> <div></div></li><li className="color-layout" data-attr="color-2" data-primary="#10539c" data-secondary="#ec9a71"> <div></div></li><li className="color-layout" data-attr="color-3" data-primary="#2c5f2d" data-secondary="#90b757"> <div></div></li><li className="color-layout" data-attr="color-4" data-primary="#0E7C7B" data-secondary="#dbb98f"> <div></div></li><li className="color-layout" data-attr="color-5" data-primary="#5f4b8b" data-secondary="#e69a8d"> <div></div></li><li className="color-layout" data-attr="color-6" data-primary="#c38c81" data-secondary="#89d4df"> <div></div></li></ul> <h6 className="">Dark Layout</h6> <ul className="layout-grid customizer-color dark"> <li className="color-layout" data-attr="color-1" data-primary="#3e5fce" data-secondary="#ffce00"> <div></div></li><li className="color-layout" data-attr="color-2" data-primary="#603f83" data-secondary="#c7d3d4"> <div></div></li><li className="color-layout" data-attr="color-3" data-primary="#262223" data-secondary="#ddc6b6"> <div></div></li><li className="color-layout" data-attr="color-4" data-primary="#234e70" data-secondary="#fbf8bf"> <div></div></li><li className="color-layout" data-attr="color-5" data-primary="#317773" data-secondary="#dbb98f"> <div></div></li><li className="color-layout" data-attr="color-6" data-primary="#755139" data-secondary="#f2edd7"> <div></div></li></ul> <h6 className="">Mix Layout</h6> <ul className="layout-grid customizer-mix"> <li className="color-layout active" data-attr="light-only"> <div className="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div className="body"> <ul> <li className="bg-light sidebar"></li><li className="bg-light body"></li></ul> </div></li><li className="color-layout" data-attr="dark-sidebar"> <div className="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div className="body"> <ul> <li className="bg-dark sidebar"></li><li className="bg-light body"></li></ul> </div></li><li className="color-layout" data-attr="dark-only"> <div className="header bg-dark"> <ul> <li></li><li></li><li></li></ul> </div><div className="body"> <ul> <li className="bg-dark sidebar"></li><li className="bg-dark body"></li></ul> </div></li></ul> </div></div></div></div>
  )
}
