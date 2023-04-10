import { styles } from "../style";
import svg from '../assests/tv.svg'
import React from 'react'

export default function Home() {

  return (
    <div className="">
      <div className='posterbg h-screen relative'>
        <div className={`${styles.container} ${styles.padX}`}>
          <div className="flex items-center py-2">
            <img src={svg} alt="" className='md:hidden block w-[80px] my-1' />
            <div className="text-[100px] md:text-[60px] text-mytext1 mx-4">FILMY</div>
          </div>
        </div>
        <div className={`${styles.padX} py-0 md:py-40 anim flex items-end absolute md:relative bottom-96 md:bottom-0`}>
          <div className="">
            <div className="text-white text-[150px] md:text-[130px] pgfont block">
              <div className="">PANJARA</div>
              <div className="">ORTIDA</div>
            </div>
            <div className="text-white my-6 text-[30px] md:text-[18px]">
              Panjara ortida (inglizcha: Prison Break; asl tarjimasi: Qamoqdan qochish) <br /> Amerika teleseriali. Rejissor — Paul Scheuring.
            </div>
            <div className="py-4 block md:flex text-[35px] md:text-[15px]">
              <div className="">
                <a href="/watch" className="bg-mytext1 py-4 px-8 rounded-lg md:rounded">▶️ Hozir ko'rish</a>
              </div>
              <div className="my-10 md:my-0">
                <a href="https://www.youtube.com/embed/JZT51p03cms" target="_blank" className="bg-gray-300 py-4 px-12 md:px-8 rounded-lg md:rounded mx-0 md:mx-4">🎞 Treyler</a>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>"Panjara Ortida" serialining barcha qismlari to'liq o'zbek tilida HD formatda.</h1>
        <Carousel autoplay>
          <div>
            <a href='/watch' className='h-[50vh] bg-mybg1 text-white flex items-center justify-center w-full'>
              <img src={se1} alt="" className='w-full'/>
            </a>
          </div>
          <div>
            <a href='/watch' className='h-[50vh] bg-mybg1 text-white flex items-center justify-center w-full'>
              <img src={se2} alt="" className='w-full'/>
            </a>
          </div>
          <div>
            <a href='/watch' className='h-[50vh] bg-mybg1 text-white flex items-center justify-center w-full'>
              <img src={se3} alt="" className='w-full'/>
            </a>
          </div>
          <div>
            <a href='/watch' className='h-[50vh] bg-mybg1 text-white flex items-center justify-center w-full'>
              <img src={se4} alt="" className='w-full'/>
            </a>
          </div>
        </Carousel> */}
      </div>
      <div className="h-screen">

      </div>
    </div>
  )
}