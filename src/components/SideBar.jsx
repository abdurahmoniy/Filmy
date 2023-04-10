// import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Drawer, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UnorderedListOutlined,
  InfoCircleFilled,
  PlayCircleOutlined,
  LinkOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined
} from "@ant-design/icons";
import logo from './assests/tv.svg'
import Content from './Content'
import { navLink } from './consts';
import SubMenu from 'antd/es/menu/SubMenu';
import { useState } from 'react';
import svg from './assests/tv.svg'


export default function AppHead() {
  const [openMenu, setopenMenu] = useState(false)
  const [size, setsize] = useState(false)

  const defaultSize = () => {
    setsize('default');
    setopenMenu(true)
  }

  const largeSize = () => {
    setsize('large');
    setopenMenu(true)
  }

  return (
    <div className="text-[48px] md:text-[30px]">
      {/* <Drawer
        placement='left'
        open={openMenu}
        bodyStyle={{
          backgroundColor:'#5cdb95'
        }}
        size={size}
        closable={false}
        onClose={() => {
          setopenMenu(false);
        }}
      >
        <Menu
          className='bg-transparent'
        >
          {
            navLink.map((item, i) => {
              return (
                <div className="">
                  <Link key={i} to={item.path} className='shadw my-6 md:my-2 px- 
                  rounded-xl md:rounded flex justify-between text-[40px] md:text-[20px]
                  text-mybg1 h-[120px] md:h-[50px] border-none
                  hover:text-mybg1 duration-300'>
                    <div className="flex items-center w-[90%]"> {item.title}</div>
                    <div className="flex justify-center items-center w-[10%]">
                      <i className={`${item.icon}`}></i>
                    </div>
                  </Link>
                  <div className="border-b border-mybg1"></div>
                </div>
              )
            })
          }
        </Menu>
      </Drawer> */}

      {/* <div className="flex items-center py-2">
        <div className="text-[100px] md:text-[60px] text-mytext1 md:block hidden">FILMY</div>
        <img src={svg} alt="" className='md:hidden block w-[50px] my-1' />
        <div className="flex w-[25%]">
          {
            navLink.map((item, i) => {
              return (
                <div className="px-4">
                  <Link key={i} to={item.path} className='shadw text-[40px] md:text-[20px] text-white
                    hover:text-mytext1 duration-300'>
                    <div className="flex items-center w-[90%]"> {item.title}</div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div> */}
    </div>
  )
}
// import React, { useState } from 'react'
// import { navLink } from './consts'
// import { styles } from './style'

// export default function Header() {
//   const [toggle, setToggle] = useState(false);
//   const [active, setActive] = useState('home');

//   const toggleMenu = () => setToggle(prev => !prev);
//   const activeNav = id => setActive(id);

//   return (
//     <>
//       <div className="w-full py-1 flex justify-between items-center">
//         <div className={`${styles.header}`}>FILMY</div>
//         <ul className='list-none sm:flex hidden justify-center items-center'>
//           {navLink.map((nav, idx) => (
//             <li key={nav.id} className={
//               `font-myfont font-normal cursor-pointer text-[18px] text-mylight 
//               hover:text-myteal translate-all duration-300
//               ${idx === navLink.length - 1 ? 'mr-0' : 'mr-10'}
//               ${active === nav.id ? "text-myteal border-b-myteal border-b-2" : "text-mylight"}
//             `}
//               onClick={() => activeNav(nav.id)}
//             ><a href={`${nav.path}`}>{nav.title}</a></li>
//           ))}
//         </ul>
//         <div className="hidden md:block">
//           <a href='https://www.jotform.com/230601655621448' className={`py-3 px-4 font-myfont font-medium 
//             text-[16px] bg-myteal text-mylight rounded-[8px] outline-none`}>Contact me</a>
//         </div>


