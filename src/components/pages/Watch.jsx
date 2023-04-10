import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import svg from '../assests/tv.svg'
import { videos } from '../backend/consts'
import poster from '../assests/poster3.jpg'
import { styles } from "../style";
import Modal from '../Modal';
import { navWatch } from '../consts';

export default function Watch() {
  const [show, setShow] = useState(false);
  const [vdItem, setItem] = useState();

  function refreshPage() {
    window.location.reload(true);
  }

  return (
    <div className='bggreen'>
      <div className={styles.padX}>
        <div className="flex">
          <div className="flex justify-between items-center pt-8 md:py-2">
            <div className="text-[100px] md:text-[60px] text-mytext1 md:block hidden">FILMY</div>
            <img src={svg} alt="" className='md:hidden block w-[50px] my-1' />
            {
              navWatch.map((item, i) => {
                return (
                  <div className="px-4">
                    <Link key={i} to={item.path} className='shadw text-[40px] md:text-[20px] text-white
                      hover:text-mytext1 duration-300 hover:scale-110'>
                      <div className="flex items-center w-[90%]"> {item.title}</div>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* <div className="flex w-full bg-mybg1 text-mytext1 border-2 border-mytext1 py-2 cursor-pointer rounded my-4"
          onClick={refreshPage}>
          <i className='fas fa-info px-4 py-1'></i>
          <div className="mx-auto">Agar video o'zgarmayotgan bo'lsa sahifani yangilang yoki bu yerga bosing!</div>
        </div> */}
        <div className="block md:flex">
          <div className="w-full md:w-[70%] my-10 md:my-0">
            <img className={`${show ? 'hidden' : ''} rounded-2xl`} src={poster} />
            <Modal show={show} item={vdItem} onClose={() => setShow(false)} />
          </div>
          <div className={`${show ? 'hidden' : 'pgfont text-white mb-6 text-[30px]'} md:hidden block`}>Barcha qismlar to'liq o'zbek tilida👇</div>
          <div className="grid grid-cols-3 md:grid-cols-4 mx-auto w-[80%] md:w-[23%] text-[30px] md:text-[15px]">

            {
              videos.map(video => {
                let vidUrl = video.url;
                if (vidUrl != undefined) {
                  return (
                    <a
                      // href={`/watch/${video.id}`}
                      className='bg-mybg1 text-white w-[200px] md:w-[100px] m-1 py-1 text-center cursor-pointer hover:bg-mybg2 duration-300 hover:scale-105'
                      onClick={() => { setShow(true); setItem(video); }}
                    >
                      {video.short}
                    </a>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
