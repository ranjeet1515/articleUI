export default function PostRegisterReducer(state = {}, action) {
  switch (action.type) {
    case "POST_REGISTER_PENDING":
      return {
        ...state,
        isPostRegisterPending: true,
        postRegisterError: undefined,
      };
    case "POST_REGISTER_FULFILLED":
      return {
        ...state,
        isPostRegisterPending: false,
        data: action.payload.data,
        postRegisterError: undefined,
      };
    case "POST_REGISTER_REJECTED":
      return {
        ...state,
        isPostRegisterPending: false,
        postRegisterError: action.payload,
      };
    default:
      return state;
  }
}
