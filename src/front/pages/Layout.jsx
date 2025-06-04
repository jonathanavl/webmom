import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Products } from "../components/Products"
import { HeaderSorteo } from "../components/HeaderSorteo"
import '../styles/home.css';
// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <HeaderSorteo/>
            <Products/>
            <Footer />
        </ScrollToTop>
    )
}