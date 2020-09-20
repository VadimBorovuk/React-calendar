const initialState = {
    data: [
        {id:1, name:"vadim",value:""},
        {id:2, name:"Tanya", value: ""},
    ]
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case 'GET_DATA':
            return {
                ...state,
                data: payload,
            };
        default: return state
    }
}