import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Multiselect } from 'multiselect-react-dropdown';
import {
    CCard,
    CCardBody,
    CRow,
    CCol,
    CInput,
    CFormGroup,
    CForm,
    CLabel,
    CButton,
    CSelect,
    CImg,
    CInputFile
  } from '@coreui/react';

class CreatePost extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            content: props.content,
            handleWYSIWYGInput: props.handleWYSIWYGInput,
            editor: ClassicEditor,
            file: '',
            options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2}]
        } 
    }

    submitHandler = (e) => {
        e.preventDefault();
        // const userObject = Object.assign({}, {
        //     file: URL.createObjectURL(e.target.files[0])
        // });

        // axios.post(`${baseUrl}`+`/api/v1/user`, { userObject })
        //   .then(function () {
        //     // <Redirect to="/user" />
        //   })
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
          })
    }
    
    handleChange  = (changeObject) => {
        this.setState(changeObject);

    }

    render(){
        return(
            <CCard>
                <CCardBody>
                <CForm>
                    <CRow>
                        <CCol className="col-md-8 xs-8">
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Title <span className="text-danger">*</span></CLabel>
                                    <CInput
                                    className="form-control"
                                    placeholder="Enter Title"
                                    />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Barcode </CLabel>
                                    <CInput
                                    className="form-control"
                                    placeholder="Enter Barcode"
                                    />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Description</CLabel>
                                    <CKEditor
                                    editor={ ClassicEditor }
                                    data="I think you are confused in how to configure the ckeditor setting in React. Mostly people are i was at the start but to do configuration in the ckeditor for react component you have to follow it like this. I React it take 
                                    config as an object which take another object inside that's how we add and remove plugins."
                                    config={{ckfinder: {
                                        uploadUrl: 'http://localhost:3000/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                                    }}}
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                        </CCol>
                        <CCol className="col-md-4 col-xs-4">
                            <CCard>
                                <CCardBody>
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Thumnail <span className="text-danger">*</span></CLabel>
                                            <CImg src={'avatars/no_image.png'} alt="image" className="img-fluid"/>
                                            <CInputFile />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Categories <span className="text-danger">*</span></CLabel>
                                            <CSelect>
                                                <option>Select Option</option>
                                                <option>T-shirt</option>
                                            </CSelect>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    <CRow>
                                        <CCol className="md-12 xs-12">
                                            <CFormGroup>
                                            <CLabel>Tags</CLabel>
                                            <Multiselect
                                            options={this.state.options} // Options to display in the dropdown
                                            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                            onSelect={this.onSelect} // Function will trigger on select event
                                            onRemove={this.onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                            />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol className="md-12 xs-12">
                            <CFormGroup>
                                <CButton className="float-right">Public</CButton>
                                <CButton to="/role" className="float-right">Cancel</CButton>
                            </CFormGroup>
                        </CCol>
                    </CRow>
                </CForm>
                </CCardBody>
            </CCard>
        );
    }
}
export default CreatePost;