import { MutableRefObject, useRef } from "react";
import Image1 from "../assets/spotlight/image1.jpg";
import Image2 from "../assets/spotlight/image2.jpg";
import Image3 from "../assets/spotlight/image3.webp";
import Image4 from "../assets/spotlight/image4.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import { useDraggable } from "react-use-draggable-scroll";

const data = [
  {
    id: "1",
    title: "Tobi Oyadiran",
    image: Image1,
    city: "New York",
    position: "Product Designer II",
    desc: "If you’d asked the kid version of me what I wanted to be when I grew up, I would’ve definitely told you “teddy bear surgeon”. If you’d asked me to be serious, I’d tell you “someone who designs things”. Looking back, I guess I wasn’t far off.",
  },
  {
    id: "2",
    title: "Grace Kwon",
    image: Image2,
    city: "Stockholm",
    position: "Senior Service Designer",
    desc: "The art of gathering people and insights are two areas I’d like to master throughout my life and career in service design.",
  },
  {
    id: "3",
    title: "René Simonsson",
    image: Image3,
    city: "New York",
    position: "Product Designer",
    desc: "I get to enter a new unfamiliar space, make sense of it using different design processes and tools, and bring forth a narrative.",
  },
  {
    id: "4",
    title: "Ashley Moody",
    image: Image4,
    city: "Stockholm",
    position: "Product Designer II",
    desc: "Being able to create something that makes someone feel more visible as a human in a digital experience keeps me motivated.",
  },
  {
    id: "1",
    title: "Tobi Oyadiran",
    image: Image1,
    city: "New York",
    position: "Product Designer II",
    desc: "If you’d asked the kid version of me what I wanted to be when I grew up, I would’ve definitely told you “teddy bear surgeon”. If you’d asked me to be serious, I’d tell you “someone who designs things”. Looking back, I guess I wasn’t far off.",
  },
  {
    id: "2",
    title: "Grace Kwon",
    image: Image2,
    city: "Stockholm",
    position: "Senior Service Designer",
    desc: "The art of gathering people and insights are two areas I’d like to master throughout my life and career in service design.",
  },
  {
    id: "3",
    title: "René Simonsson",
    image: Image3,
    city: "New York",
    position: "Product Designer",
    desc: "I get to enter a new unfamiliar space, make sense of it using different design processes and tools, and bring forth a narrative.",
  },
  {
    id: "4",
    title: "Ashley Moody",
    image: Image4,
    city: "Stockholm",
    position: "Product Designer II",
    desc: "Being able to create something that makes someone feel more visible as a human in a digital experience keeps me motivated.",
  },
];

const Spotlight = () => {
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    decayRate: 0.95,
    safeDisplacement: 10,
  });

  return (
    <div
      className="w-full h-full my-10 flex flex-col justify-between px-12 
    overflow-hidden scrollHumans"
    >
      <div className="pb-4 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">In the Spotlight</div>
          <div className="text-2xl font-medium">
            Meet the humans who design Spotify
          </div>
        </div>
        <a href="" className="flex items-center gap-2 group">
          <div className="text-[12px] font-semibold spotlightText text-with-underline">
            View all in the spotlights
          </div>
          <div className="group-hover:bg-black group-hover:text-white rounded-full border-none transition-all ease-in">
            <BsArrowRightCircle />
          </div>
        </a>
      </div>
      <div className="xl:w-[41%] w-full overflow-hidden">
        <div
          {...events}
          ref={ref}
          className="flex flex-1 gap-6 overflow-hidden overflow-x-scroll w-full"
        >
          {data?.map((item) => {
            return (
              <a href="" className="rounded max-w-full " key={item.id}>
                <div className="relative group transition-all ease-in-out">
                  <img
                    className="max-h-full min-w-[256px]"
                    src={item.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="hidden group-hover:block absolute bottom-2 group-hover:transition group-hover:ease-in-out p-4 bg-black left-10">
                    <div className="text-white pb-10">{item.desc}</div>
                    <a
                      href=""
                      className="text-white font-bold text-sm text-with-underline"
                    >
                      README MORE
                    </a>
                  </div>
                  <div className="absolute top-10 right-[-50px] rotate-[270deg] flex items-center">
                    <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
                    <div className=" font-semibold text-black">{item.city}</div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-bold text-[16px] mt-3 inline-block ">
                    {item.title}
                  </div>
                  <p className=" text-[20px] font-medium">{item.position}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
