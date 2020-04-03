import React from "react";
import "../../style/searchBox.scss";
import { setSearchBarData } from "../actions";
import { connect } from "react-redux";

/**
 * This class is design to be the search box on
 * the inbox side bar.
 */
class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTxt: ""
    };
  }

  handleChange = event => {
    this.setState({ inputTxt: event.target.value });
    this.props.setSearchBarData(event.target.value);
  };

  render() {
    const { inputTxt } = this.state;
    return (
      <div className="searchCt">
        <input
          type="text"
          name="q"
          className="searchbox"
          placeholder="Search "
          value={inputTxt}
          onChange={this.handleChange}
        ></input>
        <button type="submit" className="searchbtn">
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeProps: state
  };
}
const mapDispatchToProps = {
  setSearchBarData
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
