import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
const Section3 = () => {

    return (
        <div className='container p-5' style={{marginTop:180}}>
            <div className='row'>
                <div className='col-4'>
                    <img className='w-75' src="https://i2.wp.com/sride.co/wp-content/uploads/2019/06/sRide-Carpool-BikePool-Ride-Share-Save-Money-.png?zoom=1.25&fit=2600%2C2630&ssl=1" alt="" />
                </div>
                <div className='col'>
                <h3 className='my-3'>What is Carpool?</h3>
                <p>
    Carpool is revolutionary and  fun way to commute. Whether you are a car owner, bike owner or a rider, just post your ride details on sRide and we will match you with co-riders on your way</p>
                </div>
            </div>
        </div>
      )
    }

export default Section3