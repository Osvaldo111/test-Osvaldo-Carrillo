import React from "react";
import "../../style/inboxNavBar.scss";
import { connect } from "react-redux";
import SearchBox from "./SearchBox";
import DropDownBttn from "./DropDownBttn";

/**
 * This class is the top navigation bar on the
 * inbox side bar.
 */
const InboxNavBar = props => {
  const currentSection = props.eClient.filter.replace(/^\w/, c =>
    c.toUpperCase()
  );
  return (
    <div className="inbNavCt">
      <div className="inbNavBr">
        <div className="nvBrIn">
          {currentSection} <span>{props.length}</span>
        </div>
        <div className="nvBrFlt">
          <DropDownBttn />
        </div>
      </div>
      <div className="nvBrSrcCt">
        <SearchBox />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    eClient: state.emailClientRed
  };
}

export default connect(mapStateToProps, null)(InboxNavBar);
