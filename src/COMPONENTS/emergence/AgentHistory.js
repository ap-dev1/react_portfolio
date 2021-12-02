import React from "react";
import { nanoid } from "nanoid";



export default class AgentHistory extends React.Component {

    constructor(props) {
        super(props)

    }


    render() {

        let xxx = this.props.data.slice(0, this.props.data.length - 1)

        return (

            <div
                id="divAgentHistory"
                style={{
                    height: "auto",
                    width: "100%",
                    margin: "auto",
                    border: "0px",
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