export const initialAlertState = {
    isActive: false
}

export const alertReducer = (state, action) =>{
    switch(action.type) {
        case 'IS_ALERT_ACTIVE': {
            console.log({state, action})
            return {
                isActive: action.payload
            }
        }
    }

    
}
