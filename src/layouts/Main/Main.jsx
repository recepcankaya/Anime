import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { items, fetchData } from "../../redux/slices/animeSlice"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { Link, Route, Routes } from "react-router-dom"
import AnimeDetails from "../../pages/AnimeDetails"

function Main() {
  const dispatch = useDispatch()
  const animes = useSelector(items)
  // console.log(animes)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <Container>
      <Row>
        {animes.map((data) => (
          <Col key={data.mal_id} sm={4}>
            <Link to={`/anime-details/${data.mal_id}`}>
              <Image
                src={data.images.jpg.large_image_url}
                alt={`This is ${data.title}`}
                style={{
                  height: "350px",
                  width: "250px",
                  border: "4px solid #196792",
                }}
                className="mt-4"
                rounded
              />
            </Link>
            <p
              style={{ fontWeight: "bold", fontSize: "1.15rem" }}
              className="mt-2">
              {data.title}
            </p>
          </Col>
        ))}
      </Row>
      <Routes>
        <Route path="/anime-details/:mal_id" exact element={<AnimeDetails />} />
      </Routes>
    </Container>
  )
}

export default Main
