import React, { Component } from "react";
import Card from "react-bootstrap/Card";

import "../styles/recent.sass";

class RecentProject extends Component {
    goToLink = (e) => {
        e.preventDefault();
        let destination = e.target.id;
        window.open(destination, "_blank");
    };

    render() {
        var Buttons = this.props.urls.map((item) => (
            <button
                id={item.link}
                key={(item.link).toString() + (item.name).toString()}
                title={item.link}
                onClick={this.goToLink}
            >
                {item.name}
            </button>
        ));


        var Tags = this.props.tags.map((item) => <label key={item}>{item}</label>);

        return (
            <Card className="recentCard">
                <Card.Body >
                    <Card.Title className="recentTitle">{this.props.title}</Card.Title>

                    <Card.Text> {this.props.overview} </Card.Text>

                    <div className="divSkills">{Tags}</div>
                    <div className="divLinks">{Buttons}</div>
                </Card.Body>
            </Card>
        );
    }
}

export default RecentProject;
