import React from 'react';


function Navigation() {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-light mt-4">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Types
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" >Casual</a></li>
                            <li><a className="dropdown-item" >Classic</a></li>
                            <li><a className="dropdown-item" >Retro</a></li>
                        </ul>
                    </li>
                    {/* ini mo buat posisi di tengah */}
                    <span className="nav position-absolute top-50 start-50 translate-middle">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" >Popular Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Low Price</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >High Price</a>
                        </li>
                    </span>

                    {/* ini mo buat posisi diujung kanan */}
                    <div className="me-5 position-absolute top-0 end-0">
                        <li className="nav-item dropdown">
                            <a className="pt-3 nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Price
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item">Expensive</a></li>
                                <li><a className="dropdown-item">Medium Price</a></li>
                                <li><a className="dropdown-item">Low Price</a></li>
                            </ul>
                        </li>
                    </div>

                </ul>
            </div>

        </nav>
    );
}

export default Navigation;