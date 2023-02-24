import React from 'react'
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