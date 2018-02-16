import { combineReducers } from 'redux';
import stepAReducer from './stepA_reducer';
import stepBReducer from './stepB_reducer';
import stepCReducer from './stepC_reducer';

const rootReducer = combineReducers({
      stepAData:stepAReducer,
      stepBData:stepBReducer,
      stepCData:stepCReducer,

});
export default rootReducer;
