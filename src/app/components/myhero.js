// //make a hero  div using react-type animation library
// 'use client'

// import Image from "next/image"

// import bgImage from "../../../public/images/HeroVector.png"
// import heroImage from "../../../public/images/hero-image.png"
// import { Fade, Slide } from "react-awesome-reveal"

// import { TypeAnimation } from "react-type-animation"





// const HeroSection = () => {
//     return (

//         < div className=" bg-white w-full lg:h-screen  h-[830px] relative overflow-x-hidden flex justify-end">

//             {/* <Image className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]" src={bgImage} alt="Hero Background Vector" fill='true' /> */}


//             <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 ">

//                 {/* title texts */}

//                 <div className=" bg-rd-400 flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">

//                     < div className="  text-black lg:text-7xl md:text-5xl  text-3xl font-extrabold md:-mt-20">
//                         Your Go-To UX Studio for 



//                     {/* < div  className="lg:text-3xl md:text-xl  text-lg text-pretty font-light"> */}
//                         <TypeAnimation
//                             sequence={[
//                                 // Same substring at the start will only be typed out once, initially
//                                 // '',
//                                 // 1000, // wait 1s before replacing "Mice" with "Hamsters"
//                                 'Product Revamp',
//                                 1000,
//                                 'AI Research',
//                                 1000,
//                                 'Idea Validation',
//                                 1000
//                             ]}
//                             wrapper="span"
//                             speed={50}
//                             style={{ display: 'inline-block' }}
//                             repeat={Infinity}
//                         />
//                     </ div>

//                     <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
//                         <button className=" bg-primary hover:bg-orange-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-3">
//                             <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM7.7609 4.34237C7.24855 3.61773 6.32812 3.57449 5.80528 4.12493L4.23568 5.77743C3.90429 6.12632 3.73042 6.52621 3.75185 6.92552C3.83289 8.43533 4.48307 11.8776 8.35919 15.9584C12.4234 20.2373 16.1676 20.3581 17.6026 20.2165C17.8864 20.1885 18.1783 20.031 18.4574 19.7373L19.8779 18.2417C20.4907 17.5965 20.3301 16.4342 19.5092 15.9618L17.5987 14.8621C17.086 14.567 16.4854 14.6582 16.1 15.064L15.6445 15.5435L15.1174 15.0428C15.6445 15.5435 15.6438 15.5442 15.6432 15.545L15.6417 15.5464L15.6388 15.5495L15.6324 15.556L15.6181 15.5701C15.6078 15.5801 15.5959 15.591 15.5825 15.6028C15.5556 15.6264 15.5223 15.6533 15.4824 15.6816C15.4022 15.7384 15.2955 15.8009 15.1606 15.8541C14.8846 15.963 14.5201 16.0214 14.0699 15.9483C13.1923 15.8058 12.0422 15.1755 10.5194 13.5722C8.99202 11.9642 8.40746 10.7645 8.27675 9.87234C8.21022 9.41827 8.26346 9.05468 8.36116 8.78011C8.40921 8.64508 8.46594 8.53742 8.51826 8.45566C8.54435 8.41489 8.56922 8.38075 8.5912 8.35298C8.60219 8.33909 8.61246 8.32678 8.62182 8.31603L8.63514 8.30104L8.64125 8.29441L8.64415 8.2913L8.64556 8.2898C8.64625 8.28907 8.64694 8.28835 9.17861 8.79333L8.64695 8.28834L8.93376 7.98637C9.3793 7.51731 9.44403 6.72292 9.02189 6.12586L7.7609 4.34237Z" fill="#1C274C" />
//                                 <path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" fill="#1C274C" />
//                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4861 5.32931C13.5999 4.93103 14.015 4.70041 14.4133 4.81421L14.2072 5.53535C14.4133 4.81421 14.4136 4.81431 14.414 4.81441L14.4147 4.81462L14.4162 4.81506L14.4196 4.81604L14.4273 4.81835L14.4471 4.82451C14.4622 4.82934 14.481 4.83562 14.5035 4.84358C14.5484 4.85952 14.6077 4.88218 14.6805 4.91339C14.8262 4.97582 15.0253 5.07224 15.2698 5.21695C15.7593 5.50664 16.4275 5.98781 17.2124 6.77279C17.9974 7.55776 18.4786 8.22595 18.7683 8.71541C18.913 8.95992 19.0094 9.15899 19.0718 9.30467C19.103 9.37748 19.1257 9.43683 19.1416 9.48175C19.1496 9.5042 19.1559 9.52303 19.1607 9.5381L19.1669 9.55789L19.1692 9.56564L19.1702 9.56898L19.1706 9.57051L19.1708 9.57124C19.1709 9.5716 19.171 9.57195 18.4499 9.77799L19.171 9.57195C19.2848 9.97023 19.0542 10.3853 18.6559 10.4991C18.261 10.612 17.8496 10.3862 17.7317 9.99414L17.728 9.98336C17.7227 9.96833 17.7116 9.93875 17.6931 9.89555C17.6561 9.80921 17.589 9.66798 17.4774 9.47939C17.2544 9.10265 16.8517 8.5334 16.1518 7.83345C15.4518 7.13349 14.8826 6.73079 14.5058 6.50782C14.3172 6.3962 14.176 6.32911 14.0897 6.2921C14.0465 6.27359 14.0169 6.26256 14.0019 6.25722L13.9911 6.25353C13.599 6.13565 13.3733 5.7242 13.4861 5.32931Z" fill="#1C274C" />
//                             </svg>  <span>Book a Call</span>
//                         </button>


