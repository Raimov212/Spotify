import { BsArrowRightCircle } from "react-icons/bs";
import Image1 from "../assets/releases/image1.webp";
import Image2 from "../assets/releases/image2.webp";
import Image3 from "../assets/releases/image3.webp";
import Image4 from "../assets/releases/image4.webp";

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
  {
    id: "3",
    title: "BEHIND THE SCENES",
    image: Image3,
    subject: "Collaboration Secrets: Design X Engineering",
    desc: "Journey up and through the cosmic soundscape to join ShroomCat for a misty mountaintop stomp.",
  },
  {
    id: "4",
    title: "BEHIND THE SCENES",
    image: Image4,
    subject: "Zoned 44",
    desc: "Journey up and through the cosmic soundscape to join ShroomCat for a misty mountaintop stomp.",
  },
];

const Releases = () => {
  return (
    <div className="px-8 ">
      <div className="pb-4 flex items-center justify-between">
        <div className="text-2xl font-bold ">New Releases</div>
        <a href="" className="flex items-center gap-2 group">
          <div className="text-[12px] font-semibold spotlightText text-with-underline">
            View all stories
          </div>
          <div className="group-hover:bg-black group-hover:text-white rounded-full border-none transition-all ease-in">
            <BsArrowRightCircle />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((item) => {
          return (
            <a
              href=""
              className="rounded overflow-hidden max-w-[300px] group"
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
                <div className="font-bold text-xl mb-2 text-with-underline">
                  {item.subject}
                </div>
                <p className="text-gray-700 text-[12px] font-medium">
                  {item.desc}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Releases;
