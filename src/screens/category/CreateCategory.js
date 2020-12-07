import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
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

  const baseUrl = 'http://localhost:81';

class CreateCategory extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            page_id: '',
            pageOption: []
        }
    }

    handleChange  = (changeObject) => {
        this.setState(changeObject);
    }

    submitHandler = (e) => {
        e.preventDefault();
        const categoryObject = Object.assign({}, {
          name: this.state.name,
          page_id: this.state.page_id,
          description: this.state.description
        });
        console.log(categoryObject);
        axios.post(`${baseUrl}`+`/api/v1/category`, { categoryObject })
          .then(function () {
            window.href = "http://localhost:3000/#/category";
          })
          .catch( error => {
            console.log(error);
          })
    }

    componentDidMount(){
        // Get Page Option
        axios.get(`${baseUrl}`+`/api/v1/page`)
          .then((response) => {
            this.setState({ pageOption: response.data.data });
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
                            <CCol className="md-12 xs-12z">
                                <CFormGroup>
                                    <CLabel>Name <span className="text-danger">*</span></CLabel>
                                    <CInput
                                    className="form-control"
                                    placeholder="Enter Name"
                                    name="name"
                                    onChange={(e) => this.handleChange({ name: e.target.value }) }
                                    />
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel>Page Name <span className="text-danger">*</span></CLabel>
                                    <CSelect className="form-control" name="page_id" 
                                    onChange={(e) => this.handleChange({ page_id: e.target.value }) }>
                                        <option value="0">Select Option</option>
                                        { this.state.pageOption.map((option) => {
                                            return <option key={ option.id } value={ option.id }>{ option.name }</option>
                                        })}
                                    </CSelect>
                                </CFormGroup>
                                <CFormGroup>
                                    <CLabel>Description</CLabel>
                                    <CTextarea
                                    className="form-control"
                                    placeholder="Enter Description"
                                    name="description"
                                    onChange={(e) => this.handleChange({ description: e.target.value }) }
                                    />
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                         <CCol className="md-12 xs-12">
                             <CFormGroup>
                                <CButton to="/category" className="float-right">Cancel</CButton>
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
export default CreateCategory;