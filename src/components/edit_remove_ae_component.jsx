import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Masonry from 'react-masonry-css'
  import { allAdditionalEquipsActions} from '../actions'
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux'
  import { withRouter} from 'react-router-dom'

export class EditRemoveAEComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            additionalEquipsData:null,
            // modalShow: false, 
            // editModalShow: false,
            // addadditionalEquipssModalShow: false,
            // equipment:null
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.additionalEquipsData && nextProps.additionalEquipsData !== prevState.additionalEquipsData) {
            newProps.additionalEquipsData = nextProps.additionalEquipsData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.additionalEquipsData){
            return{
               loaded: true,
               additionalEquipsData:newProps.additionalEquipsData,
               property: newProps.additionalEquipsData[0]
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }


    componentDidMount(){
        this.props.allAdditionalEquipsActions.allAdditionalEquips(this.state)
    }
    
    render() {
        // let modalClose = () => this.setState({ modalShow: false });
        // let editModalClose = () => this.setState({ editModalShow: false });
        // let addadditionalEquipsModalClose = () => this.setState({ addadditionalEquipssModalShow: false });

        const { additionalEquipsData}=this.state
        console.log(additionalEquipsData)

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        let additionalEquipss=additionalEquipsData && additionalEquipsData.map((additionalEquips) =>{
            return <div key={additionalEquips.equipmentId}>
               <Card>
                    <CardImg top width="100%" src={additionalEquips.imgLink} />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{additionalEquips.equipmentName}</CardTitle>
                        {/* <CardSubtitle>Gearbox Type: {additionalEquips.gearboxType}</CardSubtitle> */}
                        <CardText className="text-muted">{additionalEquips.description}</CardText>
                        <CardText className="font-weight-normal">Type: {additionalEquips.type}</CardText>
                        <CardText className="font-weight-normal">Per hour Rate: Rs.{additionalEquips.aeRentalPrice}.00</CardText>
                        <Button onClick={() => this.setState({ editModalShow: true ,additionalEquips:additionalEquips})} className="btn btn-info ml-1 float-right">Edit</Button>
                        <Button onClick={() => this.setState({ modalShow: true ,additionalEquips:additionalEquips})} className="btn btn-danger float-right">Remove</Button>
                    </CardBody>
                </Card>
                
            </div>
        })

        return (
            <div className="bodycontainer">
                <button type="button" className="btn btn-primary btn-xl" onClick={() => this.setState({ addadditionalEquipssModalShow: true })}>
                    &#43; Additional Equipment</button>
                <br/><hr/>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {additionalEquipss}
                </Masonry>
                
                {/* <ConfirmDeleteModal show={this.state.modalShow} onHide={modalClose} props={this.state.additionalEquips}/> 
                <AddadditionalEquipsModal show={this.state.addadditionalEquipssModalShow} onHide={addadditionalEquipsModalClose} props={this.state.additionalEquips}/> 
                <UpdateadditionalEquipsModal show={this.state.editModalShow} onHide={editModalClose} props={this.state.additionalEquips}/> */}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        allAdditionalEquipsActions: bindActionCreators(allAdditionalEquipsActions, dispatch),
        // deleteadditionalEquipsActions:bindActionCreators(deleteadditionalEquipsActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllAdditionalEquips,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditRemoveAEComponent))
