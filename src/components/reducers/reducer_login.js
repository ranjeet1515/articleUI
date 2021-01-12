const defaultState = {
  isPostLoginPending: false,
  data: undefined,
  postLoginError: undefined,
};
export default function PostLoginReducer(state = defaultState, action) {
  switch (action.type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isPostLoginPending: true,
        postLoginError: undefined,
      };
    case "POST_LOGIN_FULFILLED":
      return {
        ...state,
        isPostLoginPending: false,
        data: action.payload.data,
        postLoginError: undefined,
      };
    case "POST_LOGIN_REJECTED":
      return {
        ...state,
        isPostLoginPending: false,
        postLoginError: action.payload,
      };
    case "RESET_POST_LOGIN":
      return defaultState;
    default:
      return state;
  }
}
