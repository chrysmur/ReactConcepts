// const store = {
//     users: { 
//         user1: {name:"", phone:""},
//         user2: {name:"", phone:""}
//         },
//     checkValue: false,
// }

import { createStore } from 'redux'
import rootReducer from  './reducers'

const store = createStore(rootReducer)

export default store