import React from 'react'
import './Faq.css'
import Faq1 from '../../assets/Asset6.png'

const data = [
  {
    id: 1,
    title: 'What does OCR mean?',
    info: 'OCR stands for Optical Character Recognition, which involves the use of technology to carry out the process of text recognition and extraction from images. The written data is extracted from scanned documents or images and translated into machine-readable text which is then used for data processing.'
  },
  {
    id: 2,
    title: 'Is OCR artificial intelligence?',
    info: 'The process of OCR is dependent upon machine learning techniques and computer vision. This machine learning is a subcategory of artificial intelligence. Through these methods, an algorithm is created to identify certain types of patterns. Thus, we can affirm thaat OCR is purely a form of artificial intelligence.'
  },
  {
    id: 3,
    title: 'Is OCR technology accurate?',
    info: 'CThe majority of OCR tools provide an accuracy rate of 98-99%.On a page of 1000 characters, approximately 980 to 990 characters will be accurate. This level of accuracy is considered acceptable.'
  },
  {
    id: 4,
    title: 'How do I convert a picture to text?',
    info: 'The OCR tool offers you a feature of an image text converter that lets you convert an image into a text document. It functions by extracting text with absolute clarity from any type of image and converting it into an editable file.'
  },
  {
    id: 5,
    title: 'What is text extraction from images?',
    info: 'Text extraction is mainly referred to as image to text conversion. It is the process of deriving words and phrases (written text) from scanned documents and images through OCR technology.'
  },
  {
    id: 6,
    title: 'Is our image to text converter based on OCR?',
    info: 'Yes. Our Image to text converter uses OCR (Optical Character Recognition) technique to extract text from images. It works effectively to make sure that every given image is converted into editable text document.'
  },
  {
    id: 7,
    title: 'Which algorithm is used to detect text in images?',
    info: 'There are different types of algorithms available to detect and extract text from images. Anyhow, OCR is the most commonly used technology for this purpose. You can find a variety of online tools that use the “optical character recognition” algorithm to facilitate text extraction from images.'
  },
  {
    id: 8,
    title: 'How does OCR read the characters in a document?',
    info: 'Various fonts and text image patterns are stored as templates on the OCR software. Pattern matching algorithms are used by the software to compare text images, word by word to its internal database. The uploaded document is converted by the OCR software into a black-and-white version. The scanned image is then analyzed for light and dark areas. Dark areas are specified as characters that need to be recognized, while light areas are recognized as the background.'
  }
]

const Faq = () => {
  return (
   <section id="faq1">
    <div className="faq_head">
      <img src={Faq1} alt="" className="faq_img" />
      <h5 className='faq_title'>Find the answers for the most frequently asked questions below</h5>
     <div className="container faq_container">
      {
        data.map(({ id, title, info}) => {
          return (
            <article key={id} className='faq_cards'>
            <h5 className='faq_qtn'>{title}</h5>
            <p className='faq_ans'>{info}</p>
          </article>
          )
        }
        )
      }
     </div>
    </div>
   </section>
  )
}

export default Faq