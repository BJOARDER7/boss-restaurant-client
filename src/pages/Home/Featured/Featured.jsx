import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white text-justify pt-8 my-16">
      <SectionTitle
      subHeading="Check in out" heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pl-12 pr-8 pb-20 pt-12 bg-state-600 bg-opacity-80">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>Restaurants and other food-service providers are so widespread that half of all adults have worked in food service in one way or another at some point in their lives. The food service industry encompasses any establishment that serves food to people outside their home. This includes restaurants, carryout operations, cafeterias, university dining halls, catering and vending companies, hotels and inns, and rehab and retirement centers.</p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;