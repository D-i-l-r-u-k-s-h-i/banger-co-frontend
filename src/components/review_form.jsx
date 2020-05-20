import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { addReviewActions } from '../actions'
import { Alert } from 'reactstrap'

export class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            review:null,
            vehicleid:this.props.props,
            reviewState:null,
            visible:false,
            // error: ""
        };
    }

    handleFieldChange = (e) => {
        this.setState({
            review:e.target.value
        })
    };

    onSubmit=(e)=> {
        // prevent default form submission
        e.preventDefault();
        this.setState({
          visible:true
      })
        this.props.addReviewActions.addReview(this.state)

    }
    
    onDismiss = () =>{
      this.setState({
          visible:false
      })
  }

    // renderError() {
    //     return this.state.error ? (
    //       <div className="alert alert-danger">{this.state.error}</div>
    //     ) : null;
    // }

    render() {
      console.log(this.props)
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
              rows="2"
            />
          </div>

          {/* {this.renderError()} */}

          <div className="form-group">
            <span><button className="btn btn-primary btn-sm" disabled={this.state.loading}>{/*disabled={this.state.loading*/}
              Comment &#10148;
            </button><Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                        Thank you For your Review! {this.props.ReviewData}
                    </Alert></span>
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
