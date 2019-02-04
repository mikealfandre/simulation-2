import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateImg } from '../../ducks/reducer'



class StepTwo extends Component {
    constructor() {
        super()
        this.state = {
           
            img: ''
        }
        
    }
    componentDidMount(){
        const {img} = this.props
        this.setState({
            img
        })
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
                        <Link to='/wizard/step1'><button onClick={() => this.props.updateImg(this.state.img)}>Previous Step</button></Link>
                        <Link to='/wizard/step3'><button onClick={() => this.props.updateImg(this.state.img)}>Next Step</button></Link>
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

