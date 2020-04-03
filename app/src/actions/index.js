import * as types from "../constants/ActionTypes";

/**
 * Store all the email data
 */
export const setEmailData = data => ({
  type: types.EMAIL_DATA,
  data
});

/**
 * Filter the email by inbox, deleted or spam
 */
export const filterEmail = filter => ({
  type: types.FILTER_EMAIL,
  filter
});

/**
 * Set the index of the email selected by
 * the user
 */
export const selectedEmail = index => ({
  type: types.EMAIL_SELECTED,
  index
});

/**
 * Set an email as deleted
 */
export const deleteEmail = deleteEm => ({
  type: types.EMAIL_DELETE,
  deleteEm
});

/**
 * Set an email as spam
 */
export const spamEmail = spam => ({
  type: types.EMAIL_SPAM,
  spam
});

/**
 * Set an email as unread
 */
export const unreadEmail = unread => ({
  type: types.EMAIL_MRKUNREAD,
  unread
});

/**
 * Set searchbox data
 */
export const setSearchBarData = data => ({
  type: types.GET_SEARCH_DATA,
  data
});
