import React from "react";
import "../../style/emailBdyNvBar.scss";

/**
 * This function is designed to hold all the
 * elements regarding the email navigation bar on
 * the message section. This fires the function
 * to delete, spam, or mark as unread.
 */
const EmailBdyNavBar = props => {
  const { disabled } = props;
  let disabledBttn;
  if (disabled) {
    disabledBttn = {
      opacity: 0.6,
      cursor: "not-allowed"
    };
  }
  return (
    <div className="emBdyNvCt">
      <div className="emBdNavRgBTn">
        <button
          className="bttnDlt"
          onClick={() => props.onClickDelete()}
          style={disabledBttn}
          disabled={disabledBttn}
        >
          Delete
        </button>
        <button
          className="btnSpam"
          onClick={() => props.onClickSpam()}
          style={disabledBttn}
          disabled={disabledBttn}
        >
          Spam
        </button>
      </div>
      <div>
        <button
          className="btnMrkUrd"
          onClick={() => props.onClickMrkUnread()}
          style={disabledBttn}
          disabled={disabledBttn}
        >
          Mark as unreaded
        </button>
      </div>
    </div>
  );
};

export default EmailBdyNavBar;
