import axios from "axios";

const dataInitial = {
    array : []
}

const GET_AMIIBO_SUCCESS = 'GET_AMIIBO_SUCCESS'

export default function amiboReducer(state = dataInitial, action){
    switch(action.type){
        case GET_AMIIBO_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state    
    }
}

export const getAmiiboAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://www.amiiboapi.com/api/amiibo/?id=01010000000e0002')
        dispatch({
            type: GET_AMIIBO_SUCCESS,
            payload: res.data.results
        })

    } catch (error) {
        console.log(error)
    }

}