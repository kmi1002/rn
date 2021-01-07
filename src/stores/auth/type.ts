// 로그인
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_PREPARE = 'LOGIN_PREPARE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_CANCELLED = 'LOGIN_CANCELLED';

// 로그아웃
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// 회원가입 상태
export const SIGNUP_DONE = 'SIGNUP_DONE';

// 업데이트 프로필
export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

// 유저 정보
export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'USER_INFO_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginPrepareAction {
  type: typeof LOGIN_PREPARE;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  provider: ProviderType;
  token: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

interface LoginCancelledAction {
  type: typeof LOGIN_CANCELLED;
}

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
}

interface UserInfoRequestAction {
  type: typeof USER_INFO_REQUEST;
}

interface UserInfoSuccessAction {
  type: typeof USER_INFO_SUCCESS;
  info: UserInfoState;
}

interface UserInfoFailureAction {
  type: typeof USER_INFO_FAILURE;
}

interface UpdateProfileRequestAction {
  type: typeof UPDATE_PROFILE_REQUEST;
}

interface UpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS;
  info: UserInfoState;
}

interface UpdateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE;
}

interface SignupDoneAction {
  type: typeof SIGNUP_DONE;
}

export type InitActionTypes =
  | LoginRequestAction
  | LoginPrepareAction
  | LoginSuccessAction
  | LoginFailureAction
  | LoginCancelledAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction
  | UserInfoRequestAction
  | UserInfoSuccessAction
  | UserInfoFailureAction
  | UpdateProfileRequestAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailureAction
  | SignupDoneAction;

export enum ProviderType {
  EMAIL = 'email',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  APPLE = 'apple',
}
export enum SignupStep {
  INIT = 'init',
  DONE = 'done',
}

export enum AuthStateType {
  LOGGED_IN = 'logged_in',
  LOGGED_OUT = 'logged_out',
  LOGIN_FAILURE = 'login_failure',
  LOGIN_CANCELLED = 'login_cancelled',
}

export interface UserInfoState {
  id: number;
  firstName: string;
  lastName: string;
  roles: [string];
}

export interface AuthState {
  // 인증 타입
  provider: ProviderType;

  // 엑세스 토큰
  accessToken: string | null;

  // 상태
  authState: AuthStateType;

  // 회원 가입 단계
  signupStep: SignupStep;

  // 사용자 정보
  info?: UserInfoState;
}
