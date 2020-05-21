import React, { Component } from 'react'
import { Modal ,Button} from 'react-bootstrap'
import { deleteVehicleActions} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class ConfirmDeleteModal extends Component {

    constructor(props){
        super(props);
        this.state={
            vehicleData:null,
        }
    }

    onDeleteBtnClick=()=>{
        this.props.deleteVehicleActions.deleteVehicle(this.props.props.vehicleId)
        this.props.onHide()
    }

    render() {
        console.log(this.props.props)
        return (
            <div>
                <Modal {...this.props} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to Delete {this.props.props && this.props.props.vehicleName} from your collection?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            No
                        </Button>
                        <Button variant="danger" onClick={this.onDeleteBtnClick}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteVehicleActions: bindActionCreators(deleteVehicleActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllVehicles,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (ConfirmDeleteModal))
