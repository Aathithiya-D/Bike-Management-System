import React, { Component } from 'react'
import BikeService from '../services/BikeService';

class CreateBikeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            bikename: '',
            category: '',
            price:''
        }
        this.changeBikeNameHandler = this.changeBikeNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveOrUpdateBike = this.saveOrUpdateBike.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BikeService.getBikeById(this.state.id).then( (res) =>{
                let bike = res.data;
                this.setState({bikename: bike.bikename,
                    category: bike.category,
                    price : bike.price,                    
                });
            });
        }        
    }
    saveOrUpdateBike = (e) => {
        e.preventDefault();
        let bike = {bikename: this.state.bikename, category: this.state.category,price: this.state.price} ;
        console.log('bike => ' + JSON.stringify(bike));

        // step 5
        if(this.state.id === '_add'){
            BikeService.createBike(bike).then(res =>{
                this.props.history.push('/bikes');
            });
        }else{
            BikeService.updateBike(bike, this.state.id).then( res => {
                this.props.history.push('/bikes');
            });
        }
    }
    
    changeBikeNameHandler= (event) => {
        this.setState({bikename: event.target.value});
    }

    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/bikes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Bike</h3>
        //     return <h3 className="text-center"><button>
        //     <span>
        //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
        //     </span>
        //   </button></h3>

        }else{
            return <h3 className="text-center">Update Bike</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBike}>Save</button>
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

export default CreateBikeComponent




