import { Helmet } from "react-helmet-async";
import CoverImg from "../../CoverImg/CoverImg";
import menuImg from '../../../assets/menu/banner3.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import MenuCategory from "../../Home/MenuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";



const Menu = () => {
  const [menu] = useMenu();
   const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  
  return (
    <div>
      <Helmet>
        <title>Restaurant | Menu</title>
        
      </Helmet>
      <CoverImg img={menuImg} title="our menu">
      </CoverImg>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      
    </div>
  );
};

export default Menu;