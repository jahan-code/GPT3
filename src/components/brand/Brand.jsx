import React from 'react'
import './brand.css';
import {google,atlassian,slack,shopify,dropbox} from './imports'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding' id='brand'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  )
}

export default Brand