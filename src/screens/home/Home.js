import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Home extends React.Component {

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
            <>
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
            </>
        );
    }
}

export default Home;