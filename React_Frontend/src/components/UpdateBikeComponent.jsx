import React, { Component } from 'react'
import BikeService from '../services/BikeService';

class UpdateBikeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bikename: '',
            category: '',
            price: ''        }
        this.changeBikeNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.updateBike = this.updateBike.bind(this);
    }

    componentDidMount(){
        BikeService.getBikeById(this.state.id).then( (res) =>{
            let bike = res.data;
            this.setState({bikename: bike.bikename,
                category: bike.category,
                price : bike.price
            });
        });
    }

    updateBike = (e) => {
        e.preventDefault();
        let bike = {bikename: this.state.bikename, category: this.state.category, price: this.state.price};
        console.log('bike => ' + JSON.stringify(bike));
        console.log('id => ' + JSON.stringify(this.state.id));
        BikeService.updateBike(bike, this.state.id).then( res => {
            this.props.history.push('/bikes');
        });
    }
    
    changeBikeNameHandler= (event) => {
        this.setState({bikename: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({DOB: event.target.value});
    }

    cancel(){
        this.props.history.push('/bikes');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Bike</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Bike Name: </label>
                                            <input placeholder="Bike Name" name="bikename" className="form-control" 
                                                value={this.state.bikename} onChange={this.changeBikeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category: </label>
                                            <input placeholder="Category" name="category" className="form-control" 
                                                value={this.state.category} onChange={this.changeCategoryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateBike}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateBikeComponent


