//import * as types from '../Constants/ActionTypes'

let defaultState = {modules:[{}], loading:false};


function Reducer(state, action) {
    switch(action.type) {  
        case "SAVE_ROW" :
            console.log(action);  
            return defaultState;    

         case "UPDATE_ROW" :  
            var clonedArray = JSON.parse(JSON.stringify(state));
            clonedArray.modules.filter(a => a.Module === action.data.module)[0].Tasks.filter(a => a.Task === action.data.row.Task)[0][action.data.field] = action.data.newVal;
            return clonedArray;

          case "LOADING_DATA" :
          console.log("loading data");
          return state;

          case "RECEIVE_DATA" :
          console.log("receiving data");
          console.log(action.data);
          return {...state, modules : action.data, loading: action.loading};
        default: return defaultState;
    }
}

export default Reducer;