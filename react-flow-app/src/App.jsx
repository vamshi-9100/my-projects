import AboutUs from "./AboutUs";
import Apples from "./Apples";
import BlogComponent from "./BlogComponent";
import BrightText from "./BrightText";
import ContactUs from "./ContactUs";
import Courcegoal from "./Courcegoal";
import CricketScore from "./CricketScore";
import Discount from "./Discount";
import Greeting from "./Greeting";
import IncrementDecre from "./IncrementDecre";
import MovieGrid from "./MovieGrid";

function App()
{
  return(
    <>
    <h1>React applicaton flow</h1>
    <AboutUs/>
    <ContactUs/>
    <Greeting/>
    <IncrementDecre/>
    <CricketScore/>
    <Apples/>
    <Discount/>
    <Courcegoal title='LearnReact ' description='in depth'/>
    <Courcegoal title='About rathan sir ' description='he is goood at subject'/>

    <BlogComponent/>
    <MovieGrid/>


    <BrightText color1='red'color2='green'color3='blue'/>
    </>
  )
}
export default App;
