import { EMAIL_DATA } from "../constants/ActionTypes";
import { FILTER_EMAIL } from "../constants/ActionTypes";
import { EMAIL_SELECTED } from "../constants/ActionTypes";
import { EMAIL_DELETE } from "../constants/ActionTypes";
import { EMAIL_SPAM } from "../constants/ActionTypes";
import { EMAIL_MRKUNREAD } from "../constants/ActionTypes";
import { GET_SEARCH_DATA } from "../constants/ActionTypes";
import mockData from "../../../mockData.json";

const init = {
  data: mockData,
  filter: "inbox",
  eIndex: null,
  eDelete: null,
  eSpam: null,
  eUnread: null,
  dataSrch: ""
};

export default function(state = init, action) {
  switch (action.type) {
    case EMAIL_DATA:
      return { ...state, data: action.data };
    case FILTER_EMAIL:
      return { ...state, filter: action.filter };
    case EMAIL_SELECTED:
      return { ...state, eIndex: action.index };
    case EMAIL_DELETE:
      return { ...state, eDelete: action.deleteEm };
    case EMAIL_SPAM:
      return { ...state, eSpam: action.spam };
    case EMAIL_MRKUNREAD:
      return { ...state, eUnread: action.unread };
    case GET_SEARCH_DATA:
      return { ...state, dataSrch: action.data };
    default:
      return { ...state };
  }
}
