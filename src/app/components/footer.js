import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <>
    <footer class="relative bg-blueGray-200 pt-8 pb-6  border-t-2">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4 ">
        <div className="flex items-center">
        <Image src="/images/pgagi.png" alt="Company logo" className="h-12 -ml-2 object-contain" width={50} height={50}/>
        <h4 class="text-3xl font-extrabold text-gray-700">PG-AGI</h4>
        </div>
        <h5 class="text-md mt-6 mb-5 text-gray-600">
          Find us on any of these platforms
        </h5>
        <div className="mb-6 flex items-center ">
         
          <a
            href="https://twitter.com/PGAGI123"
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-whitesm:mr-4 lg:mr-3 xl:mr-4"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" enable-background="new 0 0 72 72" viewBox="0 0 72 72" id="twitter-x"><switch><g><path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"></path></g></switch></svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCKySzInhClSvewLucjmQmhQ"
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white  sm:mr-4 lg:mr-3 xl:mr-4"
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              className="fill-current"
            >
              <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/pg-agi/"
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white  sm:mr-4 lg:mr-3 xl:mr-4"
          >
            <svg  
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="fill-current"
            >
              <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/PGAGI123"
            className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-whitesm:mr-4 lg:mr-3 xl:mr-4"
          >
              
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  enable-background="new 0 0 72 72" viewBox="0 0 72 72" id="instagram"><switch><g><path d="M20,10c-5.5,0-10,4.5-10,10v32c0,5.5,4.5,10,10,10h32c5.5,0,10-4.5,10-10V20c0-5.5-4.5-10-10-10H20z M36,52
			c-2.2,0-4.3-0.4-6.2-1.3c-1.9-0.8-3.6-2-5.1-3.4c-1.5-1.5-2.6-3.2-3.4-5.1c-0.8-2-1.3-4.1-1.3-6.2c0-2.2,0.4-4.3,1.3-6.2
			c0.8-1.9,2-3.6,3.4-5.1c1.5-1.5,3.2-2.6,5.1-3.4c2-0.8,4.1-1.3,6.2-1.3c2.2,0,4.3,0.4,6.2,1.3c1.9,0.8,3.6,2,5.1,3.4
			c1.5,1.5,2.6,3.2,3.4,5.1c0.8,2,1.3,4.1,1.3,6.2c0,2.2-0.4,4.3-1.3,6.2c-0.8,1.9-2,3.6-3.4,5.1c-1.5,1.5-3.2,2.6-5.1,3.4
			C40.3,51.6,38.2,52,36,52z M36,26c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C46,30.5,41.5,26,36,26z M54,21
			c-1.7,0-3-1.3-3-3s1.3-3,3-3h0c1.7,0,3,1.3,3,3S55.7,21,54,21z M52,68H20c-8.8,0-16-7.2-16-16V20c0-8.8,7.2-16,16-16h32
			c8.8,0,16,7.2,16,16v32C68,60.8,60.8,68,52,68z"></path></g></switch></svg>
          </a>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >About Us</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Blog</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/PG-AGI">Github</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Free Products</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >MIT License</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Privacy Policy</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span>
          <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"> PG-AGI</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    
      
    </>
  );
};

export default Footer;

{/* 



</div> */}


const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-bold text-dark underline underline-offset-8 ">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary hover:underline hover:underline-offset-4 "
      >
        {label}
      </a>
    </li>
  );
};
