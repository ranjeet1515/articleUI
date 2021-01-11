export default function ArticleReducer(state = {}, action) {
  switch (action.type) {
    case "GET_ARTICLE_LIST_PENDING":
      return {
        ...state,
        isArticleListPending: true,
        getArticleListError: undefined,
      };
    case "GET_ARTICLE_LIST_FULFILLED":
      return {
        ...state,
        isArticleListPending: false,
        list: action.payload.data,
        getArticleListError: undefined,
      };
    case "GET_ARTICLE_LIST_REJECTED":
      return {
        ...state,
        isArticleListPending: false,
        getArticleListError: action.payload,
      };
    case "POST_ARTICLE_CREATE_PENDING":
      return {
        ...state,
        isPostArticleCreatePending: true,
        postArticleCreateError: undefined,
      };
    case "POST_ARTICLE_CREATE_FULFILLED":
      return {
        ...state,
        isPostArticleCreatePending: false,
        newArticle: action.payload.data,
        postArticleCreateError: undefined,
      };
    case "POST_ARTICLE_CREATE_REJECTED":
      return {
        ...state,
        isPostArticleCreatePending: false,
        postArticleCreateError: action.payload,
      };
    default:
      return state;
  }
}
