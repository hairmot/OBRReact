export function saveRow(data) {   
    return {
        type: "SAVE_ROW",
        data
    }
}

export function updateRow(data) {   
    return {
        type: "UPDATE_ROW",
        data
    }
}

export function getData(url) {
    return function(dispatch) {
        dispatch(loadingData());
        return fetch(url, {method: 'GET', credentials: "same-origin"}).then(response => 
        response.json()).then(json =>        
            dispatch(receiveData(json))
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