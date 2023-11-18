import { createStore, combineReducers } from "redux";
import { bookingReducer } from "./reducer";

const rootReducer = combineReducers({
  booking: bookingReducer,
});

const store = createStore(rootReducer);
export { confirmBookingAction } from "./action";
export default store;