//                         <button className=" bg-background-light border border-orange-600  hover:bg-orange-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-3">

//                             <svg
//                                 fill="#000000"
//                                 viewBox="0 0 24 24"
//                                 id="research"
//                                 data-name="Flat Line"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="icon flat-line mx-1 -ml-1"
//                                 width={30}
//                                 height={25}
//                             >
//                                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                                 <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                                 <g id="SVGRepo_iconCarrier">
//                                     <circle id="secondary" cx="8" cy="10" r="3" style={{ fill: '#2ca9bc', strokeWidth: 2 }}></circle>
//                                     <path
//                                         id="primary"
//                                         d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
//                                         style={{
//                                             fill: 'none',
//                                             stroke: '#000000',
//                                             strokeLinecap: 'round',
//                                             strokeLinejoin: 'round',
//                                             strokeWidth: 2,
//                                         }}
//                                     ></path>
//                                     <path
//                                         id="primary-2"
//                                         data-name="primary"
//                                         d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
//                                         style={{
//                                             fill: 'none',
//                                             stroke: '#000000',
//                                             strokeLinecap: 'round',
//                                             strokeLinejoin: 'round',
//                                             strokeWidth: 2,
//                                         }}
//                                     ></path>
//                                 </g>
//                             </svg>
//                             <span>See case studies</span>
//                         </button>


//                     </div>
//                 </div>

//                 {/* hero image  */}
//                 <div className="flex flex-col items-center justify-end md:order-2 order-1 -mt-[500px] md:-mr-36">
//                     {/* <Slide direction="right"> */}
//                         <Image src={heroImage} priority="true" alt="Hero Image" className=" md:pb-36" />
//                     {/* </Slide> */}

//                 </div>

//             </main>
//         </ div>



//     )
// };
// export default HeroSection



'use client'

import Image from "next/image"

import bgImage from "../../../public/images/HeroVector.png"
import heroImage from "../../../public/images/hero-image.png"
import { Fade, Slide } from "react-awesome-reveal"

import { TypeAnimation } from "react-type-animation"
import Calendlylink from "../buttons/callbutton"


export default function HeroSection() {

    const Mysvg = () => {
        return (
            <svg
                fill="#000000"
                viewBox="0 0 24 24"
                id="research"
                data-name="Flat Line"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-line mx-1 -ml-1"
                width={30}
                height={25}>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle id="secondary" cx="8" cy="10" r="3" style={{ fill: '#2ca9bc', strokeWidth: 2 }}></circle>
                    <path
                        id="primary"
                        d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
                        style={{
                            fill: 'none',
                            stroke: '#000000',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                        }}
                    ></path><path
                        id="primary-2"
                        data-name="primary"
                        d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
                        style={{
                            fill: 'none',
                            stroke: '#000000',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                        }}
                    ></path>
                </g>
            </svg>
        )
    }
    return (
        <div>

            <div className="container max-w-screen-xl mx-auto px-4 bg-white">



                <div className="flex flex-col md:flex-row justify-between space-x-2 md:">
                    <div className="text-center md:text-left mt-32 md:w-[55%]">
                        <div className="font-medium text-white-900 text-sm md:text-md leading-normal md:mb-2 "> Start automating your tasks now</div>
                        <div className="font-extrabold text-white-900 text-2xl md:text-5xl leading-normal mb-3 mygrad ">Your Go-To <br/>AI Consultancy
                            <div className="md:pt-1 lg:pt-5"> for {' '}

                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        // '',
                                        // 1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        "AI MVP Design",  
                                        1000,
                                        ' AI Research',
                                        1000,
                                        ' Idea Validation',
                                        1000,
                                        "Custom AI Solutions",
                                        1000,
                                        "AI Product Development",
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block', color: '#2d63d7' }}
                                    repeat={Infinity}
                                />
                            </div>
                        </div>
                            <div className="text-cente">
                        <div className=" text-mg md:text-lg leading-normal mb-4 bg-warning p-1 px-3 rounded-2xl w-fit">AI Adoptions typically result in:</div>
                        <div className="pb-10">

                            <ul class="max-w-md space-y-3 text-gray-500 list-inside ">
                                <li class="flex items-center">
                                    <svg class="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    35% efficiency gains in business processes.
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    150% ROI for every dollar invested.
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Decision-making speeds improved by 300%.
                                </li>
                            </ul>

                        </div>
                        </div>

                        <div className="w-full flex flex-col gap-4 md:flex-row md:justify-start justify-between items-center lg:gap-6 md:gap-6 ">
                      <Calendlylink/>


                        <button className="  border border-primary  hover:bg-blue-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-3">
                            <Mysvg />

                            <span>See case studies</span>
                        </button>
                        </div>
                    </div>

                    <div className="mt-32 md:w-[45%]">
                        <Image src={heroImage} priority="true" alt="Hero Image" className=" md:pb-36 md:h-full md:w-full l:h-[800px] l:w-[900px] h-[200px] w-[300px] md:-mr-2" />
                    </div>
                </div>

            </div>

        </div>
    )
}









