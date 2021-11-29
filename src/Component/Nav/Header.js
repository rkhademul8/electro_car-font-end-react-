import React from 'react';
import './style.css'
const Header = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg  back">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" > ElectroCar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">EXPLORE CAR</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link ">DASHBOARD</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </div>
    );
};

export default Header;