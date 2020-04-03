import React from "react";
import "../../style/emailClient.scss";
import InboxSideBar from "../components/InboxSideBar";
import EmailMessSideBar from "../components/EmailMessSideBar";
import fetchAPI from "../http/fetch";
import { connect } from "react-redux";
import { setEmailData } from "../actions";
import { deleteEmail } from "../actions";
import { unreadEmail } from "../actions";
import { spamEmail } from "../actions";

/**
 * This class is designed to hold all the
 * elements regarding the Email dashboard
 * for the client.
 */
class EmailClient extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filterData: "",
      requestAPI: false
    };
  }

  componentDidMount() {
    this.firstMockToAPI();
    setInterval(() => {
      this.mockDataFromAPI();
    }, 90000);
  }

  mockDataFromAPI = () => {
    fetchAPI("/api")
      .then(response => {
        return response.json();
      })
      .then(response => {
        const { data } = this.props.eClient;
        const newData = [...response.data, ...data];
        this.props.setEmailData(newData);
        this.filterDataEmail();
      })
      .catch(error => {
        console.log(error);
      });
  };

  firstMockToAPI = () => {
    this.setState({ requestAPI: true }, () => {
      fetchAPI("/api")
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.setState({ requestAPI: false });
          const { data } = this.props.eClient;
          const newData = [...response.data, ...data];
          this.props.setEmailData(newData);
          this.filterDataEmail();
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  filterDataEmail = () => {
    const { data, filter } = this.props.eClient;

    const dataFiltered = [];
    data.forEach((element, index) => {
      element.index = index;
      if (filter == "inbox") {
        if (!element.isDeleted && !element.isSpam) dataFiltered.push(element);
      } else if (filter == "spam") {
        if (element.isSpam) dataFiltered.push(element);
      } else if (filter == "deleted") {
        if (element.isDeleted) dataFiltered.push(element);
      }
    });
    this.setState({ filterData: dataFiltered });
  };

  componentDidUpdate(prevProps, prevState) {
    const currFilter = this.props.eClient.filter;
    const prevFilter = prevProps.eClient.filter;

    // Email Card Index
    const currCrdIndx = this.props.eClient.eIndex;

    // Client emails
    const { data } = this.props.eClient;

    // Delete action
    const currActDelete = this.props.eClient.eDelete;
    const prevActDelete = prevProps.eClient.eDelete;

    // // Spam Action
    const currActSpam = this.props.eClient.eSpam;
    const prevActSpam = prevProps.eClient.eSpam;

    // Unread Action
    const currActUnread = this.props.eClient.eUnread;
    const prevActUnread = prevProps.eClient.eUnread;

    if (prevFilter !== currFilter) {
      this.filterDataEmail();
    }

    if (currActDelete !== prevActDelete) {
      if (currActDelete) {
        data[currCrdIndx].isDeleted = true;
        data[currCrdIndx].isSpam = false;
        this.props.setEmailData(data);
        this.filterDataEmail();
        this.props.deleteEmail(false);
      }
    }

    if (currActSpam !== prevActSpam) {
      if (currActSpam) {
        data[currCrdIndx].isDeleted = false;
        data[currCrdIndx].isSpam = true;
        this.props.setEmailData(data);
        this.filterDataEmail();
        this.props.spamEmail(false);
      }
    }

    if (currActUnread !== prevActUnread) {
      if (currActUnread) {
        data[currCrdIndx].isReaded = false;
        this.props.unreadEmail(false);
      }
    }
  }

  render() {
    return (
      <div className="emailDs">
        <InboxSideBar
          data={this.state.filterData}
          requestAPI={this.state.requestAPI}
        />
        <EmailMessSideBar />
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
  setEmailData,
  deleteEmail,
  unreadEmail,
  spamEmail
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailClient);
