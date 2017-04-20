export function saveRow(message) {   
    return {
        type: "SAVE_ROW",
        message: message
    }
}

export function updateRow(data) {   
    return {
        type: "UPDATE_ROW",
        data
    }
}

export function getData() {
    return function(dispatch) {
        dispatch(loadingData());
        return fetch('api/index.js').then(response => 
        response.json()).then(json =>
            setTimeout(() => {
            dispatch(receiveData(json)) }, 1000)
        );
    }
}

function loadingData() {
    return {
        type: "LOADING_DATA",
        loading: true
    }
}

function receiveData(json) {
    return {
        type: "RECEIVE_DATA",
        loading: false,
        data: json
    }
}