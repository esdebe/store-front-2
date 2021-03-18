import { configureStore, combineReducers } from '@reduxjs/toolkit'
import ui from '@libs/core/ui/reducer'

const rootReducer = combineReducers({
  ui,
})

export default configureStore({
  reducer: rootReducer,
  devTools: true,
})
