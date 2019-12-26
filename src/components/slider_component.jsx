import React, { Component } from 'react'
// import data from '../MockData/data'
import Card from './card';
import { allVehicleActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom'

export class SliderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicleData: props.vehicleData,
            property: null,
            loaded: false,
            allVehiclesState: null
        }
    }

    async componentDidMount() {
        await this.refreshList();
    }

    refreshList(){
        this.props.allVehicleActions.allVehicles(this.state)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.vehicleData && nextProps.vehicleData !== prevState.vehicleData) {
            newProps.vehicleData = nextProps.vehicleData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.vehicleData){
            return{
               loaded: true,
               vehicleData:newProps.vehicleData,
               property: newProps.vehicleData[0]
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    nextProperty = () => {
        // console.log(this.props.vehicleData[0].index)
        
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: this.state.vehicleData[newIndex]
        })
        
    }

    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: this.state.vehicleData[newIndex]
        })
    }

    content() {
        const { vehicleData,property} = this.state;
        
        return(
            <div className="page">
            <section>
                <h1>Select your car here.</h1>
                <button
                    onClick={() => this.prevProperty()}
                    disabled={property.index===0}
                >Prev</button>
                <button
                    onClick={() => this.nextProperty()}
                    disabled={property.index === vehicleData.length - 1}
                >Next>></button>

            </section>
            <br></br><br></br>
            <div className="col">
                <div className={`cards-slider active-slide-${property.index}`}>
                    <div className="cards-slider-wrapper" style={{
                        'transform': `translateX(-${property.index * (100 / vehicleData.length)}%)`
                    }}>
                         {
                            vehicleData.map(property => <Card key={property._id} property={property} />)
                        }
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
            <section>
                <div className="center">
                    <Link to={{
                        pathname: '/vehicle',
                        state: {
                            property: this.state.property
                        }
                    }}
                        id="submit"
                        type="submit"
                        className="btn btn-primary btn-lg"
                    >Book Now</Link><br />
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
        allVehicleActions: bindActionCreators(allVehicleActions, dispatch)
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllVehicles,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SliderComponent))
