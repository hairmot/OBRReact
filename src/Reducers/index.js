import serialize from 'form-serialize';

let defaultState = {modules:[{}], loading:false};


function Reducer(state, action) {
    switch(action.type) { 

        case "SAVE_ROW" : 
            //order is important for SITS to parse - always append to this.
            var data = [
                            action.data.task.MapCode,
                            action.data.task.MabSeq,
                            action.data.task.Selected ? true : false, 
                            action.data.task.TaskTitle, 
                            action.data.task.DueDate, 
                            action.data.task.TaskType, 
                            action.data.task.Dissertation
                        ];
            //stringify and add Delimeter
            document.getElementById('ApiPost').children[0].value = data.join('~');
            var form = document.querySelectorAll('form')[0];
            console.log(serialize(form));
          
            return state;    

         case "UPDATE_ROW" :  
            //clone the state - we shouldn't directly mutate the state.
            var clonedArray = JSON.parse(JSON.stringify(state)); 
            if (action.data.field !== "Selected") { 
                //update normal input
                clonedArray.modules.filter(a => a.Module === action.data.module)[0].Tasks.filter(a => a.MabSeq === action.data.row.MabSeq)[0][action.data.field] = action.data.newVal;
            }
            else { 
                //handle selected slightly differently (we always want to assume we are toggling the value on or off)
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