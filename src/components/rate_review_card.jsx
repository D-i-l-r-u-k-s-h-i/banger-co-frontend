import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
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
            this.props.addRatingActions.addRating(this.state)
        }
        
    }

    render() {
        const ratingg=this.props;
        console.log(this.props.props.id)
        return (
            <div>
                <Card body outline color="warning" >
                    <CardTitle>{this.props.props.vehicleName}</CardTitle>
                    <CardText>{this.props.props.gearboxType} & {this.props.props.fuelType}</CardText>
                    
                    Rate your experience: <Rater total={5} interactive={true} rating={ratingg.rating}
                                            // onRating={({rating}) => {this.handleRating(rating)}} 
                                            onRate={this.handleRating} //({rating}) => {this.handleRating(rating)}
                                            // onCancelRate={this.handleCancelRate}
                                            onClick={this.handleRateClick}/><br/>
                                            
                    <CardText>
                        <ReviewForm props={this.props.props.id}/>
                    </CardText>
                    <Button color="secondary">Leave a review here</Button>
                </Card>           
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
