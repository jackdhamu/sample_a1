import React from 'react';
import actions from 'redux/Theaters/actions';
import { Button, PageHeader, Input } from 'antd';
import TheaterTable from 'components/TheaterTable';
import CreateUpdateTheaterDrawer from 'components/CreateUpdateTheaterDrawer';
import { connect } from 'react-redux';
import NavHeader from 'components/NavHeader';

const { Search } = Input;


class Theaters extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: actions.GET_THEATERS,
      payload: { currentPage: 1 },
    });
  }

    openCreateTheaterDrawer = () => {
      this.props.dispatch({
        type: actions.SET_THEATER_DETAILS,
        payload: [],
      });
      this.props.dispatch({
        type: actions.SET_THEATER_DRAWER_VISIBLE,
        payload: true,
      });
    };

    onSearch = value => {
      // Add search logic
      this.props.dispatch({
        type: actions.SEARCH_THEATER_DETAILS,
        payload: value,
      });
    };

    handleViewType = event => {
      // Add search logic
      this.props.dispatch({
        type: actions.HANDLE_VIEW_TYPE,
        payload: event.target.value,
      });
    };

    render() {
      const {
        theaterList,
        theaterListLoader,
        createTheaterDrawerVisible,
        theaterData,
        theaterDataLoader,
        searchValue,
      } = this.props;
      return (
        <>
          <NavHeader/>
          <PageHeader
            ghost={false}
            onBack={false}
            title="Theaters"
            extra={[
              <Search
                key="1"
                placeholder="Search name"
                allowClear
                style={{width: '200px'}}
                onSearch={this.onSearch}
              />,
              <Button key="2" type="primary" onClick={this.openCreateTheaterDrawer}>Create Theater</Button>,
            ]}
          />
          <TheaterTable
            tableData={theaterList}
            tableLoader={theaterListLoader}
            searchValue={searchValue}
          />
          <CreateUpdateTheaterDrawer
            createTheaterDrawerVisible={createTheaterDrawerVisible}
            submitLoader={theaterDataLoader}
            theaterData={theaterData}
          />
        </>
      );
    }
}

const mapStateToProps = state => {
  const {
    theaterList,
    theaterListLoader,
    createTheaterDrawerVisible,
    theaterData,
    theaterDataLoader,
    searchValue,
  } = state.theaterReducer;
  return {
    theaterList,
    theaterListLoader,
    createTheaterDrawerVisible,
    theaterData,
    theaterDataLoader,
    searchValue,
  };
};

export default connect(mapStateToProps)(Theaters);
