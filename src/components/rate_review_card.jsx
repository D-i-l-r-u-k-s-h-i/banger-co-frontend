import React, { Component } from 'react'
import { Card, CardTitle, CardText ,Alert} from 'reactstrap';
import Rater from 'react-rater'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { addRatingActions} from '../actions'
import ReviewForm from './review_form';

export class RateReviewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleid:this.props.props.id,
            rating:null,
            visible:false,
            // equipmentId:null
        }
    }

    handleRating=(e)=>{
  
        this.setState({
            rating:e.rating
        })
    }

    handleRateClick=()=>{
        // debugger
        if(this.state.rating!=null){
            this.setState({
                visible:true
            })
            this.props.addRatingActions.addRating(this.state)
        }
        
    }

    onDismiss = () =>{
        this.setState({
            visible:false
        })
    }

    render() {
        const ratingg=this.props;
        console.log(this.props.RatingData)
        return (
            <div>
                <Card body outline color="warning" >
                    <CardTitle className="font-weight-bolder">{this.props.props.vehicleName}</CardTitle>
                    <CardText>{this.props.props.gearboxType} & {this.props.props.fuelType}</CardText>

                    <span>Rate your experience: <Rater total={5} interactive={true} rating={ratingg.rating}
                        // onRating={({rating}) => {this.handleRating(rating)}} 
                        onRate={this.handleRating} //({rating}) => {this.handleRating(rating)}
                        // onCancelRate={this.handleCancelRate}
                        onClick={this.handleRateClick} /><br />
                        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                        Thank you For your rating! {this.props.RatingData}
                    </Alert>
                    <div className="badge badge-warning text-wrap">
                        Leave a review here</div></span>
                    <CardText>
                        <ReviewForm props={this.props.props.id} />
                    </CardText>

                </Card>
                <br />
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        addRatingActions: bindActionCreators(addRatingActions,dispatch),
    }
}


function mapStateToProps (state){
    return{
        ...state.AddRating,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (RateReviewCard))
