import {ADD_PERSON, DELETE_PERSON} from 'constants_redux.js'

// {type: 'ADD_PERSON', index: '', name: ""}
// {type: 'DELETE_PERSON', index: '', ""}


function people(state, action){
    switch(action.type){
        case 'ADD_PERSON':
            return state.concat([{name: state.name, index: state.length+1}])
        case 'DELETE_PERSON':
            return state.map((person, index) => action.index == person.index ? state.splice(person.index,1) : person)
        default:
            return state
    }
}