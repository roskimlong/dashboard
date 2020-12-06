import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
    CTextarea
  } from '@coreui/react';

class CreatePost extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id: props.id,
            content: props.content,
            handleWYSIWYGInput: props.handleWYSIWYGInput,
            editor: ClassicEditor
        } 
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
                                    <CLabel>Description</CLabel>
                                    <CTextarea
                                    className="form-control"
                                    placeholder="Enter Description"
                                    />
                                    </CFormGroup>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className="md-12 xs-12">
                                    <CFormGroup>
                                    <CLabel>Content <span className="text-danger">*</span></CLabel>
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
                                            <CLabel>Categories <span className="text-danger">*</span></CLabel>
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
                                            <CLabel>Tags</CLabel>
                                            <CInput
                                            className="form-control"
                                            placeholder="Enter Tag"
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