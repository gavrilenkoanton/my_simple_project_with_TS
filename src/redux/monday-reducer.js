const LOADING = 'LOADING';


let initialState = {

    me: [
        {skill: 'кручу'},
        {skill: 'верчу'},
        {skill: 'запутать хочу'}
    ],
    isLoading: true
};

const mondayReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state
    }
};

export const loadingAC = (isLoading) => {
    return {
        type: LOADING, isLoading
    };
};


export default mondayReducer;