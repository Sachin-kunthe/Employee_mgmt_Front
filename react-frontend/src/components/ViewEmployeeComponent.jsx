import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state ={
            id:this.props.match.params.id,
            employee:{}
        }

        }

        componentDidMount()
        {
            EmployeeService.getEmployeeById(this.state.id).then(res =>
                {
                    this.setState({employee: res.data});
                })
        }

    render() {
        return (
            <div>




                 <div className =" card col-md-7 offset-md-3 shadow p-3 mb5 bg-light rounded clearfix">
                     <h3 className= "text-center card-header"> View Employee Details </h3>

            
                     <div className = "card-body shadow p-3 mb5 bg-light rounded list-inline border border-success container text-monospace clearfix">

                         <div className="row">
                       <label> Employee  ID : </label> <span>   </span>
                             <div> {this.state.employee.id} </div>
                         </div>

                         <div className="row">
                             <label> Employee First Name : </label> <span>  </span>
                             <div> {this.state.employee.firstName} </div>
                         </div>

                         <div className="row">
                             <label> Employee Last Name : </label> <span>  </span>
                             <div> {this.state.employee.lastName} </div>
                         </div>

                         <div className="row">
                             <label> Employee Email ID : </label> <span>   </span>
                             <div> {this.state.employee.emailID} </div>
                         </div>

                     </div>
                 </div>
            </div> 

            




        );
    }
}

export default ViewEmployeeComponent;