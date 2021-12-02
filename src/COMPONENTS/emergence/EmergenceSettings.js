import React from "react"
import { nanoid } from "nanoid"


export default class EmergenceSettings extends React.Component {

    render() {

        return (

            <React.Fragment>
                <table key={nanoid()}>
                    <tbody key={nanoid()}>
                        <tr key={nanoid()}>
                            <th key={nanoid()}>phenotype range: </th>
                            <td key={nanoid()}>{this.props.low} - {this.props.high}</td>
                        </tr>
                        <tr>
                            <th key={nanoid()}> population size: </th>
                            <td key={nanoid()}>{this.props.popSize}</td>
                        </tr>
                        <tr key={nanoid()}>
                            <th key={nanoid()}>fitness criterion: </th>
                            <td key={nanoid()}>{this.props.fitnessZero}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>



        )
    }
}







