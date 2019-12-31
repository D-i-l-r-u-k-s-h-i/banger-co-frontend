import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { addReviewActions } from '../actions'

export class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            review:null,
            vehicleid:this.props.location.state.property.id,
            reviewState:null,
            // error: ""
        };
    }

    // static getDerivedStateFromProps(nextProps,prevState){
    //     console.log(nextProps)
    //     if(prevState.reviewState===null){
    //         return{
    //             reviewState: nextProps.ReviewData,
    //         }
    //     }else return null
    // }

    handleFieldChange = (e) => {
        this.setState({
            review:e.target.value
        })
    };

    onSubmit=(e)=> {
        // prevent default form submission
        e.preventDefault();
        
        // loading status and clear error
        // this.setState({ error: "", loading: true });
    
        // persist the comments on server
        console.log(this.props)
        console.log(this.props.location.state.property)
       
        this.props.addReviewActions.addReview(this.state)

    }
    
    // renderError() {
    //     return this.state.error ? (
    //       <div className="alert alert-danger">{this.state.error}</div>
    //     ) : null;
    // }

    render() {
        return (
            <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.review}
              className="form-control"
              placeholder="Add your thoughts about the vehicle ride here"
              name="message"
              rows="4"
            />
          </div>

          {/* {this.renderError()} */}

          <div className="form-group">
            <button className="btn btn-primary" disabled={this.state.loading}>{/*disabled={this.state.loading*/}
              Comment &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        addReviewActions: bindActionCreators(addReviewActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.AddReview,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ReviewForm))
