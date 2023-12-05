import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  return (
    <div className="p-12 bg-[#fb7ea8a2] backgroundImageFooter ">
      <div className="flex justify-between ">
        <div className="flex ">
          <div className="text-3xl">
            <FaSpotify />
          </div>
          <a href="" className="text-xl ml-1 font-medium">
            <strong>Spotify</strong> Design
          </a>
        </div>
        <div className="flex text-xl gap-10">
          <ul className="font-normal flex flex-col gap-2">
            <li className="text-with-underline">
              <a href="/">Newsroom</a>
            </li>
            <li className="text-with-underline">
              <a href="/">Spotify Jobs</a>
            </li>
            <li className="text-with-underline">
              <a href="/">Spotify.com</a>
            </li>
            <li className="text-with-underline">
              <a href="/">Spotify R&D Engineering</a>
            </li>
            <li className="text-with-underline">
              <a href="/">Spotify R&D Research</a>
            </li>
            <li className="text-with-underline">
              <a href="/">Spotify R&D Insights</a>
            </li>
          </ul>
          <ul className="font-normal text-xl gap-4 ">
            <li>
              <a href="/" className="text-with-underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="/" className="text-with-underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="font-medium gap-4 ">
            <li>
              <div>Time - {currentTime.toLocaleTimeString()}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
