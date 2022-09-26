import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get("https://devapi.2gathers.com/api/events/list-events/?userId=5")
      .then(res => {
        console.log(res)
        setTableData(res.data.listOfHostEvents)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='container-fluid'>
      <nav class="navbar bg-light">
        <div class="container">
          <form class="d-flex" role="search">
            <h6 className='flex1'>EventName:Dev Event New Check Seats X1 </h6>
            <h6 className='flex2'>Hosted By:M You</h6>
            <input type="text" className='mr-4'/>
          </form>
        </div>
      </nav>
      <div className='container'>
        <tbody>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>EventName</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
          {tableData.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.hostFirstName}</td>
              <td>{item.eventName}</td>
              <td>{item.eventDescription}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  )
}

export default App
