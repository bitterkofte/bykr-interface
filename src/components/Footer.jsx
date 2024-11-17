import global from "../assets/links/global.svg";
import appstore from "../assets/links/appstore.svg";
import googleplay from "../assets/links/googleplay.svg";
import youtube from "../assets/links/youtube.svg";
import facebook from "../assets/links/facebook.svg";
import twitter from "../assets/links/twitter.svg";
import instagram from "../assets/links/instagram.svg";
import linkedin from "../assets/links/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-[#0F172A] text-white px-4 md:px-20">
      <div className="py-12 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12">
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Product</h4>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Pricing
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Overview
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Browse
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Accessibility
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Five
          </li>
        </ul>
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Solutions</h4>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Brainstorming
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Ideation
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Wireframing
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Research
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Design
          </li>
        </ul>
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Support</h4>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Contact Us
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Developers
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Documentations
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Integrations
          </li>
          <li className="py-3 text-gray-200 hover:text-white cursor-pointer">
            Reports
          </li>
        </ul>
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Get the App</h4>
          <li className="pb-4 flex items-center justify-center md:justify-start text-gray-200">
            <img src={appstore} alt="" />
          </li>
          <li className="flex items-center justify-center md:justify-start text-gray-200">
            <img src={googleplay} alt="" />
          </li>
          <div className="pt-14">
            <p className="pb-5">Follow Us</p>
            <div className="flex justify-center md:justify-start gap-4">
              <img src={youtube} alt="youtube" className="cursor-pointer" />
              <img src={facebook} alt="facebook" className="cursor-pointer" />
              <img src={twitter} alt="twitter" className="cursor-pointer" />
              <img src={instagram} alt="instagram" className="cursor-pointer" />
              <img src={linkedin} alt="linkedin" className="cursor-pointer" />
            </div>
          </div>
        </ul>
      </div>
      <div className="h-[1px] bg-gray-700" />
      <div className="text-gray-200 py-[37px] flex flex-col md:flex-row items-center md:items-start justify-between gap-5 md:gap-0">
        <p className="">Collers @ 2023. All rights reserved.</p>
        <div className="flex gap-8">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p className="flex gap-3">
            <img src={global} alt="" />
            <span>EN</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
