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
    case "PUT_ARTICLE_EDIT_PENDING":
      return {
        ...state,
        isPutArticleEditPending: true,
        putArticleEditError: undefined,
      };
    case "PUT_ARTICLE_EDIT_FULFILLED":
      return {
        ...state,
        isPutArticleEditPending: false,
        editArticle: action.payload.data,
        putArticleEditError: undefined,
      };
    case "PUT_ARTICLE_EDIT_REJECTED":
      return {
        ...state,
        isPutArticleEditPending: false,
        putArticleEditError: action.payload,
      };
    case "GET_ARTICLE_DETAILS_PENDING":
      return {
        ...state,
        isGetArticleDetailsPending: true,
        getArticleDetailsError: undefined,
      };
    case "GET_ARTICLE_DETAILS_FULFILLED":
      return {
        ...state,
        isGetArticleDetailsPending: false,
        details: action.payload.data,
        getArticleDetailsError: undefined,
      };
    case "GET_ARTICLE_DETAILS_REJECTED":
      return {
        ...state,
        isGetArticleDetailsPending: false,
        getArticleDetailsError: action.payload,
      };
    case "GET_ARTICLE_SEARCH_LIST_PENDING":
      return {
        ...state,
        isGetArticleSearchListPending: true,
        getArticleSearchListError: undefined,
      };
    case "GET_ARTICLE_SEARCH_LIST_FULFILLED":
      return {
        ...state,
        isGetArticleSearchListPending: false,
        searchList: action.payload.data,
        getArticleSearchListError: undefined,
      };
    case "GET_ARTICLE_SEARCH_LIST_REJECTED":
      return {
        ...state,
        isGetArticleSearchListPending: false,
        getArticleSearchListError: action.payload,
      };
    case "PUT_ARTICLE_DELETE_PENDING":
      return {
        ...state,
        isDeleteArticlePending: true,
        deleteArticleError: undefined,
      };
    case "PUT_ARTICLE_DELETE_FULFILLED":
      return {
        ...state,
        isDeleteArticlePending: false,
        deleteData: action.payload.data,
        deleteArticleError: undefined,
      };
    case "PUT_ARTICLE_DELETE_REJECTED":
      return {
        ...state,
        isDeleteArticlePending: false,
        deleteArticleError: action.payload,
      };
    default:
      return state;
  }
}
