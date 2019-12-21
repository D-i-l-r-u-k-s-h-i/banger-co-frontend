import React, { Component } from 'react'
import data from '../MockData/data'
import Card from './card';
import { allVehicleActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'

export class SliderComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0],
            allVehiclesState:null
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        if(prevState.allVehiclesState===null){
            return{
                allVehiclesState: nextProps.vehicleData
            }
        }else return null
    }

    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render() {
        const { properties, property } = this.state;
        return (
            <div>
                <div className="page">
                    <section>
                        <h1>Select your car here.</h1>
                        <button
                    onClick={() => this.prevProperty()}
                    disabled={property.index === 0}
                >Prev</button>
                <button
                    onClick={() => this.nextProperty()}
                    disabled={property.index === data.properties.length - 1}
                >Next>></button>

                    </section>
                    <br></br><br></br>
                    <div className="col">
                        <div className={`cards-slider active-slide-${property.index}`}>
                            <div className="cards-slider-wrapper" style={{
                                'transform': `translateX(-${property.index * (100 / properties.length)}%)`
                            }}>
                                {
                                    properties.map(property => <Card key={property._id} property={property} />)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        allVehicleActions: bindActionCreators(allVehicleActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.AllVehicles,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SliderComponent))
