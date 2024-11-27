import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";

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
          <span className="flex items-center inline-block gap-2">
            <MdAttachEmail />
            <span className="text-primary">
              <Link href="mailto:muaathrifath@gmail.com" target="_blank" type="email">
                Email
              </Link>:
            </span>
          </span>
          muaathrifath@gmail.com
        </p>
        <p className="text-lg lg:flex items-center flex-wrap gap-4">
          <span className="flex items-center inline-block gap-2">
            <FaPhoneAlt />
            <span className="text-primary">
              <Link href="tel:+918883735079" target="_blank" type="tel">
                Phone
              </Link>:
            </span>
          </span>
          +91 88837 35079
        </p>
        <p className="text-lg lg:flex items-center flex-wrap gap-4">
          <span className="flex items-center inline-block gap-2">
            <FaAddressCard />
            <span className="text-primary">
              <Link href="" target="_blank">
                Address
              </Link>:
            </span>
          </span>
          Avadi, Chennai, 600-055.
        </p>
      </div>
    </div>
  );
}
