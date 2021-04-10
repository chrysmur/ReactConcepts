## Redux
- It is a store that acts as the single source of truth when handling state in the app

> state is stored in the "Store" which can only be one in a single application
- Changing the state involves dispatching an action
#### Store
{
    users: [{user1: {name:"", phone:""},
            {user2: {name:"", phone:""},
    ],
    checkValue: false,
}

#### Action
a javascript object, with the type of with the type of action and the property to be changed
They must have the type property
{_
    type:'UPDATE_USER',
    payload: {name:'guy'} //payload can be anyname
    _
}
DRY
create reusable actions, create actiona creators
const addInfo = (info) => {
    return {
        type: 'UPDATE_INFO',
        payload: info
    }
}

#### Reducer
Takes the state and the action and returns the next state after change
Checks the type of action and does something to the state as per the action and return the next state

They are pure functions that do not modify the inputs but return a new value

To trigger several updates on the state using one action we combine reducers using combinereducer


### Cycle
- User creates an event,
- event handler dispaches an action
- Store calls the reducer to check what is to be updated and returned
- Reducer returnss the new state and store updates