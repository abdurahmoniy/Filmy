import { styles } from "../style";
import svg from '../assests/tv.svg'
import React from 'react'
import { actors } from "../backend/actors";
import userimg from '../assests/user.png'

export default function Home() {

  return (
    <div className="">
      <div className='posterbg h-screen relative'>
        <div className={`${styles.container} ${styles.padX}`}>
          <a href='/' className="flex items-center py-2">
            <img src={svg} alt="" className='w-[100px] md:w-[70px] my-1' />
            <div className="text-[100px] md:text-[60px] text-mytext1 mx-4">FILMY</div>
          </a>
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
      </div>
      <div className="bg-text md:h-screen">
        <div className={`${styles.padX} block md:flex`}>

          <div className="actors md:w-[50%] md:block hidden">
            <div className="fontpa text-left my-2 text-[30px] md:text-[25px]">Asosiy Qahramonlar ></div>
            <div className="grid grid-cols-2">
              {
                actors.map((items) => (
                  <div className="w-[450px] md:w-[400px] flex text-left my-1">
                    <img src={`${items.img}`} className='m-1 w-[110px] md:w-[80px] h-[110px] md:h-[80px]' alt="" />
                    <div className="block px-2 my-2">
                      <div className="fontpa text-[30px] md:text-[20px] text-mytext1">
                        {items.name}
                      </div>
                      <div className="fontpa role text-[25px] md:text-[13px] text-gray-300">
                        {items.role}
                      </div>
                      <div className="eps text-[25px] md:text-[13px] text-gray-300">
                        {items.eps + '-ta qism'}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="block md:w-[50%]">
            <div className="py-8 md:py-0">
              <div className="fontpa text-left my-2 text-[25px]">Film haqida ></div>
              <div className=" text-left text-[25px] md:text-[15px] text-gray-100 font-[10]">
                Serial 5 ta fasldan iborat. Dastlabki 4 ta fasl 2005-yil 29-avgustdan 2009-yil 15-mayga qadar suratga olingan. Oxirgi 5-fasl 2017-yil 4-apreldan 30-maygacha suratga olingan. Serial ikki aka-uka haqida boʻlib, ulardan biri qotillikda ayblanib oʻlim jazosiga hukm qilinadi, ikkinchisi esa uni qutqarish uchun harakat qiladi.

                Serial voqelari ikki aka-uka: Lincoln Burrows va Michael Scofield atrofida aylanadi. Lincoln qilmagan gunohi uchun oʻlimga hukm etiladi. Michael esa puxta oʻylangan reja orqali akasining qamoqdan qochishiga va uning nomini oqlashga yordam bermoqchi boʻladi. Voqealar shu tarzda boshlanadi. Panjara ortida seriali 2003-yilda uzoq muddatga moʻljallangan kelishuv Fox tomonidan rasman rad etilgan. Ammo „Hayot-mamot“ va „24“ nomli seriallarning mashhurligidan keyin Foks 2004-yilda bu serialga qaytdi. Serialning birinchi fasli ijobiy qarshi olindi va reytinglarda yaxshi oʻrinni egalladi. „Panjara ortida“ serialining birinchi fasli, asllida 13 qismdan iborat boʻlishi kerak boʻlgan. Ammo serialning kutilmaganda mashhur boʻlishi qoʻshimcha yana 9 ta seria bilan kengaytirilgan. „Panjara ortida“ seriali ilk faslidayoq bir qancha sovrinlarni qoʻlga kiritdi. Xususan, 2005-yilda eng yaxshi televizion drama serial uchun beriladigan Oltin globus sovrinini, 2006-yilda odamlarning sevimli yangi dramasi sovrinini qoʻlga kiritdi. Bu serialning 5 fasli ham AQSh va butun dunyo boʻylab ommaga taqdim etildi.

                Serialning 1-fasli 2005-yil 29-avgustdan boshlab efirga uzatilgan va 2006-yil may oyida 1-fasl tugagan. 2-fasli esa 2006-yil avgustidan 2007-yil apreligacha efirga uzatilgan. 3-fasli 2007-yil sentabrdan 2008-yil fevraligacha hamda 4-fasli 2008-yil sentabrdan 2009-yil mayigacha efirga uzatilgan. Uzoq yaʼni 8 yillik tanaffusdan soʻng 2017-yilda serialning 5-fasli efir yuzini koʻradi. 2020-yil „Panjara ortida“ serialining 6-fasli efirga uzatish rejalashtirilgan. Bu fasl final yaʼni oxirgi fasli deyilayapti.
              </div>
            </div>
            <div className="py-8 md:py-0">
              <div className="fontpa text-left my-2 text-[25px]">Intervyu ></div>
              <iframe width="800" height="450" className="rounded-xl" src="https://www.youtube.com/embed/GkRJT6RP-Jg" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="fontpa text-leftmy-4 text-[50px]">Asosiy Qahramonlar ></div>
            <div className="">
              {
                actors.map((items) => (
                  <div className="w-[100%] flex text-left my-4">
                    <img src={`${items.img}`} className='m-1 rounded-full w-[300px] h-[300px] object-cover' alt="" />
                    <div className="flex px-2 my-2 items-center">
                      <div className="block">
                        <div className="fontpa text-[50px] text-mytext1">
                          {items.name}
                        </div>
                        <div className="fontpa role text-[30px] text-gray-300">
                          {items.role}
                        </div>
                        <div className="eps text-[30px] text-gray-300">
                          {items.eps + '-ta qism'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-16 bg-green-800 text-mytext1 py-4">
        <div className="md:flex hidden justify-between items-center">
          <div className="text-[50px] md:text-[30px]">Bog'lanish</div>
          <div className="text-[35px] md:text-[25px]">filmy@example.com</div>
          <div className="mx-4">
            <a href="https://instagram.com/abdurakhmoniy">
              <i className="fa-brands fa-instagram fa-3x mx-2"></i>
            </a>
            <a href="https://t.me/abdurahmoniy">
              <i className="fa-brands fa-telegram fa-3x"></i>
            </a>
          </div>
        </div>
        <div className="flex justify-between md:hidden items-center">
          <div className="">
            <div className="text-[50px] md:text-[30px]">Biz bilan bog'lanish</div>
            <div className="text-[35px] md:text-[25px]">filmy@example.com</div>
          </div>
          <div className="mx-4">
            <a href="https://instagram.com/abdurakhmoniy">
              <i className="fa-brands fa-instagram fa-3x mx-2"></i>
            </a>
            <a href="https://t.me/abdurahmoniy">
              <i className="fa-brands fa-telegram fa-3x"></i>
            </a>
          </div>
        </div> 
        <hr className="my-4" />
        <div className="flex items-center justify-center">
          <a href='/' className="flex py-2">
            <img src={svg} alt="" className='w-[80px] my-1' />
            <div className="text-[100px] md:text-[60px] text-mytext1 mx-4">FILMY</div>
          </a>
        </div>
      </div>
    </div>
  )
}