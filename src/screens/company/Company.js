import React from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable
  } from '@coreui/react';

class Company extends React.Component {

    fields = [
        { key: 'id', label: 'ID', _style: { width: '10%' } },
        { key: 'username', label: 'Username', _style: { width: '10%'} },
        { key: 'email', label: 'Email', _style: { width: '10%'} },
        // { key: 'password', label: 'Password', _style: { width: '20%'} },
        { key: 'role_id', label: 'Role', _style: { width: '10%'} },
        { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '15%'} }
    ]

    render(){
        return(
            <CCard>
                <CCardHeader>
                    <CButton to="/company/create" className="float-right">+ New</CButton>
                </CCardHeader>
                <CCardBody>
                     <CDataTable
                    //  items={this.state.users}
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
                                <CButton to={`//edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
                                   Edit
                                </CButton>
                                <CButton className="btn btn-danger sm" size='sm'>
                                   Delete
                                </CButton>
                            </td>
                        )}}
                     >
                     </CDataTable>
                </CCardBody>
            </CCard>
        );
    }
}

export default Company;