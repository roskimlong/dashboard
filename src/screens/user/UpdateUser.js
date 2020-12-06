import React from 'react';
import axios from 'axios';
import {
    CCard,
    CCardBody,
    CRow,
    CCol,
    CInput,
    CFormGroup,
    CForm,
    CButton,
    CSelect,
    CTextarea,
    CLabel
  } from '@coreui/react';

  const baseUrl = 'http://localhost:8181';

class UpdateUser extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            rolesOption: [],
            username: '',
            email: '',
            password: '',
            role: '',
            description: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        let userObject = [];
        if(this.state.password == ''){
            userObject = Object.assign({}, {
                username: this.state.username,
                email: this.state.email,
                role: this.state.role,
                description: this.state.description
            });
        }else{
            userObject = Object.assign({}, {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role,
                description: this.state.description
            });
        }
        console.log(userObject);

        // axios.put(`${baseUrl}`+`/api/v1/user/1`, { userObject })
        //   .then(function (response) {
        //     console.log(response);
        //     window.location.href="http://localhost:3000/#/user";
        //   })
    }
    
    handleChange  = (changeObject) => {
        this.setState(changeObject);

    }

    componentDidMount(){
        ////// Get roles
        axios.get(`${baseUrl}`+`/api/v1/role`)
          .then((response) => {
            this.setState({ rolesOption: response.data.data });
          })
          .catch(function (error) {
            console.log(error);
          }) 

          ////// Get User one
          axios.get(`${baseUrl}`+`/api/v1/user/1`)
          .then((response) => {
            this.setState({ users: response.data.data });
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    render(){
        return(
            <CCard>
                <CCardBody>
                     <CForm>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                            <CLabel>Username <span className="text-danger">*</span></CLabel>
                             <CInput
                             className="form-control"
                             placeholder="Enter Username"
                             name="username"
                             value= { this.state.users.map( username => username.username)}
                             onChange={(e) => this.handleChange({ username: e.target.value }) }
                             />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                             <CLabel>Email</CLabel>
                             <CInput
                             className="form-control"
                             name="email"
                             placeholder="Enter Email"
                             value= { this.state.users.map( email => email.email)}
                             onChange={(e) => this.handleChange({ email: e.target.value }) }
                             />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                             <CLabel>Password <span className="text-danger">*</span></CLabel>
                             <CInput
                             className="form-control"
                             placeholder="Enter Password"
                             name="password"
                             onChange={(e) => this.handleChange({ password: e.target.value }) }
                             />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                             <CLabel>Confirm Password<span className="text-danger">*</span></CLabel>
                             <CInput
                             className="form-control"
                             placeholder="Enter Confirmation Password"
                             />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                                 <CLabel>Role</CLabel>
                                 <CSelect className="form-select"
                                 onChange={(e) => this.handleChange({ role: e.target.value }) }
                                 value={this.state.users.map( user => user.role_id )}
                                 name="role">
                                     <option>Select Option</option>
                                     {this.state.rolesOption.map((option) => (
                                        <option key={option.id} value={option.id}>{option.name}</option>
                                    ))}
                                 </CSelect>
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                             <CLabel>Description</CLabel>
                                 <CTextarea placeholder="Enter Description"
                                  name="description"
                                  value= { this.state.users.map( description => description.description)}
                                  onChange={(e) => this.handleChange({ description: e.target.value }) }
                                  />
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                                <CButton to="/user" className="float-right">Cancel</CButton>
                                <CButton type="submit" onClick= { this.submitHandler } className="float-right">Save Change</CButton>
                             </CFormGroup>
                         </CCol>
                     </CRow>
                     </CForm>
                </CCardBody>
            </CCard>
        );
    }
}

export default UpdateUser;