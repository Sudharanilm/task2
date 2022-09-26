import React, { useEffect, useState } from 'react'
import pic from "./logo/logo_trans.png";
import axios from 'axios'
import './index.css';

const App = () => {
  const [tableData, setTableData] = useState([]);

  //hii am using this comment as a  testing purpose on git hub

  useEffect(() => {
    axios.get("https://devapi.2gathers.com/api/events/list-events/?userId=5")
      .then(res => {
        console.log(res)
        setTableData(res.data.listOfHostEvents)
        res.data.listOfHostEvents.forEach(item => {
          item.assignBoxes.forEach(name => {
            let BOXNAME = name.boxName
            console.log('the itemsis', BOXNAME)
          })
          // let name=item.assignBoxes

        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='container text-left my-4 bg-light'>
      <div className='card-group'>
        {
          tableData.map(item =>

            <span className='flex-row' key={item.eventId}>

              <div className='card border-6 border-secondary d-inlne-flex' style={{ width: "15rem", height: "auto" }}>
                <div className='card rounded-bottm'>
                  <img src={pic} alt="logo" className='h-50 p-4' />
                </div>
                <div className='d-flex'>
                  <div className="text-left inline-flex" style={{ width: "14.7rem", height: "auto", border: "none" }}>
                    <span className='float-right'>{item.eventStartDate}</span>
                    <h6 className="card-title h5 d-block text-dark p-1">{item.eventName}</h6>
                    <p>{item.eventName}</p>
                    <p className="card-text d-print-none">{item.eventDescription}</p><h />
                    <div className="w3-show-inline-block">
                      <div className="button">
                        <span className="bar1">ADD PRATICIPANTS</span>
                      </div>
                      <div className='button'>
                        <span className="bar2">WATCHEVENT</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </span>)
        }
      </div>
    </div>
    // <div className='container-fluid'>
    //   <nav className="navbar bg-light">
    //     <div className="container">
    //       <form className="d-flex" role="search">
    //         <h6 className='flex1'>EventName:Dev Event New Check Seats X1 </h6>
    //         <h6 className='flex2'>Hosted By:M You</h6>
    //         <input type="text" placeholder='search' className='mr-4' />
    //       </form>
    //     </div>
    //   </nav>
    //   <div className='container'>
    //     {/* <tbody> */}
    //       <tr>
    //         <th>S.NO</th>
    //         <th>Name</th>
    //         <th>EventName</th>
    //         <th>Description</th>
    //         <th>Location</th>
    //       </tr>
    //       {tableData.map((item, i) => (
    //         <tr key={i}>
    //           <td>{i + 1}</td>
    //           <td>{item.hostFirstName}</td>
    //           <td>{item.eventName}</td>
    //           <td>{item.eventDescription}</td>
    //           <td>{item.location}</td>
    //         </tr>
    //       ))}
    //     {/* </tbody> */}
    //   </div>
    // </div>
  )
}
export default App;


/* <Base/> */
/* <div className='container text-left my-4 bg-light'>
<div className='card-group'>
  {
    tableData.map(item => <span className='flex-row' key={item.eventId}>
      <div className='card border-6 border-secondary d-inlne-flex' style={{ width: "15rem", height: "auto"}}>
        <div className='card rounded-bottm'>
          <img src={pic} alt="logo" className='h-50 p-4' />
        </div>
        <div className='d-flex'>
          <div className="text-left inline-flex" style={{ width: "14.7rem", height: "auto" ,border:"none"}}>
  <span className='float-right'>{item.eventStartDate}</span>
            <h6 className="card-title h5 d-block text-dark p-1">{item.eventName}</h6>
            <p className="card-text d-print-none">{item.eventDescription}</p><h />
            <div className="w3-show-inline-block">
              <div className="button">
                <span className="bar1">ADD PRATICIPANTS</span>
                </div>
                <div className='button'>
                  <span className="bar2">WATCHEVENT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </span>)
  }
</div>
</div> */