
import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";


class RecentProject extends Component {

    goToLink = (e) => {
        e.preventDefault()
        let destination = e.target.id
        window.open(destination, '_blank')
    };


    render() {


        var Buttons = this.props.urls.map((item) => (
            <button
                id={item.link}
                title={item.link}
                onClick={this.goToLink}
            >{item.name}
            </button>
        ))


        var Tags = this.props.tags.map((item) => (
            <label className="projectTag">{item}</label>
        ))



        return (


            <Card style={{ width: '20rem', height: 'auto', margin: '.5rem', border: '0px solid grey', background: '#f0f0f0', color: '#333', fontFamily: 'Roboto', fontWeigth: 300 }}>


                {/* <Card.Img variant="top" src={this.props.img[0]}
                    style={{ maxHeight: '150px',border: '1px solid grey'}} /> */}

                <Card.Body>
                    <Card.Title style={{ textAlign: 'center', margin: '.5rem', color: 'black', fontWeight: 300, fontSize:"1.6rem" }}>{this.props.title}</Card.Title>

                    {/* <p className='projectRole'>{this.props.date}</p> */}

                    <br></br>
                    <div className="divTags">{Tags}</div>
                    <br></br>
                    <Card.Text> {this.props.overview} </Card.Text>
                    <br></br>
                    {/* <Button variant="primary">Go somewhere</Button> */}

                    <div className='projectButtons'>
                        {Buttons}
                    </div>

                </Card.Body>
            </Card>



        );
    }
}

export default RecentProject;