import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-[40px] sm:gap-0 mb-[16px] sm:mb-0">
          <Link
            href="/"
            className="relative bottom-[-2px] md:static md:bottom-0 text-[18px] font-bold flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54px"
              height="20px"
              viewBox="0 0 94 40"
              fill="none"
              className="w-[54px] h-[20px]"
            >
              <path
                d="M17.3847 18.4616L28.7694 11.8462C31.3848 10.3077 32.3078 6.92309 30.7694 4.15386C29.2309 1.53848 25.8463 0.615394 23.0771 2.15385L3.38477 13.5385L17.3847 18.4616Z"
                fill="#EA4335"
              />
              <path
                d="M25.8463 35.2308C27.8463 35.2308 29.6925 34.1539 30.6155 32.4615C32.154 29.8462 31.2309 26.3077 28.6155 24.7692L8.92321 13.3846C6.30783 11.8462 2.76937 12.7692 1.23091 15.3846C-0.307556 18 0.615549 21.5385 3.23093 23.0769L22.9232 34.4615C24.0001 35.0769 24.9232 35.2308 25.8463 35.2308Z"
                fill="#4285F4"
              />
              <path
                d="M45.3844 35.2308C46.3075 35.2308 47.2306 34.9231 48.1536 34.4615L67.846 23.0769L54.1537 18L42.6152 24.6154C39.9998 26.1539 39.0767 29.5385 40.6152 32.3077C41.6921 34.3077 43.5383 35.2308 45.3844 35.2308Z"
                fill="#FBBC04"
              />
              <path
                d="M65.0768 24C67.0768 24 68.9229 22.9231 69.846 21.2308C71.3845 18.6154 70.4614 15.0769 67.846 13.5385L48.1537 2.15386C45.5383 0.615393 41.9998 1.53848 40.4614 4.15386C38.9229 6.76924 39.846 10.3077 42.4614 11.8462L62.1537 23.2308C63.0768 23.6923 64.1537 24 65.0768 24Z"
                fill="#0F9D58"
              />
            </svg>
            <span>Google Cloud Lahore</span>
          </Link>
          <Link
            href="https://events.linuxfoundation.org/about/code-of-conduct/"
            target="_blank"
            className="text-[16px] text-black"
          >
            Code of Conduct
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
