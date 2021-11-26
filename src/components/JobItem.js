import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
        //props:
        let {title, description, role, location, salary, url}=this.props;
        return (
            <div className="my-3">
            {/* <span className="badge bg-warning">{source}</span> */}
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text"><strong>Description: </strong>{description.substring(0,235)} <a target="_blank" href={url}>More details</a></p>
                        <p className="card-text"><strong>Role: </strong>{role}</p>
                        <p className="card-text"><strong>Location: </strong>{location}</p>
                        <p className="card-text"><strong>Salary: </strong>{salary}</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
