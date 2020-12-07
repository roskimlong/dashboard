import React from 'react';
import axios from 'axios';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable
  } from '@coreui/react';

  const baseUrl = 'http://localhost:81';

  class Tag extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            description: '',
            tags: []
        }
    }

    fields = [
        { key: 'id', _style: { width: '10%'} },
        { key: 'name', _style: { width: '10%'} },
        { key: 'description', _style: { width: '10%'} },
        { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '15%'} }
    ]

    componentDidMount(){
        // Get Tags All
        axios.get(`${baseUrl}`+`/api/v1/tag`)
          .then((response) => {
            this.setState({ tags: response.data.data });
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    render(){
        return(
            <CCard>
                <CCardHeader>
                    <CButton to="/tag/create" className="float-right">+ New</CButton>
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                    items={this.state.tags}
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
  export default Tag;