//import * as types from '../Constants/ActionTypes'

let defaultState = {modules: [{
    "Module": "12-6201-00L - INTERNET ENTREPRENEURSHIP - 2016/7 - Spans Semester 1 & 2",
    "Tasks": [{
        "id":"Knitting for Dummies001",
        "Selected": true,
        "Task": "001",
        "TaskTitle": "Knitting for Dummies",
        "TaskWeighting": "50",
        "DueDate/Time": "01/May/2017",
        "TaskType": "Practical",
        "Dissertation":"No"
        },
        {
            "id":"Knitting for Pros002",
            "Selected": false,
            "Task": "002",
            "TaskTitle": "Knitting for Pros",
            "TaskWeighting": "50",
            "DueDate/Time": "01/June/2017",
            "TaskType": "Phase Test",
            "Dissertation":"Yes"
        }]  
    },
    {
    "Module": "12-6216-00L - DATA WAREHOUSING AND DATA MINING - 2016/7 - Spans Semester 1 & 2",
    "Tasks": [{
        "id":"Pole vaulting for Dummies001",
        "Selected": true,
        "Task": "001",
        "TaskTitle": "Pole vaulting for Dummies",
        "TaskWeighting": "70",
        "DueDate/Time": "01/May/2017",
        "TaskType": "Practical",
        "Dissertation":"No"
        },
        {
            "id":"Pole vaulting for Pros002",
            "Selected": false,
            "Task": "002",
            "TaskTitle": "Pole vaulting for Pros",
            "TaskWeighting": "30",
            "DueDate/Time": "01/June/2017",
            "TaskType": "Phase Test",
            "Dissertation":"Yes"
        }]  
    }
]};

function Reducer(state, action) {
    switch(action.type) {  
        case "SAVE_ROW" :
            console.log(action);  
            return defaultState;    

         case "UPDATE_ROW" :  
            var clonedArray = JSON.parse(JSON.stringify(state));
            clonedArray.modules.filter(a => a.Module === action.data.module)[0].Tasks.filter(a => a.Task === action.data.row.Task)[0][action.data.field] = action.data.newVal;
            return clonedArray;
        default: return defaultState;
    }
}

export default Reducer;