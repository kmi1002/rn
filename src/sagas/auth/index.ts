import { call, cancelled, fork, take, put } from 'redux-saga/effects';

import * as authApis from '@apis/auth';
import { setToken } from '@apis/api';

function* login(provider: string, accessToken?: string, email?: string, password?: string) {
  try {
    // Api 호출
    const data = yield call(authApis.login, provider, accessToken, email, password);
    const token: string = data.accessToken;

    // Access Token 저장소
    setToken(token);

    // 성공 통보
    yield put({ type: 'LOGIN_SUCCESS', provider, token });
  } catch (error) {
    // 실패 통보
    yield put({ type: 'LOGIN_FAILURE', error });
  } finally {
    // 취소 통보
    if (yield cancelled()) {
      yield put({ type: 'LOGIN_CANCELLED' });
    }
  }
}

function* userInfo() {
  try {
    const info = yield call(authApis.userInfo);
    yield put({ type: 'USER_INFO_SUCCESS', info });
  } catch (error) {
    yield put({ type: 'USER_INFO_FAILURE' });
  } finally {
  }
}

function* updateUserInfo(userId: number, firstName: string, lastName: string, onSuccess?: any, onFailure?: any) {
  try {
    const info = yield call(authApis.updateProfile, userId, firstName, lastName);
    yield put({ type: 'UPDATE_PROFILE_SUCCESS', info });

    onSuccess && onSuccess();
  } catch (error) {
    yield put({ type: 'UPDATE_PROFILE_FAILURE' });

    onFailure && onFailure(error);
  } finally {
  }
}

export function* watchLogin() {
  while (true) {
    const { provider, accessToken, email, password } = yield take('LOGIN_REQUEST');
    yield fork(login, provider, accessToken, email, password);
  }
}

export function* watchUserInfo() {
  while (true) {
    yield take('LOGIN_SUCCESS');
    yield fork(userInfo);
  }
}

export function* watchUpdateUserInfo() {
  while (true) {
    const { userId, firstName, lastName, onSuccess, onFailure } = yield take('UPDATE_PROFILE_REQUEST');
    yield fork(updateUserInfo, userId, firstName, lastName, onSuccess, onFailure);
  }
}

// 액션들 리스트 출력
export function* loginActions() {
  while (true) {
    const action = yield take('*');
    console.log(action.type);
  }
}
