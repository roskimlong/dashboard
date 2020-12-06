import React from 'react';
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
    CLabel,
    CTabs,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane
  } from '@coreui/react';

  class CreateRole extends React.Component {

    render(){
        return(
            <CCard>
                <CCardBody>
                <CTabs activeTab="home">
                    <CNav variant="tabs">
                        <CNavItem>
                        <CNavLink data-tab="home">
                            Info
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="permission">
                            Permission
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        </CNavItem>
                    </CNav>
                    <CForm>
                    <CTabContent>
                            <CTabPane data-tab="home">
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Name <star className="text-danger">*</star></CLabel>
                                            <CInput
                                            className="form-control"
                                            placeholder="Enter Name"
                                            />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Description</CLabel>
                                                <CTextarea placeholder="Enter Description" />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                            </CTabPane>
                            <CTabPane data-tab="permission">
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                        <CLabel>Permission</CLabel>
                                    </CFormGroup>
                                    <CFormGroup>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Manage All
                                        </CLabel>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Create
                                        </CLabel>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Edit
                                        </CLabel>
                                        <CLabel className="mr-5">
                                            <input className="mr-2" type="checkbox" />
                                            Delete
                                        </CLabel>
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            </CTabPane>
                        </CTabContent>
                        <CRow>
                            <CCol className="md-12 xs-12">
                                <CFormGroup>
                                    <CButton to="/role" className="float-right">Cancel</CButton>
                                    <CButton className="float-right">Save Change</CButton>
                                </CFormGroup>
                            </CCol>
                        </CRow>
                    </CForm>
                    </CTabs>
                </CCardBody>
            </CCard>
        );
    }
  }
  export default CreateRole;