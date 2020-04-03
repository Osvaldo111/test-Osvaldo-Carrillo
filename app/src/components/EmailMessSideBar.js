import React from "react";
import "../../style/emailMessSideBar.scss";
import { connect } from "react-redux";
import { deleteEmail } from "../actions";
import { spamEmail } from "../actions";
import { unreadEmail } from "../actions";
import { setEmailData } from "../actions";
import EmailBdyNavBar from "./emailBdyNavBar";
import EmailBdy from "./EmailBdy";

/**
 * This class is design to hold the elements
 * belonging to the left side of the application.
 */
class EmailMessSideBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      emailData: ""
    };
  }
  componentDidUpdate(prevProps, prevState) {
    // Email Card Index
    const currCrdIndx = this.props.eClient.eIndex;
    const prevCrdIndx = prevProps.eClient.eIndex;

    // Client emails
    const { data } = this.props.eClient;

    if (currCrdIndx !== prevCrdIndx) {
      this.setState({
        emailData: data[currCrdIndx]
      });
    }
  }

  /**
   * Firte the events delete, Spam and
   * Mark as unread.
   */
  onClickDelete = () => this.props.deleteEmail(true);

  onClickSpam = () => this.props.spamEmail(true);

  onClickMrkUnread = () => this.props.unreadEmail(true);

  render() {
    const index = this.props.eClient.eIndex;
    return (
      <div className="emailBrCt">
        <EmailBdyNavBar
          onClickDelete={this.onClickDelete}
          onClickSpam={this.onClickSpam}
          onClickMrkUnread={this.onClickMrkUnread}
          disabled={index === null ? true : false}
        />
        <EmailBdy data={this.state.emailData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eClient: state.emailClientRed
  };
}
const mapDispatchToProps = {
  deleteEmail,
  spamEmail,
  unreadEmail,
  setEmailData
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailMessSideBar);
