import { nanoid } from "nanoid"

export default function BasicSummaryTable(props) {




    return (




        <div style={{ display: "flex", flexDirection: "row", }}>



            <div className="divTable">
                <table >
                    <tbody>

                        <tr key={nanoid()}
                            style={{ backgroundColor: "#1D2731", fontSize: "14px", fontFamily: "Times New Roman" }}
                        >

                            <td key={nanoid()} colSpan={5} ></td>

                            <td key={nanoid()} >x</td>

                            <td key={nanoid()}>y</td>

                            <td key={nanoid()}
                                style={{
                                    color: "#F19F9A",
                                    borderLeft: "1px solid #446b58"
                                }}
                            >y'</td>
                        </tr>


                        <tr key={nanoid()} >
                            <th key={nanoid()} style={{ color: "#bbb" }}>Schedule</th>
                            <th key={nanoid()} style={{ color: "orange" }}>B1</th>
                            <th key={nanoid()} style={{ color: "orange" }}>r1</th>
                            <th key={nanoid()} style={{ color: "lime" }}>B2</th>
                            <th key={nanoid()} style={{ color: "lime" }}>r2</th>
                            <th key={nanoid()} style={{
                                color: "#ccc",
                                borderLeft: "1px solid #446b58"
                            }}
                            >r1/r2</th>
                            <th key={nanoid()} >B1/B2</th>
                            <th key={nanoid()}
                                style={{
                                    //color: "#eb756b",
                                    color: "#F19F9A",
                                    borderLeft: "1px solid #446b58"
                                }}
                            >B1/B2</th>
                        </tr>

                        {
                            props.data.map((item) => {

                                return (
                                    <tr key={nanoid()} className="d3_row">
                                        <td key={nanoid()} style={{ color: "#bbb" }}> {item.schedule} </td>
                                        <td key={nanoid()} style={{ color: "orange" }}> {item.scheduleData.b1} </td>
                                        <td key={nanoid()} style={{ color: "orange" }}> {item.scheduleData.r1} </td>
                                        <td key={nanoid()} style={{ color: "lime" }}> {item.scheduleData.b2} </td>
                                        <td key={nanoid()} style={{ color: "lime" }}> {item.scheduleData.r2} </td>

                                        <td key={nanoid()} style={{
                                            color: "#ccc",
                                            borderLeft: "1px solid #446b58",

                                        }}>
                                            {(item.scheduleData.r1 / item.scheduleData.r2).toFixed(1)}


                                        </td>

                                        <td key={nanoid()}
                                            style={{
                                                color: "#ccc",
                                            }}
                                        >
                                            {(item.scheduleData.b1 / item.scheduleData.b2).toFixed(1)}
                                        </td>


                                        <td key={nanoid()}
                                            style={{
                                                // color: "#eb756b",
                                                //color: "#F4B5B0",
                                                color: "#F19F9A",
                                                borderLeft: "1px solid #446b58",

                                            }}>
                                            {/* <i>{
                                                "y "}</i>' */}

                                            {(props.b * item.ratioB ** props.a).toFixed(1)}



                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>


    )


}