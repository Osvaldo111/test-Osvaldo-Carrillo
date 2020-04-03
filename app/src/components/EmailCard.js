import React from "react";
import "../../style/emailCard.scss";
import attachIcon from "../../images/attachIcon.svg";

/**
 * This function is designed to be the email card
 * which holds some data.
 * @param {Object} prop
 */
const EmailCard = prop => {
  const { user, date, subject, attachements, isReaded } = prop.data;
  var index = prop.id;

  let noReadedStyle;
  if (!isReaded) {
    noReadedStyle = {
      backgroundColor: "#EEFAFF",
      borderLeft: "2px solid #03B9ED"
    };
  }

  return (
    <div
      className="emCrdCt"
      style={noReadedStyle}
      data-index={index}
      id={index}
    >
      <div className="emlCrdTp">
        <div>{user}</div>
        <div>{date}</div>
      </div>
      <div className="emCrdBt">
        <div>{subject}</div>
        <div>
          {attachements.length == 0 ? (
            ""
          ) : (
            <img src={attachIcon} alt="" height="10px" width="10px" />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
