"use client"
import React, { useState } from 'react';

const Design = () => {
  const initialContent = {
    paragraph: (
      <>
        These problems, being so common, call for decisive and drastic solutions. The solutions, below, however, only scratch the surface of the deep underlying problems.
      </>
    ),
    listItems: ['Low activation and adoption', 'Low Retention', 'Less churn']
  };

  const [content, setContent] = useState(initialContent);
  const [thirdSVGContent, setThirdSVGContent] = useState({});
  const [isTextBlue, setIsTextBlue] = useState(false); 

  const handleButtonClick = (svgNumber) => {
    setIsTextBlue(true); // Set text color to blue when button is clicked

    if (svgNumber === 1) {
      setContent({
        paragraph: (
          <>
            For most tech ventures, product performance is synonymous with business performance. However, despite the vitality of the product&apos;s success, the problems below couldn&apos;t be any more common.
          </>
        ),
        listItems: ['Low activation and adoption', 'Low Retention', 'Less churn']
      });
    } else if (svgNumber === 2) {
      setContent({
        paragraph: (
          <>
            These problems, being so common, call for decisive and drastic solutions. The solutions, below, however, only scratch the surface of the deep underlying problems.
          </>
        ),
        listItems: ['Hire more people', 'Launch new features', 'Increase the Marketing & Sales Budget', 'Retarget customers']
      });
      setThirdSVGContent({}); // Reset third SVG content
    } else if (svgNumber === 3) {
      setThirdSVGContent({
        paragraph: (
          <>
            Before reallocating resources to marketing or sales, ensure your product&apos;s core is AI-enhanced for smarter performance. Our AI solutions elevate your product by
          </>
        ),
        listItems: [
          'Predictive Analytics Enhancement',
          'Personalized Experience Algorithms',
          'Data-Informed Design Insights',
          'Advanced Interaction Intelligence',
          'Insight-Driven Feature Development',
        ]
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" >
      <div className="flex flex-col items-center" style={{width:'70%'}}>
        <h1 className="text-5xl text-center mb-4 font-extrabold">Have you ever been <br /> down this road?</h1>
        <p className="text-lg mb-12">Our AI Agency can help</p>
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-8">
            {/* First SVG */}
            <div className="flex items-center">
    <p className="text-2xl mb-4 mr-9 font-bold">Product Challenges</p> {/* Adjusted mr-4 */}
    <div button onClick={() => handleButtonClick(1)} className="flex items-center">
        <div className="border-l-4 border-gray-300  h-full mr-4"></div>
        <span className="flex items-center justify-center  ml-9  w-12 h-12 bg-blue-100 rounded-full lg:h-16 lg:w-16 dark:bg-blue-800 shrink-0">
            <svg className="w-6 h-6  text-blue-600 lg:w-8 lg:h-8 dark:text-blue-300 border-r border-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
            </svg>
        </span>
    </div>
</div>

            {/* SVG line */}
            <svg height="100" style={{ marginLeft: "340px" }}>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#ccc" strokeWidth="1" />
            </svg>
            {/* Second SVG (Button) */}
            <div className="flex items-center mt-4">
              <p className="text-2xl mb-4 mr-4 font-bold">What other companies do</p>
              <button onClick={() => handleButtonClick(2)} className="focus:outline-none">
                <div className="flex items-center">
                  <div className="border-l-4 border-gray-300 h-full mr-4"></div>
                  <span className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full lg:h-16 lg:w-16 dark:bg-gray-700 shrink-0">
                    <svg className="w-8 h-8 text-gray-500 lg:w-10 lg:h-10 dark:text-gray-100 border-r border-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
            {/* SVG line */}
            <svg height="100" style={{ marginLeft: "340px" }}>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#ccc" strokeWidth="1" />
            </svg>
            {/* Third SVG (Button) */}
            <div className="flex items-center mt-4">
              <p className="text-2xl mb-4 mr-40  font-bold hover-text-[#007bff]">What we do</p>
              <button onClick={() => handleButtonClick(3)} className="focus:outline-none ml-2 ">
                <div className="flex items-center">
                  <div className="border-l-4 border-gray-300 h-full mr-4"></div>
                  <span className="flex items-center justify-center ml-6  w-12 h-12 bg-gray-100 rounded-full lg:h-16 lg:w-16 dark:bg-gray-700 shrink-0">
                    <svg className="w-8 h-8 text-gray-500 lg:w-10 lg:h-10 dark:text-gray-100 border-r border-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                      <path d="M16 1h-3a1.992 1.992 0 0 0-1-1.278V0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 1h4v1H7V1Zm9 17H2V3h3v1a1 1 0 1 0 2 0V3h4v1a1 1 0 1 0 2 0V3h3v15Zm-5-6a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm-5-3a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6Z" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lg mb-4 mr-2">{(thirdSVGContent.paragraph && thirdSVGContent.paragraph !== '') ? thirdSVGContent.paragraph : content.paragraph}</p>
            <ul className="list-disc pl-5 text-lg">
              {(thirdSVGContent.listItems && thirdSVGContent.listItems.length > 0) ? thirdSVGContent.listItems.map((item, index) => (
                <li key={index} className="flex items-center mb-2" style={{ listStyle: 'none' }}>
                  <img src="/images/correct.png" alt="Tick" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                  <p>{item}</p>
                </li>
              )) : content.listItems.map((item, index) => (
                <li key={index} className="flex items-center mb-2" style={{ listStyle: 'none' }}>
                  <img src="/images/cross.png" alt="Tick" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
