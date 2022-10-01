import "./Header.scss"
import SearchComponent from "../../components/SearchComponent"
import { ReactComponent as SearchIcon } from "../../icons/searchicon.svg"

import { useState } from "react"

function Header() {
  let date = new Date()
  const [isOpen, setIsOpen] = useState(false)

  const takeMonth = (month) => {
    const monthDate = new Date()
    monthDate.setMonth(month)
    return monthDate.toLocaleString("en-US", { month: "long" })
  }
  // console.log(takeMonth(date.getMonth()))

  return (
    <header className="container">
      <div className="items">
        <h1>Anime</h1>
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          onClick={() => setIsOpen(true)}
        />
        <SearchComponent isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <p>
          Today is {date.getDate()}th of {takeMonth(date.getMonth())}
        </p>
      </div>
      <hr />
    </header>
  )
}

export default Header
