import { useState } from "react";

const Support = () => {
  const [text, setText] = useState<string>("");
  const [sendMessageIsVisible, setSendMessageIsVisible] =
    useState<boolean>(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSendMessageIsVisible(true);
  };

  return (
    <div className="bg-black flex p-14 h-[600px]">
      <div className="font-bold text-5xl text-white flex-[7] w-full">
        Want Spotify Design updates sent straight to your inbox?
      </div>
      <div className="flex-[4] mt-auto">
        {sendMessageIsVisible ? (
          <div className="text-white font-bold text-2xl w-full pb-2 mb-14">
            Thank you for subscribing - {text}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="border-b-[1px] border-white flex items-center w-full pb-2 mb-14"
          >
            <input
              type="email"
              placeholder="We saved a spot for your email"
              onChange={(e) => setText(e.target.value)}
              className="outline-none bg-black text-white w-[350px] justify-end placeholder:text-white placeholder:text-xl"
            />
            <button type="submit" className="text-white ml-10">
              SEND
            </button>
          </form>
        )}

        <div className="text-gray-400 text-sm">
          By clicking send you'll receive occasional emails from Spotify Design.
          You always have the choice to unsubscribe within every email you
          receive.
        </div>
      </div>
    </div>
  );
};

export default Support;
