import React, {useEffect, useContext} from 'react';
import {useDropzone} from 'react-dropzone'
import { BsCloudUpload } from 'react-icons/bs'
import {Link} from "react-router-dom";
import InmueblesContext from '../../contexts/AddListing.context';


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 0,
    marginRight: 0,
    width: '100%',
    height: 'auto',
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
    alignItems: 'start'
};

const img = {
    display: 'block',
    width: 'auto',
    maxWidth: '808px',
    height: 'auto'
};

function PhotoUploader() {
    const form = useContext(InmueblesContext);
    const files = form.files;
    const setFiles = form.setFiles;
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            console.log(acceptedFiles);
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    alt="Author Profile"
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">Imagenes</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="drag-and-drop-wrap text-center">
                                <div className="drag-and-drop-file">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <span className="drag-drop-icon">
                                            <BsCloudUpload />
                                        </span>
                                        <h3>Arrastra y suelta archivos aqu?? para subirlos</h3>
                                        <Link to="#" className="drag-drop-btn">B??squeda de archivos</Link>
                                    </div>
                                    <aside style={thumbsContainer}>
                                        {thumbs}
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PhotoUploader;