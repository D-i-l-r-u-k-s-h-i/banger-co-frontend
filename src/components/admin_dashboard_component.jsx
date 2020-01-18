import React, { Component } from 'react'
import {
    Button, Col,
    Container,
    Input,
    InputGroup,
    InputGroupAddon,
    Row
} from "reactstrap";
import TodaysBookingsComponent from './todays_bookings_component';

export class AdminDashboardComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row className="search">
                    <Col sm="12">
                        <InputGroup>
                            <Input placeholder="Search..."/>
                            <InputGroupAddon addonType="prepend">
                                <Button color="success" 
                                        className="search-button">
                                    Search
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                </Container>
                <br></br>
                <table className="todaysbookings">
                        <tr>
                                <td>
                                    <div className="btn-group-vertical">
                                        <button type="button" className="btn btn-lg btn-info">Vehicles</button>
                                        <button type="button" className="btn btn-lg btn-warning">Equipments</button>
                                        <button type="button" className="btn btn-lg btn-primary">Handle Admins</button>
                                        <button type="button" className="btn btn-lg btn-success">Late for pickup</button>
                                    </div>
                                </td>
                            <td>
                                <TodaysBookingsComponent/>
                            </td>
                        </tr>
                    </table>
            </div>
        )
    }
}

export default AdminDashboardComponent
