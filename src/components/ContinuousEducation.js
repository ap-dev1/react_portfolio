import React, { Component } from 'react'
import { Table } from "react-bootstrap"

import python_udemy from '../assets/python_udemy.png'
import react_udemy from '../assets/react_udemy.png'
import ml_coursera from '../assets/ml_coursera.png'
import django_udemy from '../assets/django_udemy.png'
import ds_data_camp from '../assets/ds_data_camp.png'
//import sql_udemy from "../assets/sql_udemy.png"

import placeholder from "../assets/placeholder.png"


class ContinuousEducation extends Component {

    render() {
        return (


            // <div className="recentRow">

            //     <table className='table-edu-continuous'>

            //         <tr>
            //             <th colspan='2'>CONTINUOUS EDUCATION</th>
            //         </tr>

            //         <tr>
            //             <td>Python Bootcamp (Udemy, 2018)</td>
            //             <td style={{ textAlign: 'center' }}>
            //                 <img
            //                     src={python_udemy}
            //                     alt='Python 3 Bootcamp'
            //                 >
            //                 </img>
            //             </td>
            //         </tr>

            //         <tr>
            //             <td>Data Science with Python track (DataCamp, 2018)</td>
            //             <td style={{ textAlign: 'center' }}>
            //                 <img
            //                     src={ds_data_camp}
            //                     alt='Data Science track with Python'></img>
            //             </td>
            //         </tr>

            //         <tr>
            //             <td>Machine Learning by Stanford University (Coursera, 2018)</td>

            //             <td style={{ textAlign: 'center' }}>
            //                 <img
            //                     src={ml_coursera}
            //                     alt='coursera.org/verify/UJ88SUYL735J' ></img>
            //             </td>
            //         </tr>

            //         <tr>
            //             <td>SQL Bootcamp (Udemy, 2019)</td>
            //             <td style={{ textAlign: 'center' }}>
            //                 <img
            //                     src={placeholder}
            //                     alt='SQL Bootcamp' ></img>
            //             </td>
            //         </tr>

            //         <tr>
            //             <td>Web Dev with Django (Udemy, 2020</td>
            //             <td style={{ textAlign: 'center' }}>
            //                 <img
            //                     src={django_udemy}
            //                     alt='Django' ></img>
            //             </td>
            //         </tr>

            //         <tr>
            //             <td>Web Dev with React (Udemy, 2020)</td>
            //             <td style={{ textAlign: 'center' }}>
            //                 <img src={react_udemy} alt='React' ></img>
            //             </td>
            //         </tr>
            //     </table>
            // </div>



            <div className="recentRow" >
                <table className='table-edu-continuous'>

                    <tr>
                        <th colspan='2'>CONTINUOUS EDUCATION</th>
                    </tr>

                    <tr>
                        <td>2020</td>
                        <td>Web Dev with Django (Udemy)</td>
                    </tr>

                    <tr>
                        <td>2020</td>
                        <td>Web Dev with React (Udemy)</td>
                    </tr>

                    <tr>
                        <td>2019</td>
                        <td>SQL Bootcamp (Udemy)</td>
                    </tr>

                    <tr>
                        <td>2018</td>
                        <td>Python Bootcamp (Udemy)</td>
                    </tr>

                    <tr>
                        <td>2018</td>
                        <td>Data Science with Python track (DataCamp)</td>
                    </tr>

                    <tr>
                        <td>2018</td>
                        <td>Machine Learning by Stanford University (Coursera)</td>
                    </tr>
                   
                </table>
            </div>

        );
    }
}

export default ContinuousEducation;


