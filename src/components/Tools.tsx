import { BsArrowRightCircle, BsArrowUpRightCircle } from "react-icons/bs";
import Image1 from "../assets/releases/image1.webp";
import Image2 from "../assets/releases/image2.webp";

const data = [
  {
    id: "1",
    title: "BEHIND THE SCENES",
    image: Image1,
    subject: "Collaboration Secrets: Design X Engineering",
    desc: "Learn how engineers and designers collaborate at Spotify: what works well, what can go wrong... and everything in between!",
  },
  {
    id: "2",
    title: "Q+A",
    image: Image2,
    subject: "Ask Spotify Design 07",
    desc: "How do you choose colors? Prioritize your workload? Govern a design system? Our community panel returns to answer your thoughtful questions. ",
  },
];

const Tools = () => {
  return (
    <div className="p-12 flex gap-28">
      <div className="flex-1 w-full flex flex-col">
        <div className="pb-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">Tools</div>
            <div className="text-2xl font-medium">Our day-to-day resources</div>
          </div>
          <a href="" className="flex items-center gap-2 group">
            <div className="text-[12px] font-semibold spotlightText text-with-underline">
              View all tools
            </div>
            <div className="group-hover:bg-black group-hover:text-white rounded-full border-none transition-all ease-in">
              <BsArrowRightCircle />
            </div>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {data?.map((item) => {
            return (
              <a
                href=""
                className=" rounded overflow-hidden max-w-[300px] text-with-underline"
                key={item.id}
              >
                <img
                  className=" max-h-[250px]"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
                <div className="w-full">
                  <a
                    href=""
                    className="font-bold text-[12px] mb-2 px-2  bg-black text-white mt-3 inline-block"
                  >
                    {item.title}
                  </a>
                  <div className="font-bold text-xl mb-2 subject">
                    {item.subject}
                  </div>
                  <p className="text-gray-700 text-[12px] font-medium text-with-underline-noHover">
                    {item.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex-1">
        <div className="pb-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">Jobs</div>
            <div className="text-2xl font-medium">
              Open roles at Spotify Design
            </div>
          </div>
          <a href="" className="flex items-center gap-2 group">
            <div className="text-[12px] font-semibold spotlightText text-with-underline">
              View all tools
            </div>
            <div className="group-hover:bg-black group-hover:text-white rounded-full border-none transition-all ease-in">
              <BsArrowRightCircle />
            </div>
          </a>
        </div>
        <div className="pb-4 flex items-center justify-between group">
          <div>
            <div className="text-2xl font-bold">MIAMI</div>
            <a href="" className="text-xl font-bold text-with-underline">
              Design Manager - Editorial, LatAm
            </a>
          </div>
          <a
            href=""
            className="items-center gap-2 hidden group-hover:block group-hover:transition-all ease-in-out"
          >
            <div className="group-hover:bg-black text-2xl group-hover:text-white rounded-full ">
              <BsArrowUpRightCircle />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tools;
