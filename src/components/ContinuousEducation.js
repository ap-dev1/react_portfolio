import React, { Component } from 'react'
import { Table } from "react-bootstrap"

import certificate_python from '../assets/stripes/certificate_python.png'
import certificate_web_dev from '../assets/stripes/certificate_web_dev.png'
import certificate_ml from '../assets/stripes/certificate_ml_coursera.png'
import certificate_django from '../assets/stripes/certificate_django.png'
import certificate_ds_data_camp from '../assets/stripes/certificate_ds_data_camp.png'
import certificate_sql from "../assets/stripes/certificate_sql.png"
import certificate_nlp from "../assets/stripes/certificate_sql.png"
import certificate_d3_react from "../assets/stripes/certificate_sql.png"


var certificates = [
    { name: "D3 with React", date: "12-31-2020", link: "https://www.udemy.com/certificate/UC-1a8d660a-bfef-4f05-a54d-2bf3abb00acf/", img: certificate_d3_react, notes: "" },
    { name: "NLP", date: "06-30-2020", link: "https://www.udemy.com/certificate/UC-484a14d9-7ae0-4569-b3eb-606f03649571/", img: certificate_nlp, notes: "" },
    { name: "Web Development with React and Node", date: "06-30-2020", link: "https://www.udemy.com/certificate/UC-9ee6c9ba-94e1-4a02-9d5e-4aee303e5c1a/", img: certificate_web_dev, notes: "" },

    { name: "Django Bootcamp", date: "06-09-2020", link: "https://www.udemy.com/certificate/UC-797bf1ab-2cf1-4823-b226-6dd3e5f0ac79/", img: certificate_django, notes: "" },
    { name: "Data Science", date: "2019", link: "", img: certificate_ds_data_camp, notes: "" },

    { name: "Machine Learning", date: "12/2018", link: "coursera.org/verify/UJ88SUYL735J", img: certificate_ml, notes: "" },
    { name: "SQL Bootcamp", date: "12/08/2018", link: "https://www.udemy.com/certificate/UC-Y3NY4DGH/", img: certificate_sql, notes: "" },

    { name: "Python 3 Bootcamp", date: "10-02-2018", link: "https://www.udemy.com/certificate/UC-1ZA6WABW/", img: certificate_python, notes: "" },

]


class ContinuousEducation extends Component {

    render() {

        var MyEntries = certificates.map((item) => {
            return (
                <tr>
                    <td style={{ color: "#fafafa" }}>{item.date.slice(-4)}</td>
                    <td>{item.name}</td>

                    <td style={{ textAlign: 'left' }}>
                        <img src={item.img} alt={item.name} height='20px'></img>
                    </td>
                </tr>


            )
        })

        return (

            <div >
                <table className='table-edu-continuous'>
                    <tr>
                        <th colspan='3'>Post-doctoral training</th>
                    </tr>
                    {MyEntries}
                </table>
            </div>



        );
    }
}

export default ContinuousEducation;


