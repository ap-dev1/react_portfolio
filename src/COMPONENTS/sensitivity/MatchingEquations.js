export default function MatchingEquations() {
    return (
        <div className="divEquations">

            <div className="narrative"
                style={{
                    width: "50%",
                    backgroundColor: "#1D2731",
                    padding: "2px",
                    margin: "2px",
                }}>

                {/* <h2>The matching equations</h2> */}

                <p>
                    Equation 1 describes the relation between the allocation of responses (y) among activities and the allocation of acquired reinforcers (x). It is usually applied in logarithimic form, which turns the power function into a line.
                </p>

                <table className="equations">
                    <tbody>
                        <tr>
                            <td>
                                y = b &sdot; x <sup>a</sup>
                            </td>
                            <td>(1)</td>
                        </tr>

                        <tr>
                            <td>
                                y = a &sdot; log(x) + log(b)
                            </td>
                            <td>(2)</td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <div className="divRight" >
                <p>Parameters</p>




            </div>


        </div>
    )
}