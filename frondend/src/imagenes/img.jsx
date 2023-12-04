import { Link } from "react-router-dom"
import nier from "./Nier-Automata-Background.jpg"
import personaliza from "./PERSONALIZA_1.avif"

export function Nier() {
  return  <Link to="/pages-form">
            <button>
              <img src={nier} alt="NIER" />
            </button>
          </Link>
}
export function Personaliza() {
  return <>
  <img src={personaliza} alt="Personaliza" />
  </>
}