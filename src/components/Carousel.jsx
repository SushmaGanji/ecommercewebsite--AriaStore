import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useEffect } from "react";
import "../index.css";
import { getData } from "../context/DataProvider";
import SlickSlider from "react-slick";
import Category from "./Category";

const Slider = SlickSlider.default || SlickSlider;

const Carousel = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // 👉 Next Arrow
  const SampleNextArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute right-10 top-1/2 z-10 cursor-pointer">
      <AiOutlineArrowRight className="bg-red-500 text-white p-2 rounded-full text-3xl" />
    </div>
  );

  // 👉 Prev Arrow
  const SamplePrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute left-10 top-1/2 z-10 cursor-pointer">
      <AiOutlineArrowLeft className="bg-red-500 text-white p-2 rounded-full text-3xl" />
    </div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      {/* ✅ Render only when data is available */}
      {data?.length > 0 && (
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
            >
              <div className="flex justify-center items-center h-[600px] px-4 gap-20">
                
                {/* LEFT CONTENT */}
                <div className="space-y-6">
                  <h3 className="text-red-500 text-sm font-semibold">
                    Enriching Your world with the best of the styling
                  </h3>

                  <h1 className="text-4xl font-bold uppercase line-clamp-3 text-white w-[500px]">
                    {item.title}
                  </h1>

                  <p className="w-[500px] line-clamp-2 text-gray-400">
                    {item.description}
                  </p>

                  <button className="bg-red-500 px-4 py-3 text-white text-lg rounded-lg mt-2">
                    Shop Now
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-[350px] rounded-full p-6 hover:scale-110 transition-all shadow-2xl shadow-red-400 object-contain"
                  />
                </div>

              </div>
            </div>
          ))}
        </Slider>
      )}

      <Category />
    </div>
  );
};

export default Carousel;