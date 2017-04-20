import React, { Component } from 'react';
import TaskRow from './TaskRow';

class SMRPanel extends Component {    
  render() {

    let tasks = this.props.module.Tasks.map(a => <TaskRow module={this.props.module.Module} saveRow={this.props.saveRow} updateRow={this.props.updateRow} key={a.id} taskTitle={a.TaskTitle} task={a}/>);
    return (
        <div className="sv-panel sv-panel-primary">
            <div className="sv-panel-heading">
                <h2 className="sv-panel-title">
                   {this.props.module.Module}
                </h2>
            </div>
            <div className="sv-panel-body">
                <table className="sv-table sv-table-striped sv-table-bordered">
                    <thead>
                        <tr>
                            <th> Select </th>
                            <th> Task </th>
                            <th> Task Title </th>
                            <th> Task Weighting </th>
                            <th> Due Date/Time </th>
                            <th> Task Type </th>
                            <th> Dissertation/Large Project</th>
                            <th> Action </th>
                        </tr>
				    </thead>
                    <tbody>
                        {tasks}
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}

export default SMRPanel;
