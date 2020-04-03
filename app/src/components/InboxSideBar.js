import React from "react";
import "../../style/inboxSideBar.scss";
import { connect } from "react-redux";
import { selectedEmail } from "../actions";
import InboxNavBar from "./InboxNavBar";
import EmailCard from "./EmailCard";
import LoadingSpinner from "./LoadingSpinner";

/**
 * This class is design to hold the elements
 * belonging to the left side bar to display the
 * inbox elements.
 */

class InboxSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // Get current id of email list
  onClickEmailCard = event => {
    const emailIndex = event.target.closest(".emCrdCt").id;
    this.props.selectedEmail(emailIndex);

    // Read email
    const { data } = this.props.eClient;
    data[emailIndex].isReaded = true;
  };
  render() {
    const { data, requestAPI } = this.props;
    let { dataSrch } = this.props.eClient;
    let filterContacts;
    if (!data.length == 0) {
      filterContacts = data.filter(contact => {
        return (
          contact.user.toLowerCase().indexOf(dataSrch.toLowerCase()) !== -1
        );
      });
    }

    if (requestAPI)
      return (
        <div className="inboxCt">
          <InboxNavBar length={data.length} />
          <div className="emailCdCt">
            <div className="emailCdCtLd">
              <LoadingSpinner />
            </div>
          </div>
        </div>
      );

    return (
      <div className="inboxCt">
        <InboxNavBar length={data.length} />
        <div className="emailCdCt" onClick={this.onClickEmailCard}>
          {!data.length > 0 ? (
            <div className="emailCdCtLd">
              <div>Empty</div>
            </div>
          ) : (
            filterContacts.map(function(object, index) {
              return <EmailCard key={index} data={object} id={object.index} />;
            })
          )}
        </div>
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
  selectedEmail
};
export default connect(mapStateToProps, mapDispatchToProps)(InboxSideBar);
