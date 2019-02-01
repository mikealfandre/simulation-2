import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateImg } from '../../ducks/reducer'



class StepTwo extends Component {
    constructor() {
        super()
        this.state = {
            img: '',
            redirect: false

        }
        
    }

    handleChange(field, value) {
        this.setState({ [`${field}`]: value })
    }
    
    
    



    render() {

        
        
        return (
            <div>
                Wizard Step 2
                <div>
                    Image URL: <input value={this.state.img} onChange={(e) => this.handleChange("img", e.target.value)} type="text" />
                </div>
                <nav>
                    <div>
                        <Link to='/wizard/step1'><button>Previous Step</button></Link>
                        <Link to='/wizard/step3'><button onClick={(e) => this.props.updateImg(e.target.value)}>Next Step</button></Link>
                    </div>
                </nav>




            </div>
        )
    }
}

function mapStateToProps(state) {
    const { img } = state;

    return {
        img
    };
}

export default connect(mapStateToProps, {updateImg})(StepTwo)

