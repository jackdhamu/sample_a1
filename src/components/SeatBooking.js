import "../App.css";
import React, { useState } from "react";
import clsx from "clsx";
import { Button, Col, Row } from "antd";
import NavHeader from "./NavHeader";

const movies = [
  {
    name: "Avenger",
    price: 10,
    occupied: [0]
  },
  {
    name: "Joker",
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26]
  },
  {
    name: "Toy story",
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3]
  },
  {
    name: "the lion king",
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47]
  }
];
const a2 = 9;
const seats = Array.from({ length: 9 * a2 }, (_, i) => i);

export default function SeatBooking() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="App">
      <NavHeader/>
      <br/><br/>
      <Row>
        <Col offset={2} span={10}>
       
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      /><br/>
      </Col>
        <Col offset={2} span={8}>
        <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      />
      <hr/><br/>
      <h4><b>THEATRES</b></h4>
      <h3>
      Kumari Theatre DTS 4K UHD A/C Cube
      </h3><br/>
      <h4><b>SHOW TIME</b></h4>
      <h3>
        TIMING
      </h3><br/>
      <hr/><br/>
        <h3 className="info">
          <Row>
            <Col offset={6}>
            <span className="count">{selectedSeats.length}</span>&nbsp;&nbsp;Seat(s){" "}
            </Col>
            <Col offset={6} >
            price of{" "}
        <span className="total">
         Rs:&nbsp; {selectedSeats.length * selectedMovie.price}
        </span>
        <br/>
            </Col>
           </Row> 
      </h3>
      <br/>
      <Button type="primary" size="large">Continue</Button><br/><br/><hr/><br/>
      <ShowCase />
       </Col>
      </Row>
      <br/>
      <br/><br/><br/>
    
    </div>
  );
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (Rs : {movie.price})
          </option>
        ))}
      </select>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
