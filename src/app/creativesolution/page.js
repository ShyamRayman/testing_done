"use client";
import React from "react";
import { useState, useRef } from "react";
import Navbar from "@/components/ui/navbar";
import "./creative.css";
import { DesignCarousel4 } from "../designanddevelopment/designcarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/custom/customTab";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Footer from "@/components/ui/footer";

const CreativeSolution = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const imagess = [
    {
      logoSrc: "/images/creativecar/Group 713.svg",
      title: "User-Centered Design",
      content:
        "Quick, efficient responses enhance user satisfaction and streamline communication.",
    },
    {
      logoSrc: "/images/creativecar/Group 714.svg",
      title: "Responsive Design",
      content:
        "Enhance your online presence with a modern, user-friendly website.",
    },
    {
      logoSrc: "/images/creativecar/Group 715.svg",
      title: "Consistency",
      content:
        "Boost customer engagement with seamless WhatsApp integration for real-time communication",
    },
  ];

  const [hover, setHover] = useState(false);
  const content = "Travel with Us";

  const [hovered, setHovered] = useState(false);
  const contents = "Make a call";

  const [isHovered, setIsHovered] = useState(false);
  const contentt = "Email Us";

  const itemsPerSlide = 2;

  const groupItems = (items, itemsPerSlide) => {
    const groups = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      groups.push(items.slice(i, i + itemsPerSlide));
    }
    return groups;
  };

  const groupedItems = groupItems(imagess, itemsPerSlide);

  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <>
      <Navbar style={{ height: "10%" }} />
      <div className="w-full overflow-hidden xl:mb-0 lg:mb-10">
        {/* Home section */}
        <div className="relative ">
          <img
            src="/images/Home-icons/Group 690.png"
            alt="Home-icon-9"
            className="absolute lg:top-2 lg:left-40 md:top-0 md:left-16  sm:top-1 sm:left-7  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-9 xl:top-4"
          />

          {/* Top-right corner */}
          <img
            src="/images/Home-icons/Group 688.png"
            alt="Home-icon-10"
            className="absolute lg:top-2 lg:right-40  md:top-2 md:right-20  sm:top-1 sm:right-7 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-10 xl:top-4"
          />

          {/* Bottom-left corner */}
          <img
            src="/images/Home-icons/Group 687.png"
            alt="Home-icon-11"
            className="absolute xl:bottom-72 xl:left-50 lg:bottom-72  lg:left-72 md:bottom-72 md:top:20 md:left-56 sm:bottom-80 sm:top:20 sm:left-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-11 xl:left-60"
          />

          {/* Bottom-right corner */}
          <img
            src="/images/Home-icons/Group.png"
            alt="Home-icon-12"
            className="absolute xl:bottom-72 xl:right-50  lg:bottom-72 lg:right-72 md:bottom-72 md:right-56 sm:bottom-80 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 m-2 sm:m-4 Home-icon-12 xl:right-60"
          />

          <section style={{ width: "100%", height: "50%" }}>
            <div
              className="flex flex-col items-center uiuxhome-container headercontainers"
              style={{ width: "100%" }}
            >
              {/* Home content container */}
              <div className="uiux-header relative z-10 text-center">
                <h1 className="headingss">Creative Solutions</h1>
                <p className="paragraphss">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="p-1 overflow-hidden flex justify-center md:justify-start">
                  <button
                    className="mt-3 btn-btn text-center relative font-bold py-2 px-4 rounded mb-16"
                    style={{
                      border: "2px solid",
                      padding: "10px 20px",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  >
                    <div className="w-8 h-6 btn"></div>
                    <p className="relative top-0 left-0 z-2 font-semibold text-base">
                      See Portfolio
                    </p>
                  </button>
                </div>
                {/* Home image container */}
                <div className="Home-image-container h-full lg:mt-0   xl:mt-10  md:mt-36 relative z-20 sm:mt-40">
                  <div className="w-full flex flex-col items-center relative">
                    {/* Image */}
                    <div className="flex justify-center relative z-10 lg:top-28 lg:right-8 md:right-8 md:bottom-24 md:top-4 sm:right-8 sm:bottom-8 Kindimgpos">
                      {/* <div> */}
                      <img
                        src="/images/creativehome/Group 724.png"
                        alt="Kind-img"
                        className="w-full max-w-[400px] sm:max-w-[400px] md:max-w-[440px] xl:max-w-[580px] lg:max-w-[480px] object-contain Kindimg2 relative xl:top-0 xl:bottom-10 lg:top-4 lg:left-12 md:top-0  md:left-10 sm:top-0 sm:left-8 xl:left-9"
                      />
                      {/* </div>
              <div className='relative md:bottom-7 sm:bottom-4'>
              <img
                src="/images/creativehome/image 53.png"
                alt="creative-img-1"
                className="w-full max-w-[400px] sm:max-w-[150px] md:max-w-[160px] xl:max-w-[220px] lg:max-w-[170px] object-contain creativeimg-1 relative lg:right-5 md:right-6 sm:right-8"
              />
               <img
                src="/images/creativehome/image 54.png"
                alt="creative-img-2"
                className="w-full max-w-[400px] sm:max-w-[150px] md:max-w-[160px] xl:max-w-[220px] lg:max-w-[170px] object-contain Kindimg creativeimg-2 relative xl:left-5 lg:left-4"
              />
              </div> */}
                    </div>
                    {/* Text Rotate Container */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <section className="overflow-visible">
                        <div className="relative lg:top-40 xl:top-24 md:top-8">
                          <div className="circle-texts flex items-center justify-center text-rotate-container">
                            <svg
                              className="overflow-visible w-full sm:h-1/2 md:w-3/4 lg:h-1/3 xl:h-1/4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="transparent"
                              viewBox="0 0 250.5 250.5"
                              // height={324.4}
                              style={{ height: "auto" }}
                            >
                              <defs>
                                <path
                                  d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                                  id="wgl-path-7e10935"
                                ></path>
                              </defs>
                              <text fill="#CACACA">
                                <textPath
                                  className="text-uppercase"
                                  id="wgl-text-path-7e10935"
                                  href="#wgl-path-7e10935"
                                  startOffset="0"
                                >
                                  Innovative Interfaces Exceptional Experience
                                  &nbsp;&nbsp;Innovative Interfaces Exceptional
                                  Experience
                                </textPath>
                              </text>
                            </svg>
                          </div>
                        </div>
                      </section>
                    </div>
                    {/* <RotatingText /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="h-50 w-full lg:mt-1 sm:mb-40">
          <p className="text-4xl font-bold text-center lg:mt-4 xl:mt-1">
            Service
          </p>
          <DesignCarousel4 />
        </div>
      </div>

      <section className="lg:mb-20 mb-5">
        <div className="md:text-4xl text-2xl text-center md:py-4 font-extrabold">
          <p class="">Workflow</p>
        </div>
        <div class="w-full flex justify-center lg:mt-6  mt-4 ">
          <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-12 gap-6 lg:p-0 p-3">
            <div class="flex flex-col items-center text-center">
              <img
                src="/images/requirement.png"
                class="lg:w-48 lg:h-48 w-48 h-48 object-contain"
              />
              <span class="lg:mt-6 mt-3 font-semibold text-md block md:text-lg lg:text-base ">
                Requirement Gathering
              </span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="/images/wireframe.png"
                class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
              />
              <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                Wireframe
              </span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="/images/develop.png"
                class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
              />
              <span class="lg:mt-6 mt-3   font-semibold lg:text-base text-md block">
                Development
              </span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="/images/testing.png"
                class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
              />
              <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                Testing
              </span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="/images/deliver.png"
                class="lg:w-48 lg:h-48 w-48 h-48  object-contain"
              />
              <span class="lg:mt-6 mt-3  font-semibold lg:text-base text-md block">
                Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Some of our work */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-16">
        <div className="mb-6 text-center">
          <h5 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Some of our work
          </h5>
        </div>
      </section>

      <section>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          <img
            src="/images/creativegif/gif1.gif"
            alt=""
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/creativegif/gif2.gif"
            alt=""
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/creativegif/image 55.png"
            alt=""
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/creativegif/image 56.png"
            alt=""
            className=" w-full h-auto object-cover"
          />
          <img
            src="/images/creativegif/gif3.gif"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Carousel section */}

      <section className="lg:py-4 py-4 bg-[#F9F9F9] mt-10 container">
        <div className="text-4xl text-center md:py-4  font-extrabold md:mb-0 mb-4">
          <p class="">Features</p>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-sm md:text-base text-center lg:w-7/12 md:w-11/12 md:mt-0 mt-2">
            Discover the essential features that make modern websites shine.
            <span className="hidden md:inline">
              {
                " Add these to make your site look great, work smooth, and keep visitors happy."
              }
            </span>
            <span className="inline md:hidden">
              {!isReadMore && (
                <>
                  ...{" "}
                  <button onClick={toggleReadMore} className="text-[#FF6C37] ">
                    Read More
                  </button>
                </>
              )}
              {isReadMore && (
                <>
                  <span className="lg:w-full flex justify-center">
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </span>
                  <button onClick={toggleReadMore} className="text-[#FF6C37]">
                    Show Less
                  </button>
                </>
              )}
            </span>
          </p>
        </div>

        {/* <div className="w-full flex justify-center py-10 relative">
          <Carousel
            autoPlay             
            interval={2000}     
            infiniteLoop        
            stopOnHover={false}  
            showStatus={false}   
            showThumbs={false}   
            showArrows         
            className="w-11/12 lg:max-w-5xl rounded-xl"
          >
            {groupedItems.map((group, index) => (
              <div key={index} className="flex justify-center ">
                {group.map((item, subIndex) => (
                  <div key={subIndex} className="p-1 w-full sm:w-full md:w-1/3 lg:w-1/3">
                    <div className="bg-[#FFFFFF] rounded-2xl shadow-md h-80 md:h-80 lg:h-96 xl:h-80">
                      <div className="flex flex-col items-center justify-center h-full">
                        <img src={item.logoSrc} alt={Logo ${subIndex}} className="h-32 md:h-24 lg:h-32 xl:h-24 w-auto object-contain -mt-10" />
                        <span className="lg:text-xl md:text-lg text-md font-semibold mt-2">{item.title}</span>
                        <span className="lg:text-base text-sm mt-3 text-center lg:w-11/12 w-full">{item.content}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
           <button
        onClick={handlePrevClick}
        className=" lg:flex hidden absolute left-48 top-1/2 z-10 focus:outline-none bg-[#EAEAEA] rounded-full"
      >
        <svg className="w-8 h-8 text-[#FFFFFF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className=" lg:flex hidden absolute right-48 top-1/2  z-10 focus:outline-none bg-[#EAEAEA] rounded-full"
      >
        <svg className="w-8 h-8 text-[#FFFFFF] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9.59 16.59L11 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
        </div> */}

        <div className="w-full flex justify-center py-10 ">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-11/12 lg:max-w-5xl rounded-xl "
          >
            <CarouselContent className="flex  ">
              {imagess.map((item, index) => (
                <CarouselItem className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 rounded-xl drop-shadow-sm ">
                  <div className="p-1" key={index}>
                    <Card className="bg-gray-50 rounded-2xl shadow-md">
                      <CardContent className="flex flex-col aspect-square items-center justify-center  ">
                        <img
                          src={item.logoSrc}
                          alt={`Logo ${index}`}
                          className=""
                        />
                        <span className="lg:text-xl md:text-lg text-md font-semibold mt-2">
                          {item.title}
                        </span>
                        <span className="text-sm mt-3 text-center">
                          {item.content}{" "}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="" />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <div className="relative ">
        <div className="md:absolute bottom-0 left-0 w-full">
          <img src="/images/bg.svg" alt="bg" className="w-full" />
        </div>
        <section className="py-4 mt-16 w-full flex justify-center ">
          <div className="bg-[#FFD100] lg:w-8/12 md:w-8/12 w-11/12 h-auto md:h-48 lg:h-64 rounded-xl relative max-w-7xl flex flex-col-reverse gap-5 items-center justify-center">
            <div className="md:absolute bottom-0 lg:left-12 md:left-8 left-16 w-7/12 lg:w-96 md:w-96 sm:w-80">
              <img
                src="/images/partner.svg"
                className="w-full lg:w-full md:w-3/4 sm:w-full crm-img"
              />
            </div>
            <div className="md:absolute top-5 lg:right-22 md:right-16 right-12 text-center flex md:block flex-col justify-center">
              <p className="text-l md:text-2xl lg:text-3xl sm:text-9xl lg:ms-2 font-bold tracking-wide leading-relaxed relative lg:left-5 crm-1">
                Struggling with <br /> CRM Challenges?
              </p>

              <p className="right-12 lg:right-36 md:right-16 text-xs md:text-base lg:text-base sm:text-base sm:mt-1 text-center relative lg:left-8 md:left-1 crm-2">
                Let's solve your CRM challenges together.
              </p>
              {/* <button
                className={`button mt-3 inset-x-0${
                  hover ? "hover" : ""
                } flex flex-column justify-center text-center text-white relative lg:left-8`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ "--button-content": "${content}" ,color:"white"}}
              ></button> */}
              <button
                className={`button   relative lg:left-8 md:left-3 mt-3 ${
                  hover ? "hover" : ""
                } crm-3`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ "--button-content": `"${content}"` }}
              ></button>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <div className="fixed bottom-10 right-6">
        <div className="animate-bounce border border-white drop-shadow-xl w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center">
          <img src="/images/whats.svg" alt="image" className="w-3/4 h-3/4" />
        </div>
      </div>
    </>
  );
};

export default CreativeSolution;
