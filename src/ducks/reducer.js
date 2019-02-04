const initialState = {
    
    name:'',
    address:'',
    city:'',
    stateN:'',
    zip:'',
    img:'',
    mortgage: 0.00,
    rent: 0.00

}

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATEN = 'UPDATE_STATEN'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_RENT = 'UPDATE_RENT'
const CLEAR_STATE = 'CLEAR_STATE'




function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, { name: action.payload }) 
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload })
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload })
        case UPDATE_STATEN:
            return Object.assign({}, state, { stateN: action.payload })
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        case UPDATE_IMG:
            return Object.assign({}, state, { img: action.payload });
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, { mortgage: action.payload });
        case UPDATE_RENT:
            return Object.assign({}, state, { rent: action.payload });
        case CLEAR_STATE:
            return Object.assign({}, state, action.payload);
        

        default: return state
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateStateN(stateN) {
    return {
        type: UPDATE_STATEN,
        payload: stateN
    }
}
export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: +zip
    }
}
export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}
export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}
export function clearState() {
    
    return {
        type: CLEAR_STATE,
        payload: initialState
    }
}






export default reducer;