//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <i className={`${toggle ? 'fas fa-x fa-2x' : 'fas fa-bars fa-2x'} object-contain text-mylight`} onClick={toggleMenu}></i>
//           <div className={`${!toggle ? "hidden" : "block"} p-6 absolute top-20 right-0 left-0 w-full sidebar shadow-md `}>
//             <ul className='list-none sm:hidden block justify-center items-center flex-1'>
//               {navLink.map((nav, idx) => (
//                 <li key={nav.id} className={
//                   `font-myfont font-normal cursor-pointer text-[16px] text-mylight 
//               hover:text-myteal translate-all duration-300
//               ${idx === navLink.length - 1 ? 'mr-0' : 'mr-10'}
//               ${active === nav.id ? "text-mytext1 border-b-myteal border-b-2" : "text-mylight"}
//             `} onClick={() => activeNav(nav.id)}>
//                   <a href={`${nav.path}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* <SideBar/> */}
//     </>
//   )
// }


// export default function SideBar(){
//   const [openMenu, setopenMenu] = useState(false)
//   return(
//     <div style={{
//       height:'100vh',
//       backgroundColor:'lightblue'
//     }}>
//       <div className="md:hidden" style={{backgroundColor:'darkorange', height:60, paddingLeft:12,}}>
//         <div onClick={()=>{
//             setopenMenu(true)
//           }}
//           style={{color: 'white', fontSize: 30, width: 60}} >
//           <MenuOutlined />
//         </div>
//       </div>
//       <span className='hidden md:block'>
//         <AppHead/>
//       </span>
//       <Drawer 
//       className='md:hidden'
//       placement='left'
//        open={openMenu}
//        closable={false}
//        bodyStyle={{backgroundColor:'darkorange'}}
//        onClose={()=>{
//         setopenMenu(false);
//        }}>
//         <AppHead isInline/>
//       </Drawer>
//     </div>
//   )
// }


// export default
// function SideBar() {

//   const [collapsed, setCollapsed] = useState(true);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   const navigate = useNavigate();
//   return (
//     <div className="">
//       <div className={`flex justify-between w-full ${styles.padX} bg-mybg1 py-2`}>
//         <div className={`rounded text-center flex`}>
//           <a href='/' className={`flex justify-center`}>
//             <img src={logo} alt="" className='w-[80px] md:w-[35px]' />
//           </a>
//           <div className={`w-full my-1`}>
//             <a href='/' className={`text-mytext1 text-[60px] md:text-[25px]`}>
//               <i className='fas fa-f'></i>
//               <i className='fas fa-i px-1'></i>
//               <i className='fas fa-l'></i>
//               <i className='fas fa-m px-1'></i>
//               <i className='fas fa-y'></i>
//               {/* FILMY */}
//             </a>
//           </div>
//         </div>
//         <div className="hidden md:block"></div>
//         <Button
//           className='my-6 md:my-1 bg-mytext1 text-mybg1 text-[30px] md:text-[15px] w-[80px] h-[55px] md:w-auto md:h-[30px]'
//           // className={` absolute border-none my-3 ${collapsed ? 'rounded-l-none left-[58px] top-0 bg-mybg11 bg-mytext1' : 'top-0 left-[208px] bg-mytext1 text-mybg1'}`}
//           onClick={toggleCollapsed}
//         >
//           {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//         </Button>
//       </div>
//       <div className="flex">
//         <div className={`bg-mybg1 min-h-screen`}>
//           <Menu
//             inlineCollapsed={collapsed}
//             className={`h-screen text-[35px] md:text-[15px] ${collapsed ? 'w-[100px]' : 'w-[350px] absolute ss:w-[250px] ss:relative'}`}
//             onClick={({ key }) => {
//               if (key === "signout") {
//                 //SIGNOUT
//               } else {
//                 navigate(key);
//               }
//             }}
//             theme='dark'
//             mode="inline"
//             defaultSelectedKeys={[window.location.pathname]}
//             items={[

//               {
//                 label: "Home",
//                 key: "/",
//                 icon: <HomeOutlined />
//               },
//               {
//                 label: "Watch",
//                 key: "/watch",
//                 icon: <PlayCircleOutlined />,
//               },
//               {
//                 label: "About",
//                 key: "/userslist",
//                 icon: <UnorderedListOutlined />,
//                 children: [
//                   { label: 'About Film', key: '/aboutfilm', icon: <InfoCircleFilled /> },
//                   { label: 'About Actors', key: '/aboutactors', icon: <UserOutlined /> }
//                 ]
//               },
//               {
//                 label: "Contact",
//                 key: "/contact",
//                 icon: <LinkOutlined />,
//               },
//             ]}
//           />
//         </div>
//         <Content />
//       </div>

//     </div>


//   )
// }