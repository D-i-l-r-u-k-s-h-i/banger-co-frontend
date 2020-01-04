import React, { Component } from 'react'
import { allAdditionalEquipsActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom'
import CardAE from './ae_card';

export class SliderComponentAE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            additionalEquipsData: props.additionalEquipsData,
            property: null,
            loaded: false,
            additionalEquipsState: null
        }
    }

    async componentDidMount() {
        await this.refreshList();
    }

    refreshList(){
        this.props.allAdditionalEquipsActions.allAdditionalEquips(this.state)
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

    nextProperty = () => {
        // console.log(this.props.additionalEquipsData[0].index)
        
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: this.state.additionalEquipsData[newIndex]
        })
        
    }

    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: this.state.additionalEquipsData[newIndex]
        })
    }

    content() {
        console.log(this.props)
        
        const { additionalEquipsData,property} = this.state;
        
        return(
            <div className="page">
                <div className="topics">
                    <h1>Travel equiment that you might need.</h1>
                </div>
            <section>
                <button className="btn btn-primary active"
                    onClick={() => this.prevProperty()}
                    disabled={property.index===0}
                >❮❮Prev</button>
                <button className="btn btn-primary active"
                    onClick={() => this.nextProperty()}
                    disabled={property.index === additionalEquipsData.length - 1}
                >Next❯❯</button>

            </section>
            <br></br><br></br><br></br><br></br>
            <div className="col">
                <div className={`cards-slider active-slide-${property.index}`}>
                    <div className="cards-slider-wrapper" style={{
                        'transform': `translateX(-${property.index * (100 / additionalEquipsData.length)}%)`
                    }}>
                         {
                            additionalEquipsData.map(property => <CardAE key={property._id} property={property} />)
                        }
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
                <section>
                    <div className="center">
                    <Link to={{
                        pathname: '/aequipment',
                        state: {
                            property: this.state.property
                        }
                    }}
                        id="submit"
                        type="submit"
                        className="btn btn-primary btn-lg"
                    >More Details</Link>

                        <br />
                    </div>
                </section>
        </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.loaded ? this.content() : null}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        allAdditionalEquipsActions: bindActionCreators(allAdditionalEquipsActions, dispatch)
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllAdditionalEquips,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderComponentAE))
