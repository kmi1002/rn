import { all } from 'redux-saga/effects';
import { watchLogin, watchUserInfo, watchUpdateUserInfo } from './auth';

function* rootSaga() {
  yield all([watchLogin(), watchUserInfo(), watchUpdateUserInfo()]);
}

export default rootSaga;
