import React from 'react';
import axios from 'axios';
import {
    CButton,
    CCardBody,
    CCardHeader,
    CDataTable,
    CCard
  } from '@coreui/react'

const baseUrl = 'http://localhost:8181';

class Role extends React.Component {

    constructor(){
        super()
        this.state = {
            roles: []
        }
    }

    fields = [
        { key: 'name', _style: { width: '20%'} },
        { key: 'description', _style: { width: '10%'} },
        { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '15%'} }
    ]

    componentDidMount() {
        axios.get(`${baseUrl}`+`/api/v1/role`)
          .then((response) => {
            this.setState({ roles: response.data.data });
            console.log(this.state.users);
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    render(){
        return(
            <CCard>
                <CCardHeader>
                    <CButton to="/role/create" className="float-right">+ New</CButton>
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                    items={this.state.roles}
                    fields={this.fields}
                    tableFilter
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots = {{
                        'action':
                          (item)=>(
                            <td>
                                <CButton className="btn btn-secondary mr-2" size='sm'>
                                   Edit
                                </CButton>
                                <CButton className="btn btn-danger sm" size='sm'>
                                   Delete
                                </CButton>
                            </td>
                        )}}
                    />
                </CCardBody>
            </CCard>
        );
    }
}

export default Role;