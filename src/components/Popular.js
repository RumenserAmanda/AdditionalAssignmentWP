import React from 'react';
import sofa1 from '../sofa/sofa1.png'
import sofa2 from '../sofa/sofa2.png'
import sofa3 from '../sofa/sofa3.png'

function Popular() {
    return (
    <div className="container">
        <div className="row mt-4">
            <div className="me-3 col card" style={{ width: '18rem' }}>
                <div className="nav">
                    <div className="nav-item ms-3 bg-light p-2">New</div>
                    <div className="position-absolute top-0 end-0 nav-item p-2">
                        <i className="bi bi-list-ul me-3"></i>
                        <i className="bi bi-heart me-3"></i>
                    </div>
                </div>
                <img src={sofa1} className="card-img-top" alt="sofa"/>
                <div className="card-body">
                    <h5 className="card-title text-center">Wooden Chair</h5>
                </div>
                <div className="nav">
                    <div className="nav-item">
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="position-absolute bottom-0 end-0">
                        <span className="border me-3">
                            Rp. 12.000
                            <i className="border bi bi-cart-fill ms-5"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="me-3 col card" style={{ width: '18rem' }}>
                <div className="nav">
                    <div className="nav-item ms-3 bg-light p-2">New</div>
                    <div className="position-absolute top-0 end-0 nav-item p-2">
                        <i className="bi bi-list-ul me-3"></i>
                        <i className="bi bi-heart me-3"></i>
                    </div>
                </div>
                <img src={sofa2} className="card-img-top" alt="sofa"/>
                <div className="card-body">
                    <h5 className="card-title text-center">Wooden Chair</h5>
                </div>
                <div className="nav">
                    <div className="nav-item">
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="position-absolute bottom-0 end-0">
                        <span className="border me-3">
                            Rp. 12.000
                            <i className="border bi bi-cart-fill ms-5"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="me-3 col card" style={{ width: '18rem' }}>
                <div className="nav">
                    <div className="nav-item ms-3 bg-light p-2">New</div>
                    <div className="position-absolute top-0 end-0 nav-item p-2">
                        <i className="bi bi-list-ul me-3"></i>
                        <i className="bi bi-heart me-3"></i>
                    </div>
                </div>
                <img src={sofa3} className="card-img-top" alt="sofa"/>
                <div className="card-body">
                    <h5 className="card-title text-center">Wooden Chair</h5>
                </div>
                <div className="nav">
                    <div className="nav-item">
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"style={{ color: 'yellow' }}></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="position-absolute bottom-0 end-0">
                        <span className="border me-3">
                            Rp. 12.000
                            <i className="border bi bi-cart-fill ms-5"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Popular;