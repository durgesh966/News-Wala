import React, { Component } from 'react'

export class navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a class="navbar-brand" href="/">
                            <img src="https://w7.pngwing.com/pngs/400/76/png-transparent-computer-icons-news-media-newspaper-physical-address-extension-blue-text-label.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                            News Wala
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="nav justify-content-center" id="navbarSupportedContent">
                            <ul className="nav justify-content-center me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Aboout</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Feed's</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Developer Team</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar
