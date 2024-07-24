import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-black text-slate-500 p-6 grid grid-cols-1 mx-auto justify-center lg:grid-cols-4 gap-3 ">
        <div className="">
          <div className="asdfs "></div>
          <div className="mt-[-28px]  absolute">
            <Link href="#">
              <button
                className="px-4 py-3 btn_btm "
                style={{
                  fontSize: "19px",
                  border: "none",
                  backgroundColor: "#93B3CE",
                  color: "#fff"
                }}
              >
                Get in Touch
              </button>
            </Link>
          </div>
          <div className="w-full  md:w-full lg:w-80 mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117280.64430723892!2d77.38278960329419!3d23.278718088838186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f4857e02ad%3A0x4283e701f28bb1eb!2sDeep%20Convent%20School!5e0!3m2!1sen!2sin!4v1707831181960!5m2!1sen!2sin"
              style={{ width: "100%", height: "260px" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className=" flex flex-col text-left text-[14px]">
          <h3 className="text-white uppercase font-bold">School Timing</h3>

          <h5>SCHOOL HOURS</h5>
          <h>09.00 a.m. to 02.30 p.m. for Classes Nursery to V</h>
          <h>09.00 a.m. to 02.30 p.m. for Classes VI to XII</h>
          <h5>OFFICE HOURS</h5>
          <p>09.00 a.m. to 02.30 p.m.</p>
        </div>
        <div className="text-[13px]">
          <h3 className="text-white uppercase">Contact Us</h3>

          <p className="items-center flex flex-row gap-2 hover:text-white">
            {" "}
            <IoLocationOutline className="text-2xl" />
            WE ARE SITUATED AT :
          </p>

          <p className="hover:text-white">
            Ayodhya Bypass, Ayodhya Nagar, Bhopal, Madhya Pradesh 462041
          </p>
          <p className="hover:text-white">
            Contact: 9826954459 | Deepshikshasamiti@gmail.com
          </p>
          <p className="flex items-center gap-2 flex-row hover:text-white">
            <IoCall className="text-2xl" />
            GENERAL INQUIRIESS :<span className=""> 9826954459</span>
          </p>

          <p className="flex items-center flex-row gap-2 hover:text-white text-md">
            <CgMail className="text-2xl" />
            EMAIL :<span className=""> deepshikshasamiti@gmail.com</span>
          </p>
        </div>
        <div className=" flex flex-col text-[11px]">
          <h3 className="uppercase text-white">Social Profiles</h3>
          <span className=" flex flex-row gap-3">
            <Link href="/">
              <FaFacebook className="text-5xl text-white hover:bg-blue-800 hover:text-black p-1 rounded-xl" />
            </Link>

            <Link href="/">
              <FaInstagram className="text-5xl text-white hover:bg-pink-900 hover:text-black p-1 rounded-xl" />
            </Link>

            <Link href="#">
              <FaYoutube className="text-5xl text-white hover:bg-red-800 hover:text-black p-1 rounded-xl" />
            </Link>
          </span>
        </div>
      </div>
      <div class=" bg-slate-900 flex flex-col md:flex-row text-sm justify-between px-7 py-6 lg:px-28 text-slate-600">
       
          <p className="flex flex-row gap-2 ">
            © Copyright
            <Link href="#" className="no-underline text-white">
              Deep Convent School
            </Link>
            All Rights Reserved.
          </p>
        
          <p class="flex flex-row items-center gap-1">
            Created with ❤️{" "}
            <Link href="#" className="no-underline text-white">
              Maitretech Solution
            </Link>
          </p>
        </div>
    </>
  );
};
export default Footer;
