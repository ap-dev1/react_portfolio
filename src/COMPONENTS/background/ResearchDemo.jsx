import React, { Component } from "react";
import { nanoid } from "nanoid";

import "./_research-demo.sass";
import MatchingDemo from "../matching/MatchingDemo.jsx";


export default class ResearchDemo extends Component {
    render() {
        return (
            <div id='research-demo' key={nanoid()}  >

                <MatchingDemo />
            </div>
        );
    }
}


