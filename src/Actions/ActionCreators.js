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