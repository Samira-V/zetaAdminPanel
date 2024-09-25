import React, { useState } from 'react';
import { Button } from '@mui/base/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { IoClose } from "react-icons/io5";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import './Topbar.css'
import TopbarIcon from '../logo';
export default function Topbar(props) {



  const [anchorel, setAnchorel] = useState(null);
  const [anchorNotification, setAnchorNotification] = useState(false);
  const [isOpenShoppingDrop, setIsOpenShoppingDrop] = useState(false);
  const [count, setCount] = useState(1)
  const openMyAcc = Boolean(anchorel);
  const openNotification = Boolean(anchorNotification);
  const openShoppingDrop = Boolean(isOpenShoppingDrop);


  const handleClick = (event) => {
    setAnchorel(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorel(null);
  };
  const handleNotificationClose = () => {
    setAnchorNotification(false);
  };
  const handleNotificationOpen = () => {
    setAnchorNotification(true);
  };
  const handleShoppingClose = () => {
    setIsOpenShoppingDrop(false);
  };
  const handleShoppingOpen = () => {
    setIsOpenShoppingDrop(true);
  };
  const AddCount = () => {
    setCount(prev => prev + 1)
  }
  const MinusCount = () => {
    setCount(prev => prev - 1)
  }
  const PageHandler = ()=>{
console.log('full')
  }
 

 
  return (
    <div className='topbar' >
      <div className="topbarWrapper">
      <div className="topbar-left">
        <TopbarIcon onClick={PageHandler}/>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" className="search-box" placeholder="Search here..." />
        </div>
      </div>
      <div className="topbar-right">
        <Stack spacing={2} direction="row">
          <Button
            className='topbar-btn'
            onClick={props.switchTheme}
          >
            <DarkModeOutlinedIcon className='topbar-icon' sx={{ fontSize: 30, stroke: "#ffffff", strokeWidth: 0.8 }} />
          </Button>

          <Button className='topbar-btn' onClick={handleShoppingOpen}>
            <Badge badgeContent={2} className='shopping-badge'  >
              <AddShoppingCartRoundedIcon className='topbar-icon' sx={{ fontSize: 30, stroke: "#ffffff", strokeWidth: 0.8 }} />
            </Badge>
          </Button>
          <Menu
            anchorE1={isOpenShoppingDrop}
            className='shoppingDrop dropdown-box'
            id="shoppingDrop"
            open={openShoppingDrop}
            onClose={handleShoppingClose}
            onClick={handleShoppingClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <div className="notification-header-wrapper">

              <svg className='notif-svg'
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="800"
                fill="#000"
                version="1.1"
                viewBox="0 0 537.671 537.671"
                xmlSpace="preserve"
              >
                <path d="M259.698 193.234c0 4.591 1.972 11.353 19.023 17.036 7.242 2.414 29.28 9.76 29.28 31.267 0 14.869-10.308 27.369-24.151 30.747v3.213c0 4.143-3.358 7.5-7.5 7.5s-7.5-3.357-7.5-7.5v-3.213c-13.844-3.378-24.152-15.878-24.152-30.747 0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5c0 9.183 7.47 16.652 16.652 16.652s16.651-7.47 16.651-16.652c0-5.289-2.26-11.449-19.023-17.036-19.429-6.477-29.28-16.996-29.28-31.267 0-14.868 10.308-27.368 24.152-30.746v-3.213c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v3.213c13.843 3.378 24.151 15.878 24.151 30.746 0 4.143-3.358 7.5-7.5 7.5s-7.5-3.357-7.5-7.5c0-9.182-7.47-16.651-16.651-16.651s-16.652 7.469-16.652 16.651zM537.671 86.575v261.621a7.5 7.5 0 01-7.5 7.5h-7.529v42.903a7.505 7.505 0 01-2.465 5.56 7.505 7.505 0 01-5.776 1.903l-21.816-2.166v47.2a7.5 7.5 0 01-9.08 7.332L6.004 355.546l-.038-.008-.045-.01c-.113-.024-.221-.058-.332-.087-.085-.022-.172-.041-.256-.066-.103-.031-.203-.069-.305-.104l-.112-.04c-.075-.027-.151-.05-.225-.08l-.053-.022c-.091-.038-.18-.082-.269-.123-.094-.043-.189-.082-.281-.129-.023-.012-.045-.026-.068-.039l-.01-.005c-.085-.045-.167-.093-.25-.141-.083-.048-.167-.092-.247-.143-.038-.024-.074-.051-.112-.076-.073-.047-.144-.098-.215-.147-.071-.05-.144-.099-.213-.152-.048-.036-.094-.075-.141-.113a6.869 6.869 0 01-.186-.153c-.059-.051-.119-.101-.177-.153-.056-.05-.109-.104-.163-.156-.054-.052-.108-.102-.16-.155l-.139-.147c-.061-.066-.12-.135-.179-.204-.046-.053-.094-.103-.138-.157-.036-.044-.069-.09-.104-.135a7.915 7.915 0 01-.174-.235c-.039-.055-.082-.106-.12-.162-.03-.045-.056-.092-.086-.138a7.134 7.134 0 01-.156-.253c-.036-.061-.075-.121-.109-.184l-.09-.171a8.164 8.164 0 01-.298-.64 6.225 6.225 0 01-.161-.44c-.026-.076-.052-.151-.075-.229l-.043-.15c-.028-.099-.05-.2-.073-.301-.019-.081-.041-.161-.057-.243l-.02-.106c-.023-.127-.039-.257-.055-.387-.01-.076-.024-.15-.032-.227l-.005-.055a7.718 7.718 0 01-.032-.684V86.575a7.5 7.5 0 017.5-7.5h522.671a7.5 7.5 0 017.5 7.5zm-85.328 254.121c3.552-37.141 33.187-66.776 70.328-70.328V164.402c-37.141-3.552-66.776-33.187-70.328-70.328H85.328C81.776 131.216 52.141 160.851 15 164.402v105.966c37.141 3.552 66.776 33.187 70.328 70.328h367.015zm-382.108 0c-3.43-28.86-26.375-51.805-55.235-55.235v55.235h55.235zm0-246.621H15v55.235c28.86-3.431 51.805-26.375 55.235-55.235zm452.436 0h-55.235c3.43 28.86 26.375 51.805 55.235 55.235V94.075zm-45.087 308.332L138.413 368.73l339.172 73.078v-39.401zm30.058-46.711H158.943l348.699 34.622v-34.622zm15.029-15v-55.235c-28.86 3.43-51.805 26.375-55.235 55.235h47.687l.019-.001.019.001h7.51zM347.199 158.504a7.5 7.5 0 00-1.822 10.449c10.001 14.227 15.288 30.974 15.288 48.432 0 46.491-37.824 84.315-84.315 84.315-46.492 0-84.316-37.824-84.316-84.315s37.824-84.315 84.316-84.315c17.459 0 34.208 5.287 48.435 15.29a7.496 7.496 0 0010.449-1.821 7.5 7.5 0 00-1.821-10.449c-16.767-11.788-36.499-18.02-57.063-18.02-54.763 0-99.316 44.553-99.316 99.315S221.587 316.7 276.35 316.7c54.763 0 99.315-44.553 99.315-99.315 0-20.563-6.23-40.293-18.018-57.059-2.38-3.388-7.059-4.202-10.448-1.822z"></path>
              </svg>


              <h4 className='notification-box-header'>Carts</h4>

            </div>
            <Divider />
            <div className="drops-items">

              <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex align-items-start  ">
                  <div className="d-flex pe-3">
                    <img src="tshirt1.webp" alt="" className='avatar align-items-center' />
                  </div>
                  <div className="text ms-2 mt-2 d-flex flex-column justify-content-between">
                    <h5 className='title '>White shirt</h5>
                    <span className='price'>$300</span>

                    <div className="d-flex justify-content-between align-items-center w-100 gap-4  ">
                      <div className='count'>
                        <AddIcon onClick={AddCount}></AddIcon>{count}
                        <RemoveIcon onClick={MinusCount} />
                      </div>

                      <div className="">
                        < DriveFileRenameOutlineIcon className='m-2' />
                        <DeleteOutlineIcon className='m-2' />
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>


              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex align-items-start  ">
                  <div className="d-flex pe-3">
                    <img src="tshirt1.webp" alt="" className='avatar align-items-center' />
                  </div>
                  <div className="text ms-2 mt-2 d-flex flex-column justify-content-between">
                    <h5 className='title '>White shirt</h5>
                    <span className='price'>$300</span>

                    <div className="d-flex justify-content-between align-items-center w-100 gap-4  ">
                      <div className='count'>
                        <AddIcon onClick={AddCount}></AddIcon>{count}
                        <RemoveIcon onClick={MinusCount} />
                      </div>

                      <div className="">
                        < DriveFileRenameOutlineIcon className='m-2' />
                        <DeleteOutlineIcon className='m-2' />
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex align-items-start  ">
                  <div className="d-flex pe-3">
                    <img src="tshirt1.webp" alt="" className='avatar align-items-center' />
                  </div>
                  <div className="text ms-2 mt-2 d-flex flex-column justify-content-between">
                    <h5 className='title '>White shirt</h5>
                    <span className='price'>$300</span>

                    <div className="d-flex justify-content-between align-items-center w-100 gap-4  ">
                      <div className='count'>
                        <AddIcon onClick={AddCount}></AddIcon>{count}
                        <RemoveIcon onClick={MinusCount} />
                      </div>

                      <div className="">
                        < DriveFileRenameOutlineIcon className='m-2' />
                        <DeleteOutlineIcon className='m-2' />
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex align-items-start  ">
                  <div className="d-flex pe-3">
                    <img src="tshirt1.webp" alt="" className='avatar align-items-center' />
                  </div>
                  <div className="text ms-2 mt-2 d-flex flex-column justify-content-between w-100">
                    <h5 className='title '>White shirt</h5>
                    <span className='price'>$300</span>

                    <div className="d-flex justify-content-between align-items-center w-100 gap-4  ">
                      <div className='count'>
                        <AddIcon className="count-btn" onClick={AddCount}></AddIcon>{count}
                        <RemoveIcon className="count-btn" onClick={MinusCount} />
                      </div>

                      <div>
                        < DriveFileRenameOutlineIcon />
                        <DeleteOutlineIcon />
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </MenuItem>
            </div>
          </Menu>

          <Button className='topbar-btn'>
            <BookmarkBorderRoundedIcon className='topbar-icon' sx={{ fontSize: 30, stroke: "#ffffff", strokeWidth: 0.8 }} />
          </Button>
          <div className="notificationWrapper notification">
            <Button className='topbar-btn' onClick={handleNotificationOpen}>
              <Badge badgeContent={4} className='notification-badge' >


                <NotificationsNoneRoundedIcon className='topbar-icon' sx={{ fontSize: 30, stroke: "#ffffff", strokeWidth: 0.8 }} />


              </Badge>
            </Button>
          </div>

          <Menu
            anchore1={anchorNotification}
            className='notification dropdown-box'
            id="notification"
            open={openNotification}
            onClose={handleNotificationClose}
            onClick={handleNotificationClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >


            <div className="notification-header-wrapper">

              <svg className='notif-svg'
                xmlns="http://www.w3.org/2000/svg"
                width="800"
                height="800"
                fill="#000"
                version="1.1"
                viewBox="0 0 611.999 611.999"
                xmlSpace="preserve"
              >
                <path d="M570.107 500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203C381.969 34 347.883 0 306.001 0c-41.883 0-75.968 34.002-76.121 75.849-70.682 29.804-120.425 99.801-120.425 181.203v84.578c-.046 3.181-2.522 129.251-67.561 158.622a17.257 17.257 0 007.103 32.986h164.88c3.38 18.594 12.172 35.892 25.619 49.903 17.86 18.608 41.479 28.856 66.502 28.856 25.025 0 48.644-10.248 66.502-28.856 13.449-14.012 22.241-31.311 25.619-49.903h164.88a17.26 17.26 0 0016.872-13.626 17.25 17.25 0 00-9.764-19.358zm-85.673-60.395c6.837 20.728 16.518 41.544 30.246 58.866H97.32c13.726-17.32 23.407-38.135 30.244-58.866h356.87zM306.001 34.515c18.945 0 34.963 12.73 39.975 30.082-12.912-2.678-26.282-4.09-39.975-4.09s-27.063 1.411-39.975 4.09c5.013-17.351 21.031-30.082 39.975-30.082zM143.97 341.736v-84.685c0-89.343 72.686-162.029 162.031-162.029s162.031 72.686 162.031 162.029v84.826c.023 2.596.427 29.879 7.303 63.465H136.663c6.88-33.618 7.286-60.949 7.307-63.606zm162.031 235.749c-26.341 0-49.33-18.992-56.709-44.246h113.416c-7.379 25.254-30.364 44.246-56.707 44.246z"></path>
                <path d="M306.001 119.235c-74.25 0-134.657 60.405-134.657 134.654 0 9.531 7.727 17.258 17.258 17.258 9.531 0 17.258-7.727 17.258-17.258 0-55.217 44.923-100.139 100.142-100.139 9.531 0 17.258-7.727 17.258-17.258-.001-9.532-7.728-17.257-17.259-17.257z"></path>
              </svg>


              <h4 className='notification-box-header'>Notifications</h4>

            </div>
            <Divider />
            <div className="drops-items">

              <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex ">
                  <div className="user-avatar pe-3">
                    <span className='avatar-bg'>
                    </span>
                    <img src="1.webp" alt="" className='avatar' />
                  </div>
                  <div className="notif-text d-flex align-items-end justify-space-between">
                    <div className="text">
                      <h5 className='title'>Arsan Atashzar</h5>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>

                  </div>
                  <div className="close">
                    <Button className='closeIcon'>< IoClose /></Button>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex ">
                  <div className="user-avatar pe-3">
                    <span className='avatar-bg'>
                    </span>
                    <img src="2.webp" alt="" className='avatar' />
                  </div>
                  <div className="notif-text d-flex align-items-end justify-space-between">
                    <div className="text">
                      <h5 className='title'>Hamed Atashzar</h5>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <span className='time '>19:15</span>
                  </div>
                  <div className="close">
                    <Button className='closeIcon'>< IoClose /></Button>
                  </div>
                </div>
              </MenuItem>
              <Divider />   <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex ">
                  <div className="user-avatar pe-3">
                    <span className='avatar-bg'>
                    </span>
                    <img src="3.webp" alt="" className='avatar' />
                  </div>
                  <div className="notif-text d-flex align-items-end justify-content-between">
                    <div className="text">
                      <h5 className='title'>Hamed Atashzar</h5>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <span className='time'>19:15</span>
                  </div>
                  <div className="close">
                    <Button className='closeIcon'>< IoClose /></Button>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <div className="drop-wrapper d-flex ">
                  <div className="user-avatar pe-3">
                    <span className='avatar-bg'>
                    </span>
                    <img src="4.webp" alt="" className='avatar' />
                  </div>
                  <div className="notif-text d-flex aligns-items-end ">
                    <div className="text">
                      <h5 className='title'>Hamed Atashzar</h5>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    </div>
                    <span className='time '>19:15</span>
                  </div>
                  <div className="close">
                    <Button className='closeIcon'>< IoClose /></Button>
                  </div>
                </div>
              </MenuItem>
            </div>
          </Menu>


          <Button className='topbar-btn'>
            <FullscreenRoundedIcon className='topbar-icon' sx={{ fontSize: 30, stroke: "#ffffff", strokeWidth: 0.8 }} />
          </Button>

          <Button className='topbar-btn' onClick={handleClick}>
            <PeopleOutlineRoundedIcon className='topbar-icon' sx={{ fontSize: 30, stroke: "#ffffff", strokeWidth: 0.8 }} />
          </Button>
        </Stack>
        <Menu
          anchorel={anchorel}

          id="account-menu"
          open={openMyAcc}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >

          <MenuItem onClick={handleClose}>
            <PermIdentityIcon className='menuItem-icon' /> My Account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            < MailOutlineIcon className='menuItem-icon' /> Inbox
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AssignmentOutlinedIcon className='menuItem-icon' fontSize="small" />
            </ListItemIcon>
            Taskboard
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings className='menuItem-icon' fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout className='menuItem-icon' fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>

      </div>
    </div>
  )
}
