import React from "react"
import { nanoid } from "nanoid"
import * as d3 from "d3"


export default class AgentHistory extends React.Component {

    constructor(props) {
        super(props)

    }


    render() {

        let xxx = this.props.data.slice(0, this.props.data.length - 1)


        // fitness gradient goes black to orange:
        let color1 = '#000'
        let color2 = '#ff6200'

        var fitness_gradient = d3.scaleLinear()
            .domain([1, 99])
            .range([color1, color2])



        return (

            <div
                id="divAgentHistory"
                style={{
                    height: "auto",
                    width: "100%",
                    margin: "auto",
                    border: "0px",
                    backgroundColor: "#282c34"
                }}
                key={nanoid()}
            >

                {
                    xxx.map((gn) => {
                        return (
                            <div>
                                {
                                    gn.population.map((item, i) => {
                                        let cellId = `phenotype_${i + 1}`
                                        return (


                                            <button
                                                key={nanoid()}
                                                title={item.status}
                                                value={item.phenotype}
                                                id={cellId}
                                                className="btn_history"
                                            // style={{
                                            //     background: fitness_gradient(i * 10),
                                            //     border: `1px solid ${fitness_gradient(i * 10)}`
                                            // }}
                                            >
                                                {item.phenotype}
                                            </button>


                                        )
                                    })
                                }
                            </div>

                        )
                    })
                }



                {/* <table className="table_history" key={nanoid()}>
                    <tbody>


                        {
                            this.props.data.map((generation) => {

                                return (

                                    <tr className="generation" key={nanoid()} >

                                        <th className="cell_tn" key={nanoid()} >
                                            t <sub> {generation.tn} </sub>
                                        </th>


                                        {
                                            generation.population.map((phenotype) => {

                                                return (

                                                    <td key={nanoid()} >
                                                        {phenotype}
                                                    </td>
                                                )
                                            })
                                        }


                                        <td key={nanoid()}  >
                                            {generation.emission}
                                        </td>


                                        <td key={nanoid()} >
                                            {generation.reinforced}
                                        </td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table > */}


            </div >
        )
    }

}