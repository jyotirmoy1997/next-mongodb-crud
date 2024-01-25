import classes from "./navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    return(
        <nav className={classes.navbar_wrapper}>
            <h3>CRUD</h3>
            <button>
                <Link href="/addtopic">Add Topic</Link>
            </button>
        </nav>
    )
}

export default Navbar