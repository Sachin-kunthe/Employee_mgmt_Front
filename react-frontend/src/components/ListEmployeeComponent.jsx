import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component 
{

    constructor(props) 
    {
        super(props)
        
            this.state={
                employees:[]

            }
            this.addEmployee=this.addEmployee.bind(this);
            this.editEmployee=this.editEmployee.bind(this);
            this.deleteEmployee=this.deleteEmployee.bind(this);
        
    }

    deleteEmployee(id)
    {
        // rest API call 
        EmployeeService.deleteEmployee(id).then(res => {
        this.setState({employees: this.state.employees.filter(employee => employee.id !==id)});
        });
    }


    viewEmployee(id)
    {
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id)
    {
        this.props.history.push(`/update-employee/${id}`);
    }

    componentDidMount()
    {
        EmployeeService.getEmployees().then((res) =>
        {
            this.setState({ employees: res.data});
        });
    }

    addEmployee()
    {
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center"> Employee List </h2>
                 <div className="row">
                     <button className="btn btn-primary btn-sm font-weight-bolder" onClick={this.addEmployee}> Add Employee </button>
            </div>
            <div className= "table-wrapper-scroll-y my-custom-scrollbar" >
                  
                   <table className="table table-striped table-bordered table-hover clearfix">

                       <thead>   
                                   <tr>
                                       <th> Employee First Name </th>
                                       <th> Employee Last Name </th>
                                       <th> Employee Email ID </th>
                                       <th> Actions </th>

                                    </tr>



                       </thead>
                    
                       <tbody >

                              {
                                  this.state.employees.map(
                                        employee => 
                                        <tr key= {employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName} </td>
                                            <td> {employee.emailID} </td>
                                            <td> 
                                                    <button onClick = { () => this.editEmployee(employee.id)}className="btn btn-info btn-sm"> Update </button> 
                                                    
                                                    <button style={{marginLeft: "10px"}} onClick = { () => this.deleteEmployee(employee.id)} className="btn btn-danger btn-sm"> Delete </button>

                                                    <button style={{marginLeft: "10px"}} onClick = { () => this.viewEmployee(employee.id)}className="btn btn-info btn-sm"> View </button>
                                            </td>
                                        </tr>
                                  )
                              }         
                           </tbody>
                       
                       </table>
                       </div>
                     </div>



                
         
        )
    }
}

export default ListEmployeeComponent;