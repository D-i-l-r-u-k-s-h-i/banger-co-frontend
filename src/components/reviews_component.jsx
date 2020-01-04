import React, { Component } from 'react'
import ReviewForm from './review_form';
import ReviewList from './review_list';
import { getReviewsActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class ReviewsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviewData: [],
            vehicleid:this.props.vehicleid, //check whether this is actually needed
            review:null,
            loading: false
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.reviewData && nextProps.reviewData !== prevState.reviewData) {
            newProps.reviewData = nextProps.reviewData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.reviewData){
            return{
            //    loading: true,
               reviewData:newProps.reviewData,
               review: newProps.reviewData[0]
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    componentDidMount() {
        // loading
        this.setState({ loading: true });

        // get all the comments
        this.props.getReviewsActions.getReviews(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div className="form_container">
                <div className="row">
                    {/* <div className="col-4  pt-3 border-right">
                        
                    </div> */}
                    <div className="col-8  pt-3 bg-white">
                        <ReviewList
                            loading={this.state.loading}
                            reviews={this.state.reviewData}
                        /><br/>
                        <ReviewForm />
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getReviewsActions: bindActionCreators(getReviewsActions, dispatch)
    }
}


function mapStateToProps(state) {
    return {
        ...state.GetReviews,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent))
