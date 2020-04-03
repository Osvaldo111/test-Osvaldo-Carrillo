import React from "react";
import "../../style/emailBdy.scss";
import attachIcon from "../../images/attachIcon.svg";

/**
 * This function returns the email body
 * with the message.
 * @param {Object} props
 */
const EmailBdy = props => {
  const { user, tag, attachements, body, index } = props.data;
  if (props.data == "") return <div className="emBdyMessCtn"></div>;

  return (
    <div className="emBdyMessCtn">
      <div className="emBdyMessCtnCt">
        <div>{user}</div>
        <div className="emBdyTagCtn">
          <div> Tags</div>
          <div className="emBdyTgCtn">{tag}</div>
        </div>
        <div className="emBdyMessBdyCtn">
          <div>{body}</div>
          <div className="emBdyMessBdyBttmBr">
            <div>
              {attachements.length > 0 ? (
                <img src={attachIcon} alt="" height="20px" width="20px" />
              ) : (
                ""
              )}
            </div>
            <div className="emBdyRplyBttn">Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBdy;
