import React, { Component } from 'react';

class TaskRow extends Component {    
	constructor(props) {
		super();
	}
  render() {
      return (
	
      <tr className="requestRow">
			<td><p className="sv-form-control-static sv-text-center"><input type="checkbox" className="sv-text-align-center" name="Selected" onChange={this.updateRow} checked={this.props.task.Selected} /></p></td>
			<td><p type="text" className="sv-form-control-static sv-text-center">{this.props.task.MabSeq}</p></td>
			<td><input type="text" className="taskTitle sv-form-control" name="TaskTitle" onChange={this.updateRow} value={this.props.task.TaskTitle} size="50" /></td>
			<td><p className="sv-form-control-static sv-text-center">{this.props.task.TaskWeighting}%</p></td>
			<td><input type="text" className="dueDate sv-form-control" name="DueDate" value={this.props.task.DueDate} onChange={this.updateRow}/></td>
			<td>	
          <select onChange={this.updateRow} name="TaskType" value={this.props.task.TaskType} className="taskType sv-form-control">
            <option>Please select</option>
          	<option>Phase Test</option>
						<option>Practical</option>
						<option>Presentation/Group Work</option>
						<option>Other</option>
          </select>
            </td>
			<td>
        <select onChange={this.updateRow} name="Dissertation" value={this.props.task.Dissertation} className="dissertation sv-form-control">
					<option>Please select</option>
					<option>Yes</option>
					<option>No</option>
				</select>
			</td>
 			<td>
					<input type="button" className="add sv-btn sv-btn-default sv-form-control" value="Upload Work in Progress" /> 
					<input type="button" onClick={this.saveRow} className="add sv-btn sv-btn-primary sv-form-control" value="Save" />
			</td> 
		</tr>
      )
  }

	updateRow = (e) => {
		this.props.updateRow({module: this.props.module, row: this.props.task, field: e.target.name, newVal: e.target.value});
	}

  saveRow = () => {
	this.props.saveRow(this.props);
  }  
}
export default TaskRow;