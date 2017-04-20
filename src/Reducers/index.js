//import * as types from '../Constants/ActionTypes'

let defaultState = {modules:[{}], loading:false};


function Reducer(state, action) {
    switch(action.type) {  
        case "SAVE_ROW" : 
            var data = [action.data.task.MapCode,action.data.task.MabSeq,
                        action.data.task.Selected ? true : false, action.data.task.TaskTitle, 
                        action.data.task.DueDate, action.data.task.TaskType, 
                        action.data.task.Dissertation];

            document.getElementById('ApiPost').children[0].innerHTML = data.join('~');
            console.log(action.data.task);
            return state;    

         case "UPDATE_ROW" :  
            var clonedArray = JSON.parse(JSON.stringify(state));
            if (action.data.field !== "Selected") {
                clonedArray.modules.filter(a => a.Module === action.data.module)[0].Tasks.filter(a => a.MabSeq === action.data.row.MabSeq)[0][action.data.field] = action.data.newVal;
            }
            else
            {
                clonedArray.modules.filter(a => a.Module === action.data.module)[0].Tasks.filter(a => a.MabSeq === action.data.row.MabSeq)[0]["Selected"] = !clonedArray.modules.filter(a => a.Module === action.data.module)[0].Tasks.filter(a => a.MabSeq === action.data.row.MabSeq)[0]["Selected"];
            }
            return clonedArray;

          case "LOADING_DATA" :          
            return {...state, loading: action.loading};

          case "RECEIVE_DATA" :
            return {...state, modules : action.data, loading: action.loading};

          default: 
            return defaultState;
    }
}

export default Reducer;