import React, { useState } from 'react'
import svg from '../assests/tv.svg'
import { videos } from '../backend/consts'
import poster from '../assests/poster3.jpg'
import { styles } from "../style";
import Modal from '../Modal';

export default function Watch() {
  const [show, setShow] = useState(false);
  const [vdItem, setItem] = useState();

  return (
    <div className='bggreen md:h-screen'>
      <div className=''>
        <div className="flex px-6 md:px-16">
          <a href='/' className="flex justify-between items-center pt-8 md:py-2">
            <img src={svg} alt="" className='w-[100px] md:w-[70px] my-1' />
            <div className="text-[100px] md:text-[60px] text-mytext1 ">FILMY</div>
          </a>
        </div>
        <div className="block md:flex">
          <div className="w-[100%] md:w-[70%] my-10 md:my-0 px-0 md:px-16">
            <img className={`${show ? 'hidden' : ''} md:rounded-2xl`} src={poster} />
            <Modal show={show} item={vdItem} onClose={() => setShow(false)} />
          </div>
          <div className={`${show ? 'hidden' : 'pgfont text-white mb-6 text-[30px]'} md:hidden block px-6 md:px-16`}>Barcha qismlar to'liq o'zbek tilida👇</div>
          <div className="grid grid-cols-3 md:grid-cols-4 mx-auto w-[80%] md:w-[23%] text-[30px] md:text-[15px]">

            {
              videos.map((video, id) => {
                
                  return (
                    <a
                    key={id}
                      className='bg-mybg1 text-white w-[200px] md:w-[100px] m-1 py-1 text-center cursor-pointer hover:bg-mybg2 duration-300 hover:scale-105'
                      onClick={() => { setShow(true); setItem(video); }}
                    >
                      {video.short}
                    </a>
                  )
                
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
