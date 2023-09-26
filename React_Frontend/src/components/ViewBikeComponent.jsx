import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BikeService from '../services/BikeService'

class ViewBikeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bike: {}
        }
    }

    componentDidMount(){
        BikeService.getBikeById(this.state.id).then( res => {
            this.setState({bike: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Bike Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Bike Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.bike.id }</div>
                        </div>
                        <div className = "row">
                            <label> Bike Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.bike.bikename }</div>
                        </div>
                        <div className = "row">
                            <label> Category:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.bike.category}</div>
                        </div>
                        <div className = "row">
                            <label> Price:&nbsp;&nbsp;&nbsp;</label>
                            <div> { this.state.bike.price }</div>
                        </div>
                    </div>

                </div>
                <div className='backbutton'> <Link to="/view-bike/bikes"><button>BACK</button></Link>
                </div>
                
            </div>
        )
    }
}

export default ViewBikeComponent


