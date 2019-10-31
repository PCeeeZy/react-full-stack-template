// dependencies
import React, { Component } from 'react';

//import API
import API from '../services/API';

// any components you want to display


class FindId extends Component {
    state = {
        examples: [],
        message: ''
    };

    componentDidMount = () => {
        //what happens when we load
        this.getExampleById()
    };

    getExampleById = () => {
        //do the api call by id
        API.findAll()
            .then(res => {
                this.setState({
                    examples: res.data
                })
            })
            .catch(err => {
                this.setState({
                    message: err
                })
            })
    };

    render() {
        console.log(this.state);

        return (
            <div>
                {this.state.examples ? this.state.examples.map(oneExample => (
                    <div>
                        <p>{oneExample.nameIGuess}</p>
                        <p>{oneExample.isCool}</p>
                    </div>
                )) : (
                        <h1>{this.state.message}</h1>
                    )}
            </div>
        )
    }
}

export default FindId;