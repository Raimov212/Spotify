/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { TfiControlShuffle } from "react-icons/tfi";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.webp";
import Image4 from "../assets/image4.png";
import styled from "styled-components";

const data = [
  {
    id: "1",
    title: "PRODUCT DESIGN",
    desc: "Backstage Tickets to the World of Service Design at Spotify",
    theme: "yellow",
    image: Image1,
    rotateX: 5,
    rotateY: Math.random() < 0.5 ? -(Math.random() * 10) : Math.random() * 10,
    rotateZ: Math.random() * 10,
  },
  {
    id: "2",
    title: "METHODS",
    desc: "Finding your T-Shape as a Specialist Designer",
    theme: "green",
    image: Image2,
    rotateY: Math.random() < 0.5 ? -(Math.random() * 10) : Math.random() * 10,
    rotateZ: Math.random() * -10,
  },
  {
    id: "3",
    title: "BEHIND THE SCENE",
    desc: 'Beyond "Good Job": How to Give Impactful Feedback',
    theme: "red",
    image: Image3,
    rotateX: 5,
    rotateY: Math.random() < 0.5 ? -(Math.random() * 10) : Math.random() * 10,
    rotateZ: Math.random() * 10,
  },
  {
    id: "4",
    title: "Design Systems",
    desc: "Finding your T-Shape as a Generalist Designer",
    theme: "violet",
    image: Image4,
    rotateX: 5,
    rotateY: Math.random() < 0.5 ? -(Math.random() * 10) : Math.random() * 10,
    rotateZ: Math.random() * 10,
  },
];

const ImageSlider = styled.div<{
  $transformRotateX?: number;
  $transformRotateY?: number;
  $transformRotateZ?: number;
}>`
  position: absolute;
  top: -450px;
  right: 0;
  transform: rotateX(${(props) => `${props.$transformRotateX}deg`})
    rotateY(${(props) => `${props.$transformRotateY}deg`})
    rotateZ(${(props) => `${props.$transformRotateZ}deg`});
  transform: rotate(${(props) => `${props.$transformRotateY}deg`});
`;

const ListItem = ({ item }: { item: any }) => {
  return (
    <div
      className={`absolute  w-full transition-all ease-in-out drop-shadow-2xl shadow-black`}
    >
      <ImageSlider
        $transformRotateX={item.rotateX}
        $transformRotateY={item.rotateY}
        $transformRotateZ={item.rotateZ}
      >
        <img src={item.image} alt="" className="w-[400px] h-[400px]" />
      </ImageSlider>
    </div>
  );
};

const Main = () => {
  const [theme, setTheme] = useState<string>("");
  const [dataCount, setDataCount] = useState<number>(data.length);

  useEffect(() => {
    data.map((item) => item.id === `${dataCount}` && setTheme(item.theme));
  }, [dataCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dataCount === 1) {
        setDataCount(4);
      } else {
        setDataCount((prev) => prev - 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [dataCount]);

  const handleChangeSliderImage = (type: string) => {
    if (type === "inc") {
      if (dataCount < data.length) {
        setDataCount((prev) => prev + 1);
      } else {
        setDataCount(1);
      }
    }
    if (type === "dec") {
      if (dataCount === 1) {
        setDataCount(data.length);
      } else {
        setDataCount((prev) => prev - 1);
      }
    }
    if (type === "all") {
      setDataCount(data.length);
    }
  };

  return (
    <div className={`w-full h-full pb-28 pt-6 px-8 bg-[${theme}]`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-3xl">
            <FaSpotify />
          </div>
          <div className="text-xl ml-1 font-medium">
            <strong>Spotify</strong> Design
          </div>
        </div>
        <div>
          <ul className="font-medium flex gap-4 ">
            <li>
              <a href="/">Stories</a>
            </li>
            <li>
              <a href="/">Listen</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Tools</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gap-4 pt-10 flex flex-col justify-center">
        <div className={`bg-[${theme}]`}>
          <div>
            <div className="flex gap-20 pt-20 h-[400px] ">
              <div className="flex flex-col gap-4 mt-[110px]">
                <button
                  onClick={() => handleChangeSliderImage("dec")}
                  className="text-2xl"
                >
                  <MdSkipNext />
                </button>
                <button
                  onClick={() => handleChangeSliderImage("inc")}
                  className="text-2xl"
                >
                  <MdSkipPrevious />
                </button>
                <button
                  onClick={() => handleChangeSliderImage("all")}
                  className="text-2xl"
                >
                  <TfiControlShuffle />
                </button>
              </div>
              <div className="transition-all ease-in">
                {data?.map(
                  (item) =>
                    item.id === `${dataCount}` && (
                      <div key={item.id}>
                        <p className="font-semibold">{item.title}</p>
                        <h1 className="text-6xl font-bold w-[450px]">
                          {item.desc}
                        </h1>
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="pl-32 pt-24 flex gap-2 items-center">
              <div>{dataCount}</div>
              <div className="bg-gray-400 w-[30px] rounded-lg h-[2px]"></div>
              <div>{data.length}</div>
            </div>
          </div>

          <div className={`relative bg-[${theme}] mr-20`}>
            {data.slice(0, dataCount).map((item) => {
              return (
                <Fragment key={item.id}>
                  <ListItem item={item} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
