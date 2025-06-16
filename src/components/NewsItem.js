import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageurl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem", border:"2px solid black"}}>
  <img src={!imageurl?"https://ambcrypto.com/wp-content/uploads/2025/02/Samyukhtha-25-1000x600.webp":imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target='_blank'  rel="noreferrer" className="btn btn-sm btn-dark">Read More Here</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
