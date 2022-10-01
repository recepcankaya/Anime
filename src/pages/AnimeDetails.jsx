import React from "react"
import axios from "axios"
import Image from "react-bootstrap/Image"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Arrow } from "../icons/circle-arrow-left-solid.svg"

import "./AnimeDetails.scss"

function AnimeDetails() {
  let { mal_id } = useParams()
  const [details, setDetails] = useState("")

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/${mal_id}`)
      .then((res) => setDetails(res.data.data))
      .catch((err) => console.error(err))
  }, [mal_id])

  // console.log(details)

  return (
    <div className="anime-details-container">
      <div className="link-container">
        <Link className="main-link" to="/">
          <Arrow className="arrow" />
          Go Back to Main
        </Link>
      </div>
      <div className="secondary-container">
        <div>
          <Image
            src={details.images?.jpg.image_url}
            style={{
              height: "330px",
              width: "225px",
              border: "1px solid black",
            }}
            rounded
          />
        </div>
        <div className="details-container">
          <h2 className="title">{details.title}</h2>
          <div className="secondary-details-container">
            <div className="details">
              <p className="feature">Type</p>
              <span className="line" style={{ width: "78%" }}></span>
              <p className="value" style={{ textTransform: "capitalize" }}>
                {details.type}
              </p>
            </div>
            <div className="details">
              <p className="feature">Source</p>
              <span className="line" style={{ width: "250px" }}></span>
              <p className="value" style={{ textTransform: "capitalize" }}>
                {details.source}
              </p>
            </div>
            <div className="details">
              <p className="feature">Episodes</p>
              <span className="line" style={{ width: "270px" }}></span>
              <p className="value">{details.episodes}</p>
            </div>
            <div className="details">
              <p className="feature">Status</p>
              <span className="line" style={{ width: "200px" }}></span>
              <p className="value">{details.status}</p>
            </div>
            <div className=" bottom-details">
              <div>
                <h4 className="bottom-features">{details.score}</h4>
                <h4 className="bottom-title">Score</h4>
              </div>
              <div>
                <h4 className="bottom-features">{details.rank}</h4>
                <h4 className="bottom-title">Rank</h4>
              </div>
              <div>
                <h4 className="bottom-features">{details.popularity}</h4>
                <h4 className="bottom-title">Popularity</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <h5 className="description-title">Description</h5>
        <p className="background">
          {details.synopsis ? details.synopsis : "No description provided"}
        </p>
      </div>
      <br />
    </div>
  )
}

export default AnimeDetails
