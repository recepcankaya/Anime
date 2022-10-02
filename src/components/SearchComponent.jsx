import { useEffect, useState } from "react"
import { ReactComponent as XMark } from "../icons/xmark.svg"
import { ReactComponent as ArrowRight } from "../icons/arrow-right-circle.svg"
import { useNavigate } from "react-router-dom"

import Modal from "react-modal"
import axios from "axios"
import debounce from "lodash.debounce"

import "./SearchComponent.scss"

function SearchComponent({ onClose, isOpen }) {
  const [fetchData, setFetchData] = useState([])
  const [text, setText] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await axios(`${process.env.REACT_APP_API_KEY}`, {
        params: {
          limit: 5,
          letter: text,
        },
      })
      // console.log(response.data.data)
      setFetchData(response.data.data)
    }
    if (text === "") return
    fetchAnime()
  }, [text])

  // console.log(fetchData)

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const debouncedInput = debounce(handleInput, 400)

  return (
    <Modal isOpen={isOpen} className="modal-background" ariaHideApp={false}>
      <div className="modal-container">
        <button
          onClick={onClose}
          style={{
            border: "none",
            backgroundColor: "unset",
          }}>
          <XMark width="1.50rem" height="1.75rem" style={{ fill: "white" }} />
        </button>
        <input
          type="text"
          className="modal-input"
          placeholder="You can search for `Kyoukai no Kanata` for example"
          onChange={debouncedInput}
        />
        <div className="search-input-container" onClick={onClose}>
          {fetchData.map((el) => (
            <div
              className="search-input"
              key={el.mal_id}
              onClick={() => navigate(`/anime-details/${el.mal_id}`)}>
              <div className="search-anime-details">
                <img
                  src={el.images.jpg.small_image_url}
                  alt=""
                  style={{ aspectRatio: "0.80", borderRadius: "10px" }}
                />
                <div className="input-anime-details">
                  <p className="anime-title">{el.title}</p>
                  <p className="parag">
                    {el.type}{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}>
                      *
                    </span>{" "}
                    {el.episodes} {el.episodes === 1 ? "Episode" : "Episodes"}
                  </p>
                </div>
                <ArrowRight className="arrow-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default SearchComponent
