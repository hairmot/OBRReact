import React, {Component} from 'react';
import * as actionCreators from '../Actions/ActionCreators.js';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import SMRPanel from './SMRPanel';

class OBRContainer extends Component {
  render() {
    let rows = this.props.modules.map(a => <SMRPanel key={a.Module} saveRow={this.props.actions.saveRow} updateRow={this.props.actions.updateRow} module={a} />);
    return (
      <div className="sv-panel sv-panel-primary" >
        <div className="sv-panel-heading">
          <h2 className="sv-panel-title">
            Select Assessments
          </h2>
        </div>
        <div className="sv-panel-body">
          <div>
            <p>Within the relevent module, click the box on the left to select an assessment task. You must click Save and then provide evidence of work in progress before moving on to the nex asessment task. Only assessments that have a submission date within the apppropriate timescale will appear for selection.</p>
            <p>To de-select an assessment task click Remove</p>
            <p>Evidence of work in progress</p>
            <p>Please provide evidence of work completed to date for each assessment task that you have selected. For pieces of work that are not electronic (eg models) a photograph of the work can be uploaded.</p>
          </div>
          <hr />
          {rows}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store, ownProps) {
  return {
    modules: store.modules
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
   return { actions: bindActionCreators(actionCreators, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps)(OBRContainer);
