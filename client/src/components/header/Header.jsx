import React, { useState } from 'react'
import './Header.css'
import Nav from '../nav/Nav'
import bg1 from '../../assets/bg2.jpg'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Header = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleImageUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const response = await axios.post('http://localhost:3002/process-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setResponse(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleImageUpload1 = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const response = await axios.post('http://localhost:3002/process-images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setResponse(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleImageUpload2 = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image);

            const response = await axios.post('http://localhost:3002/process-img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setResponse(response.data);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <section id='Header' style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', maxHeight: '100%' }}>
            <Nav />
            <div className="container convertor_container" style={{ height: '100vh' }}>
                <div className="rowh-100 text-center">
                    <h1 style={{ paddingTop: "400px", fontSize: "32px" }}>Online Fake Document Detection System</h1>
                </div>
                <div className='panel'>
                    <Tabs>
                        <TabList>
                            <Tab>PanCard</Tab>
                            <Tab>AadharCard</Tab>
                            <Tab>10th Marksheet</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='panel'>
                                <input type="file" accept="image/*" onChange={handleImageChange} />
                                <button onClick={handleImageUpload}>Upload Image</button>
                                {response && (
                                    <div>
                                        <h2>Response:</h2>
                                        <p>{response}</p>
                                    </div>
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='panel'>
                                <input type="file" accept="image/*" onChange={handleImageChange} />
                                <button onClick={handleImageUpload1}>Upload Image</button>
                                {response && (
                                    <div>
                                        <h2>Response:</h2>
                                        <p>{response}</p>
                                    </div>
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='panel'>
                                <input type="file" accept="image/*" onChange={handleImageChange} />
                                <button onClick={handleImageUpload2}>Upload Image</button>
                                {response && (
                                    <div>
                                        <h2>Response:</h2>
                                        <p>{response}</p>
                                    </div>
                                )}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,74.7C384,96,480,192,576,213.3C672,235,768,181,864,160C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
    );


}

export default Header


