import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import Dropzone from 'react-dropzone';
import Nav from '../nav/Nav';
import bg1 from '../../assets/bg2.jpg';
import './Header1.css'


const ImageToTextConverter = () => {
    const [result, setResult] = useState('');
    // const [redirectLink, setRedirectLink] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English
    const [linkText, setLinkText] = useState('');

    const handleDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            const dataUrl = reader.result;
            convertImageToText(dataUrl);
        };
        reader.readAsDataURL(file);
    };



    return (
        <section id='Header' style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', maxHeight: '100%' }}>
            <Nav />
            <div className="container convertor_container" style={{ height: '100vh' }}>
                <div className="row h-100">
                    <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
                        <div>
                            <h1 className="text-center py-5 mc-5">IMAGE TO TEXT</h1>
                            <Dropzone onDrop={handleDrop}>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()} className="dropzone drop-img">
                                        <input {...getInputProps()} />
                                        <img src={`https://imagetextconverter.com/assets/img/upload.svg`} alt="drop" height="150px" style={{ position: "relative" }} />
                                        <p className="text-black-50 position-relative">Drag &amp; Drop files here to upload
                                        </p>
                                    </div>

                                )}
                            </Dropzone>
                            {result && (
                                <div>
                                    <h2>Result:</h2>
                                    <p>{result}</p>
                                    {linkText && (
                                        <div>
                                            <h3>Link Found:</h3>
                                            <a href={linkText} target="_blank" rel="noopener noreferrer">
                                                {linkText}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,74.7C384,96,480,192,576,213.3C672,235,768,181,864,160C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
    );
};

export default ImageToTextConverter;