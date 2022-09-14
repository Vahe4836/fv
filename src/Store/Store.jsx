import { createStore } from "redux";

const store = createStore((state = {}, action) => {
    if(action.type === "change_text"){
        return{
            ...state,
            currentText:{
                text: action.payload.text
            }
        }
    }

    return state
}, {
    currentText:{
        id: Math.random(),
        text: "Hello",
        isCompleted: false
    },
    posts: []
})

export default store;