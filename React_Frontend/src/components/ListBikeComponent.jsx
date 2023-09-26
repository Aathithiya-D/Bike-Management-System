import React, { Component } from 'react'
import BikeService from '../services/BikeService'
import './project.css'
class ListBikeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                bikes: []
        }
        this.addBike = this.addBike.bind(this);
        this.editBike = this.editBike.bind(this);
        this.deleteBike = this.deleteBike.bind(this);
    }

    deleteBike(id){
        BikeService.deleteBike(id).then( res => {
            this.setState({bikes: this.state.bikes.filter(bike => bike.id !== id)});
        });
    }
    viewBike(id){
        this.props.history.push(`/view-bike/${id}`);
    }
    editBike(id){
        this.props.history.push(`/add-bike/${id}`);
    }

    componentDidMount(){
        BikeService.getBikes().then((res) => {
            this.setState({ bikes: res.data});
        });
    }

    addBike(){
        this.props.history.push('/add-bike/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Bikes List</h2>
                 <div className = "row">
                    <button onClick={this.addBike}class="cssbuttons-io-button"> ADD BIKES
  <div class="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead style={{textAlign:'center'}}>
                                <tr>
                                    <th> Bike Id</th>
                                    <th> Bike Name</th>
                                    <th> Bike Category</th>
                                    <th> Bike Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}>
                                {
                                    this.state.bikes.map(
                                        bike => 
                                        <tr key = {bike.id}>
                                             <td> {bike.id}</td>
                                             <td> {bike.bikename} </td>   
                                             <td> {bike.category}</td>
                                             <td> {bike.price}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.editBike(bike.id)} className="btn btn-primary">Edit </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBike(bike.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBike(bike.id)} className="btn btn-success">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListBikeComponent


