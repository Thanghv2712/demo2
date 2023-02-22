import Header from "./header";
import AboutPage from "../pages/about";
import WorkPage from "../pages/works";
import ContactPage from "../pages/contact";
import footer from "./footer";
const MainHome = () => {
    return    `
    <!-- header -->
    ${Header()}
  <!-- about -->
    ${AboutPage()}
  <!-- works -->
  

  ${WorkPage()}

  <!-- contact -->
    ${ContactPage()}
  <!-- footer -->
  ${footer()}
    `
  }
  
  export default MainHome;