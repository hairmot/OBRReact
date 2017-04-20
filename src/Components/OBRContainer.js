import React, {Component} from 'react';
import * as actionCreators from '../Actions/ActionCreators.js';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import SMRPanel from './SMRPanel';
import OBRPanel from './OBRPanel';

class OBRContainer extends Component {
  render() {
    let rows = this.props.modules.filter(a => a.Module).map(a => <SMRPanel key={a.Module} saveRow={this.props.actions.saveRow} updateRow={this.props.actions.updateRow} module={a} />);
    return (
      <OBRPanel loading={this.props.loading} >
        {rows}
      </OBRPanel>
    );
  }

  componentDidMount() {
  //this.props.actions.getData(document.getElementById('ApiGet').innerHTML);
  this.props.actions.getData('api/index.js');
  }
}


const mapStateToProps = function(store, ownProps) {
  return {
    modules: store.modules,
    loading: store.loading
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps)(OBRContainer);
