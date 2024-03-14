import React from 'react'
import './Understand.css'

const Understand = () => {


  return (
    <section id="understand_main">
      <div className="main_page">
        <h2 className='understand_head'>{('UNDERSTANING OPTICAL CHARACTER RECOGINTION (OCR)')}</h2>
        <p className='para_understand'>{('Optical character recognition is a field in computer vision and artificial intelligence. It is basically a technology that deals with pattern recognition and text extraction. More clearly, it can convert scanned and photographed documents into machine-readable text files.')}</p>
        <p className='para_understand'>{('There are four different types of OCR which are as follows:')}</p>
        <ul className='para_understand'>
          <li>{('Optical character recognition (OCR)')}</li>
          <li>{('Optical character recognition (OCR)')}</li>
          <li>{('Intelligent Character Recognition (ICR)')}</li>
          <li>{('Intelligent Word Recognition (IWR)')}</li>
        </ul >
        <p className='para_understand'>{('It is important to note that the most common type of OCR-based tools is image to text converter. This type of tool enable us to extract text from images and PDF files.')}</p>
        <h3 className="para_head">{('Examples and Uses')}</h3>
        <p className='para_understand'>{('Let’s say you come across a poster with an interesting quote written on it. You liked the quotation and want to save it as text. Just upload the poster in the OCR tool and see how quickly it extracts the text (quotation) written on it. It will display the extracted text in editable form so that you can easily copy and use it.')}</p>
        <p className='para_understand'>{('You can simply scan a document or simply take its picture if you want the OCR to extract text from it. Remember that it can be any type of image that you can process through OCR such as a scanned image, wallpaper, screenshot, or photograph.')}</p>
        <p className='para_understand'>{('Whether it is a screenshot of your chat, picture of your handwritten notes, or scan of any official document, you can convert it into text with the help OCR-based tools.')}</p>
        <h3 className="para_head">{('Other Applications')}</h3>
        <p className='para_understand'>{('There can be various reasons for which OCR technology can be used. In addition to using OCR for retrieving text from images, we can leverage it for the following purposes:')}</p>
        <ul className='para_understand'>
          <li>{('Pen Computing')}</li>
          <li>{('Passport Identification')}</li>
          <li>{('Traffic Sign Recognition')}</li>
          <li>{('Automatic Number Plate Identification')}</li>
          <li>{('CAPTCHA Anti-bot System Validation')}</li>
          <li>{('Assistiance For Visually-impaired Computer Users')}</li>
          <li>{('Automatic Information Extraction from Insurance Documents')}</li>
        </ul >
        <p className='para_understand'>{('The OCR technology is certainly useful and beneficial in a number of ways. Regardless of how you use it, there’s one things for certain: OCR has made data processing simpler and more efficient.')}</p>
      </div>
    </section>
  )
}

export default Understand