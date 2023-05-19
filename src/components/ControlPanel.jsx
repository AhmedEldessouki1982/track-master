import React from 'react';
import CalendarIcon from '@rsuite/icons/Calendar';
import NoticeIcon from '@rsuite/icons/Notice';
import GridIcon from '@rsuite/icons/Grid';
import ShareOutlineIcon from '@rsuite/icons/ShareOutline';

//rsuite icons styling fuction
  const Calender =({color, size}) => <CalendarIcon style={{ color, fontSize: size, cursor:'pointer'}}/>
  const Notice =({color, size}) => <NoticeIcon style={{ color, fontSize: size, cursor:'pointer' }}/>
  const Menu =({color, size}) => <GridIcon style={{ color, fontSize: size, cursor:'pointer', }}/>
  const Share =({color, size}) => <ShareOutlineIcon style={{ color, fontSize: size, cursor:'pointer', }}/>

function ControlPanel() {
  return (
    <div className='absolute px-5 py-2 bottom-8 rounded-xl w-full h-16 bg-white before:w-20 before:h-20 before:bg-[#010026] before:absolute before:rounded-full before:left-2/4 before:-translate-x-1/2 before:bottom-9'>
        <button className='absolute w-16 h-16 bg-yellow rounded-full text-6xl left-2/4 -translate-x-1/2 bottom-10'>+</button>
       
        <section className='flex flex-row justify-between'>
          <div className='flex gap-10'>
              <Calender color = {"#010026"} size={"50px"} />
              <Notice color = {"#010026"} size={"50px"} />
          </div>

          <div className='flex gap-10'>
              <Menu color = {"#010026"} size={"50px"} />
              <Share color = {"#010026"} size={"50px"} />
          </div >
        </section>
    </div>
  )
}

export default ControlPanel