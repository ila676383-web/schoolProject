import { formLoginSliceReducer } from './slice/formLoginSlice';
import { configureStore } from "@reduxjs/toolkit"



export const store = () => { 
    return configureStore({
      reducer: { password: formLoginSliceReducer },
    });
} 
export type AppStore = ReturnType<typeof store>
 export type AppStoreDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore["getState"]>;