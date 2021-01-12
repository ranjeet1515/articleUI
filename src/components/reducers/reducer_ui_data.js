const defaultState = {
  articleList: true,
  articleCreate: false,
  articleShow: false,
  articleEdit: false,
  articleSearch: false,
};
export default function UIDataReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_ARTICLE_LIST":
      return {
        ...state,
        articleList: action.payload,
        articleCreate: false,
        articleShow: false,
        articleEdit: false,
        articleSearch: false,
      };
    case "SET_ARTICLE_CREATE":
      return {
        ...state,
        articleCreate: action.payload,
        articleList: false,
        articleShow: false,
        articleEdit: false,
        articleSearch: false,
      };
    case "SET_ARTICLE_SHOW":
      return {
        ...state,
        articleCreate: false,
        articleList: false,
        articleShow: action.payload,
        articleEdit: false,
        articleSearch: false,
      };
    case "SET_ARTICLE_EDIT":
      return {
        ...state,
        articleCreate: false,
        articleList: false,
        articleShow: false,
        articleEdit: action.payload,
        articleSearch: false,
      };
    case "SET_ARTICLE_EDIT_ID":
      return {
        ...state,
        editArticleId: action.payload,
      };
    case "SET_ARTICLE_SEARCH":
      return {
        ...state,
        articleCreate: false,
        articleList: false,
        articleShow: false,
        articleEdit: false,
        articleSearch: action.payload,
      };
    default:
      return state;
  }
}
