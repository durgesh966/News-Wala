import React, { Component } from 'react'

export class newsItem extends Component {
  render() {
    let { title, description, imgurl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgurl} className="card-img-top" alt=" not found" />
          <div className="card-body">
            <h5 className="card-title">{!title?"Title Not Found":title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-info">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default newsItem
