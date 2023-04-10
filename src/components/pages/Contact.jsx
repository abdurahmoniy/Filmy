import svg from '../assests/tv.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import { navContact } from '../consts'
import { styles } from '../style'

export default function Contact() {
  return (
    <div className='bgcon'>
      <div className={styles.padX}>
        <div className="flex">
          <div className="flex justify-between items-center py-2">
            <div className="text-[100px] md:text-[60px] text-mytext1 md:block hidden">FILMY</div>
            <img src={svg} alt="" className='md:hidden block w-[50px] my-1' />
            {
              navContact.map((item, i) => {
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
      </div>
    </div>
  )
}
