import { ProjectsInfos } from "../constants/Globals/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectsInfo } from "../constants";
import "swiper/css";

import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';


interface CardProps {
  
    onProjectSelect: (project : ProjectsInfos) => void;
}

export const ProjectsList: React.FC<CardProps> = ({
  onProjectSelect,
}) => {
    const handleSlide = (swiper : any) => {
        console.log(swiper.activeIndex);
        
        onProjectSelect(ProjectsInfo[swiper.activeIndex]); // Trigger callback to send data to parent
      };
  return (
    <div className=" relative order-1 sm:order-2 sm:w-1/2  m-3 sm:m-4 border rounded-lg border-slate-100 border-opacity-15">
      <Swiper 
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        onSlideChange={handleSlide}
         className="mySwiper">

        {ProjectsInfo.map((currentProject) => (
          <SwiperSlide key={currentProject.id} className=" p-2">
            <div className="flex flex-col justify-around gap-10">
              <div className="text-white sm:mx-6">
                <img
                  src={currentProject.logo}
                  alt="logo"
                  className={`${currentProject.style} `}
                />
              <div className="text-white text-xl  px-2 font-roboto font-semibold sm:text-2xl sm:font-bold">
                <h4>{currentProject.name}</h4>
              </div>
              </div>
            
            <div className="px-2 sm:px-8 font-roboto font-light opacity-70 text-sm text-slate-200 sm:text-base">
              <p>{currentProject.description}</p>
            </div>
            {/* icons div */}
            <div className="flex justify-between ">
              {/* tech used & live project btn */}
              <div className="flex flex-wrap items-center gap-2 p-2 sm:px-8 ">
                {currentProject.tech.map((stack) => (
                  <img
                    key={stack.id}
                    src={stack.href}
                    alt="toggle"
                    className="w-10 h-10 bg-slate-300 bg-opacity-15 px-2 rounded-lg"
                  />
                ))}
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
