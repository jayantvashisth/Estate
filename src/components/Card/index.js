import React, { useEffect } from 'react'
import './index.css'
import house1 from '../../assets/image/house1.jpg'
import house2 from '../../assets/image/house2.jpg'
import house3 from '../../assets/image/house3.jpg'
import house4 from '../../assets/image/house4.jpg'
import house5 from '../../assets/image/house4.jpg'
import house6 from '../../assets/image/house4.jpg'
import bed from '../../assets/svg/bed.svg'
import bath from '../../assets/svg/bath.svg'
import area from '../../assets/svg/area.svg'

function Card(props) {
    useEffect(() => {
        console.log(props.key)
    }, [])

    return (
        <div className="cards-container">
            <div className="card-img">
                <img src={props.data.img} alt="" />
            </div>
            <div className="price">
                <div className="price-left">
                    <span>${props.data.price}</span>
                    <p>/month</p>
                </div>

            </div>
            <div className="popular" style={props.num == 2 || props.num == 1 || props.num == 0 ? { visibility: "visible" } : {}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" class="bi bi-stars" viewBox="0 0 16 16"> <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                </svg>
                <span>popular</span>
            </div>
            <div className="title">
                <span>{props.data.name}</span>
                <p>2699 Green Valley, Highland Lake, FL</p>
                <div className="horizontal-line"></div>
            </div>
            <div className="card-footer">
                <div className="svg-group">
                    <img style={{ width: "20px", height: "20px" }} src={bed} alt="" />
                    <span>3 Beds</span>
                </div>
                <div className="svg-group">
                    <img style={{ width: "20px", height: "20px" }} src={bath} alt="" />
                    <span>2 Bathrooms</span>
                </div>
                <div className="svg-group">
                    <img style={{ width: "20px", height: "20px" }} src={area} alt="" />
                    <span>5x7 m^2</span>
                </div>
            </div>
        </div>
    )
}

export default Card