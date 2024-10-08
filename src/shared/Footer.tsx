import { NavLink } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkBlue">
      {/* <!-- Footer Flex Container --> */}
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-16 md:flex-row md:space-y-0">
        {/* <!-- Logo/Menu Container --> */}
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
          {/* <img
            src="./images/logo-bookmark-footer.svg"
            alt=""
            className="mb-1"
          /> */}
          <NavLink
            to={"/"}
            className="font-bold text-3xl mb-1 uppercase text-gray-500"
          >
            Green<span className="text-lime-500">LN</span>
          </NavLink>

          <NavLink to={"/products"} className="uppercase hover:text-softBlue">
            Products
          </NavLink>
          <NavLink
            to={"/product-and-category"}
            className="uppercase hover:text-softBlue"
          >
            Product_And_Category_Management
          </NavLink>
          <NavLink
            to={"/photo-gallery"}
            className="uppercase hover:text-softBlue"
          >
            Photo Gallery
          </NavLink>
        </div>

        {/* <!-- Social Container --> */}
        <div className="flex space-x-10">
          {/* <img src={facebookIcon} alt="" className="h-6 hover:bg-lime-500 " /> */}
          <FacebookOutlined
            className="text-2xl text-white hover:text-lime-500 cursor-pointer transition duration-500"
            style={{}}
          />
          <TwitterOutlined className="text-2xl text-white hover:text-lime-500 cursor-pointer transition duration-500" />
          <InstagramOutlined className="text-2xl text-white hover:text-lime-500 cursor-pointer transition duration-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
