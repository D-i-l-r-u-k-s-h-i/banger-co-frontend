import React, { Component } from 'react'
import { Button, Container, Card, CardTitle, Table } from "reactstrap";
import TodaysBookingsComponent from './todays_bookings_component';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { getRentalPriceActions } from '../actions'
import {Spinner} from 'react-bootstrap'
import Select from 'react-select';
import * as api from '../services/HTTPclient'
import * as endPoints from '../services/endpoints'
import UserDetailsModal from './userDetailsModal';

export class AdminDashboardComponent extends Component {
    constructor(props){
        super(props);
        this.state={ 
            rentalData:null,
            customerList:[],
            searchQuery:null,
            selectedOption:null,
            modalShow: false,
        }
    }

    getFromBackend = (endpoint, id) => {
        let HTTPclient=api
        HTTPclient.get(
          endpoint + id //Creating URL with details and send  GET request to get data
        ).then(({ data }) => {
          console.log("getFromBackend",data);
          console.log(data.length);
          console.log(data);
          this.setState({
            customerList: data // Set data comes from backend to local state
          });
    
        }).catch(err => {
    
        });
    }

    handleInputChange=(e)=>{
        console.log(e)
        this.setState({searchQuery:e})
        this.getFromBackend(endPoints.SEARCH_USER, e)
    }

    handleChange = (selectedOptions) => {
        console.log(selectedOptions)
        this.setState({selectedOption:selectedOptions,modalShow:true})
    }

    componentDidMount(){
        this.props.getRentalPriceActions.getRentalPrices(this.state)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.rentalData && nextProps.rentalData !== prevState.rentalData) {
            newProps.rentalData = nextProps.rentalData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.rentalData){
            return{
               loaded: true,
               rentalData:newProps.rentalData,
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    render() {

        let {rentalData}=this.state
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div>
                <Container>
                <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">Search Customers here...
                                <Select options={Array.isArray(this.state.customerList) && this.state.customerList && this.state.customerList}
                                    closeMenuOnSelect={false}
                                    onInputChange={this.handleInputChange}
                                    labelKey="customerUserName"
                                    valueKey="customerEmail"
                                    getOptionLabel={option => {
                                        return option.customerUserName + "-" + option.customerEmail;
                                    }}
                                    getOptionValue={option => {
                                        return option.customerEmail;
                                    }}
                                    value={this.state.selectedOptions}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </Container>
                <br></br>
                <table className="todaysbookings">
                        <tr>
                                <td>
                                    <div className="btn-group-vertical">
                                <Link to={{
                                    pathname: '/managevehicles',
                                }}
                                    id="submit"
                                    type="button"
                                    className="btn btn-lg btn-info"
                                >Vehicles</Link>
                                <Link to={{
                                    pathname: '/manageaequips',
                                }}
                                    id="submit"
                                    type="button"
                                    className="btn btn-lg btn-warning"
                                >Equipments</Link>    
                                        <button type="button" className="btn btn-lg btn-primary"><Card body color="primary">
        <CardTitle>Handle Admins</CardTitle>
        {/* <CardText>View or Add admin from here.</CardText> */}
        <Button color="danger">Add</Button><Button>View</Button>
      </Card></button>
                                        {/* <button type="button" className="btn btn-lg btn-success">Late for pickup</button> */}
                                    </div>
                                </td>
                            <td>
                                <TodaysBookingsComponent/>
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <Container>
                    <hr/>
                    <h2>Self Drive Rates In Sri Lanka according to <b>amerirentacar.com</b></h2><br/>
                    <Table>
                        <thead>
                            <tr>
                                <th>Vehicles</th>
                                <th>Rate Per Week</th>
                            </tr>
                        </thead>
                        <tbody>
                        {rentalData==null?<div className="text-center"><br/><Spinner animation="border" variant="secondary"/></div>:null}
                            {rentalData && rentalData.map(property=>{
                                return(
                                    <tr>
                                        <td>{property.rentalPrice!=""? property.vehicleName:<b>{property.vehicleName}</b>}</td>
                                        <td>{property.rentalPrice}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <br/>
                    </Container>
                    <UserDetailsModal show={this.state.modalShow} props={this.state} onHide={modalClose}/>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        getRentalPriceActions: bindActionCreators(getRentalPriceActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.AllVehicles,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (AdminDashboardComponent))
