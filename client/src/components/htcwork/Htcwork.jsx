import React from 'react'
import './Htcwork.css'
import Asset4 from '../../assets/Asset4.png'

const Htcwork = () => {


    return (
        <section id='htc-work'>
            <h2>{('HOW IMAGE TEXT CONVERTER WORK?')}</h2>
            <h5>{('Our high-performance Online OCR tool “image text converter” follows a 3-step process to enable the quickest extraction of text from images. Heres a comprehensive explanation of how effectively our online image to text converter works to facilitate users:')}</h5>


            <div className="continer htc-work__container">
                <div className="htc-work__item">
                    <h3 className='item_head'>{('Image Analysis')}</h3>
                    <p className='item_info'>{('Just as an image is uploaded, our online image text converter analyzes it in order to check the text layout and gather precise information about certain formatting elements.This way, it basically pinpoints the areas which contain the textual data and determines how the extracted text will be structured at the end of the process.')}</p>
                    <h3 className='item_head'>{('Character Recognition ')}</h3>
                    <p className='item_info'>{('The second step is to identify the language in which each character written on the image is recognised. Image Text Character tool analyzes each character sequentially to identify the language and then decipher all words in the specified text flow. In essence, our tool uses its extensive vocabulary in order to recognize written text.')}
                    </p>
                    <h3 className='item_head'>{('Text Extraction')}</h3>
                    <p className='item_info'>{(' In order to complete the process, our image text converter primarily focuses on extracting the identified characters (words) in the specified text layout. It makes sure  to extract the textual data without changing or leaving out any piece of information. Once the text extraction is done, our tool displays the retrieved text right away.')}
                    </p>
                </div>
                <div className="htc-work__me">
                    <div className="htc-work__img">
                        <img className='htc__img' src={Asset4} alt="htc_img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Htcwork