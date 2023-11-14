import React from 'react'

import c from "../util/img/icons8-law-50.png"
import l from "../util/img/icons8-lawyer-50.png"
import u from "../util/img/icons8-group-50.png"
import de from "../util/img/icons8-department-50.png"
import  nt from "../util/img/icons8-notification-50.png"
import mt  from "../util/img/icons8-meeting-48.png"

import bk  from "../util/img/icons8-booking-50.png"
import sr  from "../util/img/icons8-service-50.png"
import bn  from "../util/img/icons8-banner-50.png"
import fi  from "../util/img/icons8-files-50.png"
import td  from "../util/img/to-do-list-50.png"
import me  from "../util/img/icons8-messages-50.png"
import pe  from "../util/img/icons8-lock-48.png"
import dash  from "../util/img/icons8-dashboard-50.png"
import admin from "../util/img/-admin-50.png"
import sett from "../util/img/icons8-setting-50.png"
import filt from "../util/img/icons8-filter-50.png"
import his from "../util/img/icons8-history-50.png"
import search from "../util/img/icons8-search-30.png"
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className='flex w-full h-[100vh]'>
      <section className='  w-[16%] bg-blue-950'>
        <div className='flex justify-center items-center h-[10%] font-bold text-xl  text-white'>Admin</div>


        <div className='flex flex-col     text-white'>
            
              <div className=' menu'>
                <img alt='Dashboard' src={dash} />
                <div>Dashboard</div>
              </div>

              <div className=' menu'>
                <img alt='Lawyers' src={l} />
                <div>Lawyers</div>
              </div>

              <div className=' menu'>
                <img alt='Total users' src={u} />
                <div>Total users</div>
              </div>

              <div className=' menu'>
                <img alt='Cases' src={c} />
                <div>Cases</div>
              </div>

              <div className=' menu'>
              <img alt='Depart' src={de} />
                <div>Department</div>
              </div>

              <div className=' menu'>
                <img alt='Notification' src={nt} />
                <div>Notification</div>
              </div>

              <div className=' menu'>
                <img alt='Meetings' src={mt} />
                <div>Meetings</div>
              </div>

              <div className=' menu'>
                <img alt='Bookings' src={bk} />
                <div>Bookings</div>
              </div>

              <div className=' menu'>
                <img alt='Service' src={sr} />
                <div>Service</div>
              </div>

              <div className=' menu'>
                <img alt='Banners' src={bn} />
                <div>Banners</div>
              </div>

              <div className=' menu' >
              <img alt='Banners' src={fi} />
                <div>All files</div>
              </div>

              <div className=' menu'>
                <img alt='To-Do List' src={td} />
                <div>To-Do List</div>
              </div>

              <div className=' menu'>
                <img alt='Permissions' src={pe} />
                <div>Permissions</div>
              </div>

              <div className=' menu'>
                <img alt='Messages' src={me} />
                <div>Messages</div>
              </div>

             

              </div>
        
      </section>

      <section className=' w-full  ' >
<div className='grid grid-cols-2 h-28 items-center'>
  <span className='flex'>
  <img src={admin} className='h-16 rounded-full bg-blue-950 ml-2' alt="Admin Avatar" />
  <Link to="/"><span className='p-6 py-2 text-center pt-6 '>⬅️ BACK TO LOG IN</span></Link>

  </span>
 
  
  <section className='flex items-center justify-end'>
    <button>
      <img src={search} className="bg-blue-950 h-10 rounded-l-lg p-1" alt="Search" />
    </button>
    <input className='border border-gray-300 px-10 py-2 mr-6' placeholder='Search in admin panel....' />
   
    <div className='flex items-center space-x-2 p-5'>
      <span className='p-2 '>
        <img src={sett} className='h-7 ' alt="Settings" />
        Setting
      </span>
      <span className='p-2'>
        <img src={his} className='h-7' alt="History" />
        History
      </span>
      <span className='p-2'>
        <img src={filt} className='h-7' alt="Filter" />
        Filter
      </span>
    </div>
  </section>
</div>

      </section>


    </div>
  )
}

export default Dashboard






  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("https://schema.getpostman.com/json/collection/v2.0.0/collection.json");
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []); 