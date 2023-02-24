import React, { useState } from 'react'
import './index.css'
import NaviationBar from '../../components/NavigationBar'
import Card from '../../components/Card'
import house1 from '../../assets/image/house1.jpg'  //These are the images used in dataset
import house2 from '../../assets/image/house2.jpg'
import house3 from '../../assets/image/house3.jpg'
import house4 from '../../assets/image/house4.jpg'
import house5 from '../../assets/image/house5.jpg'
import house6 from '../../assets/image/house6.jpg'
import house7 from '../../assets/image/house7.jpg'
import house8 from '../../assets/image/house8.jpg'

function Home() {
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")
    const [selection, setSelection] = useState({
        price: "",
        location: "",
        date: "",
        type: ""
    })

    const data = [{      //Dummy data begins from here
        price: "1000",
        location: "newyork",
        date: "2023-02-26",
        type: "flat",
        name: "The Oberoi",
        img: house7
    }, {
        price: "300",
        location: "sanfransisco",
        date: "2023-02-25",
        type: "bunglow",
        name: "Rambagh Hotel",
        img: house6
    }, {
        price: "3000",
        location: "newyork",
        date: "2023-02-28",
        type: "flat",
        name: "Nayara Tented",
        img: house2
    }, {
        price: "2342",
        location: "newyork",
        date: "27-02-2023",
        type: "houses",
        name: "The Opposite",
        img: house3
    }, {
        price: "3123",
        location: "los angeles",
        date: "2023-02-26",
        type: "flat",
        name: "Capella",
        img: house4
    }, {
        price: "342",
        location: "silicon valley",
        date: "2023-02-26",
        type: "Bunglow",
        name: "Capella Ubud",
        img: house2
    }, {
        price: "1000",
        location: "newyork",
        date: "27-02-2023",
        type: "Bunglow",
        name: "Grace Hotel",
        img: house1
    }, {
        price: "1323",
        location: "sanfransisco",
        date: "2023-02-27",
        type: "Bunglow",
        name: "Kamalame Cay",
        img: house4
    }, {
        price: "623",
        location: "newyork",
        date: "2023-02-27",
        type: "farmhouse",
        name: "The Oberoi",
        img: house3
    }, {
        price: "2344",
        location: "silicon valley",
        date: "2023-02-27",
        type: "houses",
        name: "The Temple",
        img: house2
    }, {
        price: "1000",
        location: "newyork",
        date: "2023-02-27",
        type: "Bunglow",
        name: "The Oberoi",
        img: house1
    }, {
        price: "1000",
        location: "newyork",
        date: "2023-02-26",
        type: "Bunglow",
        name: "Hotel Paracas",
        img: house8
    }, {
        price: "4324",
        location: "los angeles",
        date: "2023-02-25",
        type: "Bunglow",
        name: "Taj Holiday",
        img: house7
    }, {
        price: "5000",
        location: "los angeles",
        date: "2023-02-26",
        type: "houses",
        name: "Savute Elephant",
        img: house6
    }, {
        price: "1000",
        location: "newyork",
        date: "2023-02-27",
        type: "flat",
        name: "The Oberoi",
        img: house5
    }, {
        price: "1231",
        location: "silicon valley",
        date: "2023-02-26",
        type: "flat",
        name: "Mandarin Oriental",
        img: house4
    }, {
        price: "1000",
        location: "los angeles",
        date: "2023-02-26",
        type: "houses",
        name: "La Réserve Paris",
        img: house3
    }, {
        price: "3213",
        location: "newyork",
        date: "2023-02-25",
        type: "Bunglow",
        name: "Nobu Ryokan",
        img: house2
    }, {
        price: "2500",
        location: "los angeles",
        date: "2023-02-28",
        type: "flat",
        name: "Soneva Fushi",
        img: house1
    }, {
        price: "1000",
        location: "newyork",
        date: "2023-02-28",
        type: "flat",
        name: "Shangri-La the",
        img: house8
    }, {
        price: "4000",
        location: "silicon valley",
        date: "2023-02-26",
        type: "houses",
        name: "Canaves Oia",
        img: house7
    }, {
        price: "5000",
        location: "sanfransisco",
        date: "2023-02-26",
        type: "flat",
        name: "Soneva Fushi",
        img: house6
    }, {
        price: "2000",
        location: "los angeles",
        date: "2023-02-26",
        type: "Bunglow",
        name: "Manoir Hovey",
        img: house5
    }, {
        price: "3212",
        location: "sanfransisco",
        date: "2023-02-25",
        type: "flat",
        name: "Alila Manggis",
        img: house4
    }, {
        price: "400",
        location: "newyork",
        date: "2023-02-28",
        type: "farmhouse",
        name: "Soneva Fushi",
        img: house3
    }, {
        price: "400",
        location: "los angeles",
        date: "2023-02-28",
        type: "farmhouse",
        name: "Shangri-La the",
        img: house2
    }, {
        price: "2754",
        location: "sanfransisco",
        date: "2023-02-26",
        type: "houses",
        name: "The Taj",
        img: house7
    }, {
        price: "2734",
        location: "los angeles",
        date: "2023-02-26",
        type: "houses",
        name: "Radiant",
        img: house7
    }, {
        price: "3054",
        location: "newyork",
        date: "2023-02-26",
        type: "houses",
        name: "seasons",
        img: house3
    }, {
        price: "2894",
        location: "silicon valley",
        date: "2023-02-26",
        type: "houses",
        name: "oberoi",
        img: house5
    }, {
        price: "2894",
        location: "silicon valley",
        date: "2023-02-26",
        type: "bunglow",
        name: "Taj Mehal",
        img: house8
    }, {
        price: "2894",
        location: "silicon valley",
        date: "2023-02-26",
        type: "flat",
        name: "oberoi",
        img: house2
    }]

    const onClickSearch = () => {        //This function will update the selection state which helps in filtering the data
        setSelection({ ...selection, location: location, date: date, price: price, type: type })
    }


    return (
        <div className="home-container">
            <NaviationBar />
            <div className="home-content">
                <div className="home-header">
                    <span>Search properties to rent</span>
                    <div className="search-input">
                        <input type="text" placeholder='Search with Search Bar' />
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="home-banner">
                    <div className="location">
                        <span>Location</span>
                        <select onChange={(e) => { setLocation(e.target.value) }}>
                            <option value="">Select Location</option>
                            <option value="newyork">New York</option>
                            <option value="sanfransisco">Sanfransisco</option>
                            <option value="los angeles">Los Angeles</option>
                            <option value="silicon valley">Silicon Valley</option>
                        </select>
                    </div>
                    <div className="date">
                        <span>When</span>
                        <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
                    </div>
                    <div className="price">
                        <span>Price</span>
                        <select onChange={(e) => { setPrice(e.target.value) }}>
                            <option value="">Select Price</option>
                            <option value="100-500">$100-$500</option>
                            <option value="500-2500">$500-$2,500</option>
                            <option value="2500-3500">$2,500-$3,500</option>
                        </select>
                    </div>
                    <div className="property-type">
                        <span>Property Type</span>
                        <select onChange={(e) => { setType(e.target.value) }} >
                            <option value="">Select Type</option>
                            <option value="houses">Houses</option>
                            <option value="flat">Flats</option>
                            <option value="farmhouse">Farm House</option>
                            <option value="Bunglow">Bunglow</option>
                        </select>
                    </div>
                    <button className="search" onClick={() => { onClickSearch() }}>Search</button>
                </div>
                {/* Here is the logic for filtering the data and then mapping the output array */}
                <div className="card-container">
                    {data.filter((data, index) => {
                        return ((selection.location == "" || selection.location == data.location) && (selection.date == "" || selection.date == data.date) && (selection.type == "" || selection.type == data.type) && (selection.price == "" || (Number(data.price) >= Number(selection.price.substring(0, selection.price.indexOf("-"))) && Number(data.price) <= Number(selection.price.substring(selection.price.indexOf("-") + 1, selection.price.length)))))
                    }).map((data, index) => {
                        return (
                            <div className="row">
                                <Card data={data} key={index} num={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home