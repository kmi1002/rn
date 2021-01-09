import * as T from './type';
import { AuthStateType, ProviderType, SignupStep } from './type';

// 액션 생성함수
export const loginRequest = (provider: string, accessToken?: string, email?: string, password?: string) => ({
  type: T.LOGIN_REQUEST,
  provider,
  accessToken,
  email,
  password,
});
export const loginPrepare = (provider: string) => ({ type: T.LOGIN_PREPARE, provider });
export const loginSuccess = (user: any) => ({ type: T.LOGIN_SUCCESS, user });
export const loginFailure = (error: any) => ({ type: T.LOGIN_FAILURE, error });

export const signupDone = () => ({ type: T.SIGNUP_DONE });

export const logoutRequest = () => ({ type: T.LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: T.LOGOUT_SUCCESS });
export const logoutFailure = () => ({ type: T.LOGOUT_FAILURE });

export const updateProfileRequest = (
  userId: number,
  firstName: string,
  lastName: string,
  onSuccess?: any,
  onFailure?: any,
) => ({
  type: T.UPDATE_PROFILE_REQUEST,
  userId,
  firstName,
  lastName,
  onSuccess,
  onFailure,
});

// 초기 상태값
const initialState: T.AuthState = {
  provider: ProviderType.GOOGLE,
  accessToken: null,
  authState: AuthStateType.LOGGED_OUT,
  signupStep: SignupStep.INIT,
};

// 리듀셔
const authenticationReducer = (state = initialState, action: T.InitActionTypes): T.AuthState => {
  switch (action.type) {
    case T.LOGIN_SUCCESS:
      return {
        ...state,
        authState: AuthStateType.LOGGED_IN,
        provider: action.provider,
        accessToken: action.token,
        signupStep: SignupStep.DONE,
      };

    case T.LOGIN_FAILURE:
      return {
        ...state,
        authState: AuthStateType.LOGIN_FAILURE,
      };

    case T.LOGIN_CANCELLED:
      return {
        ...state,
        authState: AuthStateType.LOGIN_CANCELLED,
      };

    case T.LOGOUT_SUCCESS:
      return {
        ...state,
        authState: AuthStateType.LOGGED_OUT,
        signupStep: SignupStep.INIT,
      };

    case T.LOGOUT_FAILURE:
      return {
        ...state,
      };

    case T.USER_INFO_SUCCESS:
      return {
        ...state,
        info: action.info,
      };

    case T.USER_INFO_FAILURE:
      return {
        ...state,
      };

    case T.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        info: action.info,
      };

    case T.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
      };

    case T.SIGNUP_DONE:
      return {
        ...state,
        signupStep: SignupStep.DONE,
      };

    default:
      return state;
  }
};

export default authenticationReducer;
