import React from 'react'
import { useState, useEffect } from 'react';
import { Form, InputGroup } from "react-bootstrap";
export default function Test() {

    const [data, setData] = useState([]);
    const [station, setStation] = useState([]);
    const [card, setCard] = useState([]);

    const [district, setDistrict] = useState([]);
    const [dist, setBike] = useState([]);
    const [searchCity, setSearchCity] = useState('');
    const [searchKeys, setSearchKeys] = useState('');

    useEffect(() => {
        let url1 = 'http://localhost:8080/mainticket/';
        if (searchKeys !== '') {
            url1 = 'http://localhost:8080/mainticket/' + searchKeys;
            console.log(url1)
        }

        fetch(url1)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                setData(data);
            });


        fetch('http://localhost:8080/api/v1/districts')
            .then(res => res.json())
            .then(data => setDistrict(data))

        let url = 'http://localhost:8080/api/v1/stations/'
        fetch(url)
            .then(res => res.json())
            .then(res => setStation(res))
        // let url_card = 'http://localhost:8080/api/v1/cards/'
        // fetch(url_card)
        //     .then(res => res.json())
        //     .then((res) => {
        //         setCard(res)
        //         console.log(res)
        //     })
    }, [searchKeys]);

    const opt = station.map((item) => {
        return (
            <option value={item.id}>
                {item.stationName}
            </option>
        )
    })
    const cards = card.map((item) => {
        return (
            <option value={item.id}>
                {item.cardNum}
            </option>
        )
    })


    let opt_district = [];
    const pickBike = (e) => {
        let station_id = e.target.value;
        // console.log('station_id', station_id);
        opt_district = data.filter(databike => {
            return databike.station.id === station_id
        })
        setBike(opt_district);
        // console.log(e.target.value);
        let station_name = station.filter(station => {
            return card.id === station_name;
        })
        console.log(station_name[0].cardNum);
        setSearchKeys(station_name[0].cardNum);
        console.log('searchkey =', searchKeys);
    }

    const getSearchTerm = (e) => {
        pickBike(e);
        setSearchKeys(e.target.value);
        console.log("search key =", searchKeys);
    }

    return (
        <div className="container mt-5">

            <div className={"container"}>
                <h3>Welcome to station name:</h3>
                <h3>Total available bikes in the station</h3>
                <Form.Group className="mb-3">
                    <Form.Select name="id" onChange={getSearchTerm}>
                        <option value="">Choose Stations</option>
                        {opt}
                    </Form.Select>
                    <Form.Select name="id" onChange={getSearchTerm}>
                        <option value="">Choose Stations</option>
                        {cards}
                    </Form.Select>
                </Form.Group>
                <hr />
                <div>
                    <h3 className='text-center'>Select your bike: </h3><br />
                    <div className={"d-flex flex-wrap justify-content-evenly align-items-center"}>

                        {data.map((item) => {
                            return (
                                <div key={item.id} style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: 20 }} className={"d-flex flex-wrap align-items-center"}>
                                    <input type='checkbox' />

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}
