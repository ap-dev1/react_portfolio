
import "./cv.sass";
import "./filter-checkbox.sass";
import "../about_files/about.sass";

import infoCV from "./infoCV";

import React from "react";
import parse from "html-react-parser";
import { nanoid } from "nanoid";

import ContinuousEducation from "./ContinuousEducation";

import CitationVitae from "./CitationVitae";

import infoSkills from "../../DATA/infoSkills";

import Highlighted from "../abc/Highlighted";




const kws = ['all', 'Matching', 'Hamming', 'ADHD', 'Scienta Nova']


export default class MyVitae extends React.Component {

    constructor() {
        super()

        this.state = {
            searchGreen: "",
            displayTypes: ["Master of Arts", "Qualifying Exam", "doctoral dissertation"],
            itemCategory: "all items",
        }

        this.handleChange = this.handleChange.bind(this)

    }


    handleChange = (e) => {
        // this.setState({checked: !this.state.checked})
        this.setState({
            [e.target.name]: !e.target.checked
        })
    }



    render() {

        // --------------------------------------------------------
        var Skills = infoSkills.skills.map((item) => {
            return (
                <label className='lbl-tech-vitae'  key={nanoid()}>
                    {item.name}
                </label >
            )
        })

        // --------------------------------------------------------

        // const FilterLabels = kws.forEach((xx) => {
        //     return (
        //         <label>
        //             <input
        //                 type='radio'
        //                 value={xx}
        //                 checked={this.state.itemCategory === xx}
        //                 onChange={(event) => this.setState({ itemCategory: event.target.value.toLowerCase() })}
        //             />
        //             <span>{xx}</span>
        //         </label>
        //     )
        // })

        // --------------------------------------------


        const VitaeEntries = infoCV.map((item) => {

            if (this.state.itemCategory !== 'all items') {
                if (item.keywords.includes(this.state.itemCategory.toLowerCase()) === false)
                    return null
            }

            // let Keywords = item.keywords.map((kw) => {
            //     return (
            //         <label
            //             style={{
            //                 padding: "2px 6px",
            //                 margin: "1px 4px",
            //                 border: "1px solid #149da799",
            //                 border: "1px solid teal",
            //                 color: "teal",
            //                 borderRadius: "3px",
            //             }}
            //         >
            //             {kw}
            //         </label>
            //     )
            // })


            let Urls = null

            if (item.urls) {

                Urls = item.urls.map((url) => {
                    return (
                        <a
                            style={{
                                marginBottom: "5px",
                                marginLeft: "10px",
                                fontSize: ".7rem",
                                textDecoration: "none",
                                wordWrap: 'break-word',
                                maxWidth: "100%"

                            }}
                            key={nanoid()}
                            href={url.link}
                        >
                            {url.link}
                        </a>
                    )
                })
            }




            let Abstract = item.abstract ? parse(item.abstract) : parse(item.description)

            let HighlightedAbstract = <Highlighted
                text={item.abstract ? item.abstract : item.description}
                highlight={this.state.searchGreen}
            />


            return (
                <CitationVitae
                    collapsedTitle={parse(item.citation)}
                    contentType={item.iconName}
                    collapsedText={
                        <div
                            style={{
                                width: "430px",
                                fontSize: ".8rem",
                                display: "flex",
                                flexDirection: "column",
                                paddingLeft: "2rem",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {Urls}

                            <div
                                style={{
                                    maxWidth: "400px",
                                    fontSize: '.75rem',
                                    padding: "5px 10px",
                                    display: "flex",
                                    flexDirection: "row",
                                    // border: "1px solid #ccc",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    textIndent: "1.5rem",
                                    color: "#888",
                                    fontWeight: 400,
                                    lineHeight: 1.1,
                                    textAlign: "justify",
                                    textJustify: "inter-word"
                                }}
                            >

                                {HighlightedAbstract}

                            </div>

                        </div>
                    }

                // abstract={item.abstract ? parse(item.abstract) : parse(item.description)}
                // keywords={item.keywords}
                // urls={item.urls}
                />
            );
        });


        return (


            <div id='sectionVitae' key={nanoid()}  >

                <div id='row1' key={nanoid()} >

                    <div id='colA' key={nanoid()}  >

                        <h1>EDUCATION</h1>

                        <div id='cvEducation' key={nanoid()}  >

                            <table >
                                <tbody>
                                    <tr>
                                        <td>2003</td>
                                        <td>B.A. Psychology</td>
                                        <td>Alexandru Ioan Cuza University, Iasi, RO</td>
                                    </tr>
                                    <tr>
                                        <td>2009</td>
                                        <td>M.A. Psychology</td>
                                        <td>Emory University, Atlanta, GA</td>
                                    </tr>
                                    <tr>
                                        <td>2013</td>
                                        <td>Ph.D. Psychology</td>
                                        <td>Emory University, Atlanta, GA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h1>APPOINTMENTS</h1>

                        <div id='cvAppointments' key={nanoid()} >

                            <table >
                                <tbody>
                                    <tr>
                                        <td>2012-2015</td>
                                        <td>Adjunct faculty</td>
                                        <td>Georgia State University</td>
                                    </tr>
                                    <tr>
                                        <td>2015-2016</td>
                                        <td>Adjunct faculty</td>
                                        <td>Agnes Scott College</td>
                                    </tr>
                                    <tr>
                                        <td>2017-2018</td>
                                        <td>Adjunct faculty</td>
                                        <td>Oxford College of Emory University</td>
                                    </tr>
                                    <tr>
                                        <td>2019-2022</td>
                                        <td colSpan={2}>Independent researcher / web developer (freelance)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <h1>EXPERTISE</h1>

                        <div id='expertise' key={nanoid()}>
                            <label>learning and development</label>
                            <label>emergence</label>
                            <label>computational modelling</label>
                            <label>reinforcement learning</label>
                            <label>translational science</label>
                        </div>


                        <h1>TECH</h1>

                        <div id='skills' key={nanoid()}   >
                            <div
                                style={{
                                    display: "flex",
                                    flexFlow: "row wrap",
                                    maxWidth: "400px",
                                }}
                            >
                                {Skills}
                            </div>
                        </div>


                        <div id='bottom' key={nanoid()} >
                            <ContinuousEducation />
                        </div>

                    </div>



                    <div id='colB' key={nanoid()}>

                        <div id='filters' key={nanoid()}>

                            <div
                                key={nanoid()}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >

                                <form>
                                    <label className="filter-checkbox" key={nanoid()}>
                                        <input
                                            type="radio"
                                            value='all items'
                                            checked={this.state.itemCategory === 'all items'}
                                            className={this.state.itemCategory === 'ADHD' ? 'checked' : 'unchecked'}
                                            onChange={(event) => this.setState({ itemCategory: event.target.value })}
                                        />
                                        <span>all items</span>
                                    </label>

                                    <label className="filter-checkbox" key={nanoid()}>
                                        <input
                                            type="radio"
                                            value='Matching'
                                            checked={this.state.itemCategory === 'Matching'}
                                            className={this.state.itemCategory === 'ADHD' ? 'checked' : 'unchecked'}
                                            onChange={(event) => this.setState({ itemCategory: event.target.value })}
                                        />
                                        <span>Matching</span>
                                    </label>

                                    <label className="filter-checkbox" key={nanoid()}>
                                        <input
                                            type="radio"
                                            value='Hamming'
                                            checked={this.state.itemCategory === 'Hamming'}
                                            className={this.state.itemCategory === 'ADHD' ? 'checked' : 'unchecked'}
                                            onChange={(event) => this.setState({ itemCategory: event.target.value })}
                                        />
                                        <span>Hamming</span>
                                    </label>


                                    <label className="filter-checkbox" key={nanoid()}>
                                        <input
                                            type="radio"
                                            value='ADHD'
                                            checked={this.state.itemCategory === 'ADHD'}
                                            className={this.state.itemCategory === 'ADHD' ? 'checked' : 'unchecked'}
                                            onChange={(event) => this.setState({ itemCategory: event.target.value })}
                                        />
                                        <span>ADHD</span>
                                    </label>


                                    <label className="filter-checkbox" key={nanoid()}>
                                        <input
                                            type="radio"
                                            value='Scienta Nova'
                                            checked={this.state.itemCategory === 'Scienta Nova'}
                                            className={this.state.itemCategory === 'ADHD' ? 'checked' : 'unchecked'}
                                            onChange={(event) => this.setState({ itemCategory: event.target.value })}
                                        />
                                        <span>Scienta Nova</span>
                                    </label>

                                </form>

                            </div>


                        </div>


                        <div
                            id='cv-items'
                            key={nanoid()}
                            className='cv-scroll'
                        >
                            {VitaeEntries}
                        </div>

                    </div>




                </div>









            </div >
        )
    }
}