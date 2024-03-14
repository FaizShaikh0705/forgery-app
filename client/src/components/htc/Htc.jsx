import React from 'react'
import './Htc.css'
import Asset1 from '../../assets/Asset1.png'
import Asset2 from '../../assets/Asset2.png'
import Asset3 from '../../assets/Asset3.png'





// =======Generating how to extract Items from Array using map method=====


const data = [
  {
    id: 1,
    img: Asset1,
    title: 'STEP 1 - Enter Image',
    info: 'Use drag-and-drop or simply click on “upload” to insert the image from your system'
  },
  {
    id: 2,
    img: Asset2,
    title: 'STEP 2 - Run Image Text Converter',
    info: 'After uploading the image, simply tap on “extract text” to run our free online OCR tool'
  },
  {
    id: 3,
    img: Asset3,
    title: 'STEP 3 - Extract Text',
    info: 'Wait for a few seconds until our tool completes the OCR process and displays the results'
  }
]

const Htc = () => {


  return (
    <section id='htc'>
      <h2>{('How To Extract Text From Image?')}</h2>
      <h5>{('Follow these simple steps to convert any image into editable and searchable text file:')}</h5>


      <div className="container htc_container">
        {
          data.map(({ id, img, title, info }) => {
            return (
              <article key={id} className="htc__items">
                <div className="htc__items-image">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{info}</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}



// ======using react bootstrap=====

/* <section className='htc'>
<div className="feature-section bg-3 py-md-5 py-3">
  <div className="container">
    <div className="row">
      <div className='col-xl-10 mx-auto text-center'>
        <h2>{('How To Extract Text From Image?')}</h2>
        <h5>{('Follow these simple steps to convert any image into editable and searchable text file:')}</h5>

        {
          data.map(({ id, img, title, info}) => {
            return (
              <div key={id} className='row mt-4'>
          <div className='col-md-4 col-sm-8 mx-sm-auto shadow rounded-10 mx-3 py-3'>
            <img src={img} alt="" />
            <h3 className='mx-auto'>
              {title}
            </h3>
            <p className="para-1">
              {info}
            </p>
          </div>
        </div>
            )
          })
        }
        
      </div>
    </div>
  </div>
</div>
</section> */


export default Htc



