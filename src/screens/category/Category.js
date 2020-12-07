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

class Category extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }

    fields = [
        { key: 'id', label: 'ID', _style: { width: '10%' } },
        { key: 'name', label: 'Name', _style: { width: '10%'} },
        { key: 'page_id', label: 'Page Name', _style: { width: '10%'} },
        { key: 'description', label: 'Description', _style: { width: '10%'} },
        { key: 'createdBy', label: 'Recorder', _style: { width: '10%'} },
        { key: 'createdAt', label: 'Record Date',  _style: { width: '5%'} },
        { key: 'updatedBy', label: 'Modifier', _style: { width: '10%'} },
        { key: 'updatedAt', label: 'Modify Date', _style: { width: '5%'} },
        { key: 'action', _style: { width: '15%'} }
    ]

    componentDidMount(){
        axios.get(`${baseUrl}`+`/api/v1/category`)
          .then((response) => {
            this.setState({ categories: response.data.data });
            console.log(this.state.categories);
          })
          .catch(function (error) {
            console.log(error);
          }) 
    }

    render(){
        return(
            <CCard>
                <CCardHeader>
                    <CButton to="/category/create" className="float-right">+ New</CButton>
                </CCardHeader>
                <CCardBody>
                     <CDataTable
                     items={this.state.categories}
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
                                <CButton to={`/user/edit/${item.id}`} className="btn btn-secondary mr-2" size='sm'>
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

export default Category;