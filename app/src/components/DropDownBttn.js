import React from "react";
import "../../style/dropDownBttn.scss";
import { connect } from "react-redux";
import { filterEmail } from "../actions";

/**
 * This class is the drop down button
 * which allows the user to filter by inbox,
 * deleted, and spam
 */
class DropDownBttn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    };
  }

  /**
   * Select the current email card and
   * mark the element as readed
   */
  selectFilter = () => {
    if (event.target.tagName === "A") {
      var filterSelected = event.target.getAttribute("data-filter");
      this.props.filterEmail(filterSelected);
    }
  };

  displayDropDown = () => {
    const { showDropDown } = this.state;
    if (!showDropDown) {
      this.setState({ showDropDown: true });
    } else {
      this.setState({ showDropDown: false });
    }
  };

  render() {
    const { showDropDown } = this.state;

    return (
      <div>
        <div className="drDwnCt">
          <div className="drDwnBttn">Filter by</div>
          <div className="arrDrDwnCt" onClick={this.displayDropDown}>
            <div className="triangle-up"></div>
            <div className="triangle-down"></div>
          </div>
        </div>
        <div
          className="dropdown-content"
          onClick={this.selectFilter}
          style={{ maxHeight: showDropDown ? "150px" : "0px" }}
        >
          <a href="#" data-filter="inbox">
            Inbox
          </a>
          <a href="#" data-filter="spam">
            Spam
          </a>
          <a href="#" data-filter="deleted">
            Deleted
          </a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  filterEmail
};
export default connect(null, mapDispatchToProps)(DropDownBttn);
