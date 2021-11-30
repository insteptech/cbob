import store from '..';
import { APP_ACTIVITY } from '../type';

const initState = {
    loading: false,
    app_status: 0,
}

const AppActivityReducer = (state = initState, action) => {
    console.log('state.app_status', state.app_status)
    switch (action.type) {
        case APP_ACTIVITY.Change_App_Activity:
            return { ...state, loading: action.payload }
        case APP_ACTIVITY.Change_App_Status:
            return { ...state, app_status: action.payload }
        case APP_ACTIVITY.Toggle_pages:
            return { ...state, app_status: state.app_status == 2 ? 3 : 2 }
        case APP_ACTIVITY.Toggle_QuickC:
            return { ...state, app_status: state.app_status == 3 ? 2 : 3 }
            case APP_ACTIVITY.Toggle_Safes:
                return { ...state, app_status: state.app_status == 2 ? 3 : 2}
        case APP_ACTIVITY.Login_Toggle:
            return { ...state, app_status: state.app_status == 1 ? -1 : 1 }

    }
    return state
}

export default AppActivityReducer;

export const appActivity = (payload = false) => {
    store.dispatch({ type: APP_ACTIVITY.Change_App_Activity, payload });
}

export const changeAppStatus = (payload = 0) => {
    store.dispatch({ type: APP_ACTIVITY.Change_App_Status, payload });
}


export const togglePages = (isLogin) => {
    if (isLogin) {
        
        store.dispatch({ type: APP_ACTIVITY.Login_Toggle });
    }
    else {
        store.dispatch({ type: APP_ACTIVITY.Toggle_pages });
    }

}

export const toggleSafes = () => {
  
        store.dispatch({ type: APP_ACTIVITY.Toggle_Safes });
  

}
export const toggleQuickc = () => {
  
        store.dispatch({ type: APP_ACTIVITY.Toggle_QuickC });
    
}

