const CHANGE_STYLE = 'CHANGE_STYLE';


let initialState = {

    style: "light"
};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STYLE:
            return {
                ...state,
                style: action.style
            };
        default:
            return state
    }
};

export const changeStyleAC = (style) => {
    return {
        type: CHANGE_STYLE, style
    };
};


export default settingsReducer;