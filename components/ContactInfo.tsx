import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center p-4 backdrop-blur-xl lg:items-center lg:mt-20 lg:border border-gray-500 rounded-r-none pt-20 lg:py-40 rounded-xl lg:w-1/3">
      <span className="p-4 inline-block w-full">
        <h1 className="text-3xl text-center font-star text-gray-800 dark:text-white font-bold">
          Contact
        </h1>
      </span>
      <div className="flex flex-col justify-center">
        <p className="text-lg lg:flex items-center flex-wrap gap-4">
          <span className="flex items-center  gap-2">
            <MdAttachEmail />
            <span className="text-primary">
                Email:
            </span>
          </span>
          <Link href="mailto:contact@muaathrifath.tech" target="_blank" type="email" className="flex items-center gap-2 flex-nowrap inline-block">
             contact@muaathrifath.tech
          <FaExternalLinkAlt className="w-3 h-3 inline-block"/>
          </Link>
        </p>
        <p className="text-lg lg:flex items-center flex-wrap gap-4">
          <span className="flex items-center inline-block gap-2">
            <FaPhoneAlt />
            <span className="text-primary">
                Phone:
            </span>
          </span>
          <Link href="tel:+918883735079" target="_blank" type="tel" className="flex items-center gap-2 flex-nowrap inline-block">
          +91 88837 35079
          <FaExternalLinkAlt className="w-3 h-3 inline-block"/>
          </Link>
        </p>
        <p className="text-lg lg:flex items-center flex-wrap gap-4">
          <span className="flex items-center inline-block gap-2">
            <FaAddressCard />
            <span className="text-primary">
                Address:
            </span>
          </span>
              <Link href="" target="_blank" className="flex items-center gap-2 flex-nowrap inline-block">
          Avadi, Chennai, 600-055.
          <FaExternalLinkAlt className="w-3 h-3 inline-block"/>
              </Link>
        </p>
      </div>
    </div>
  );
}
