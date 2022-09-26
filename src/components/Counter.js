import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import './Counter.css'

const Counter = () => {
    const [userData, setUserData] = useState([])
    // const [first, setFirst] = useState()

    useEffect(() => {
        axios.get("https://devapi.2gathers.com/api/events/list-events/?userId=5")
            .then(res => {
                console.log('DATA is coming from Db')
                console.log(res)
                setUserData(res.data.listOfHostEvents)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='card'>
            {
                userData.map(item =>

                    <h6 className='borders' key={item.eventId}>{item.eventName} <br /> {item.eventDescription}</h6>

                )

            }
        </div>
    )
}
export default Counter;