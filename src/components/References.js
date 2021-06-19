import React, { Component } from "react";
import "./sassy/references.sass";

import parse from "html-react-parser";

import infoReferences from "../data/infoReferences"


class RefList extends Component {

    render() {


        //var idf = parseInt(infoReferences.length / 2) - 1

        // var ref1 = infoReferences.slice(0, idf)
        // var ref2 = infoReferences.slice(idf)

        var ref1 = infoReferences.slice(0, 9)
        var ref2 = infoReferences.slice(9, 19)
        var ref3 = infoReferences.slice(17)

        var MyRefs1 = ref1.map(item => {

            return (
                <p
                    className={"citation"}
                    key={item.keywords}
                    title={item.keywords}
                >
                    {parse(item.citation)}
                </p>

            );

        })

        var MyRefs2 = ref2.map(item => {

            return (
                <p
                    className={"citation"}
                    key={item.keywords}
                    title={item.keywords}
                >
                    {parse(item.citation)}
                </p>

            );

        })


        var MyRefs3 = ref3.map(item => {

            return (
                <p
                    className={"citation"}
                    key={item.keywords}
                    title={item.keywords}
                >
                    {parse(item.citation)}
                </p>

            );

        })


        return (

            <div id="refSection" >

                <h1 id="refMarker1" >References</h1>
                <span className="undergraduate"><sup>U</sup> = undergraduate colaborator</span>

                <div className="refBody">

                    <div className="refColumn">


                        {MyRefs1}
                    </div>

                    <div className="refColumn">
                        {MyRefs2}
                    </div>

                    <div className="refColumn">
                        {MyRefs3}
                    </div>

                </div>




            </div>
        )
    }
}

export default RefList;


