function Footer() {
  return (
    <div className="flex justify-between items-center z-100  bg-black  shadow-md   shadow-outer">
      <div className="flex justify-center items-center">
        <div className="h-80 p-20 rounded-full " />
        <div className="pl-96">
          <div className="text-white text-2xl ">
            National Aeronautics and Space Administration
          </div>
          <div className="text-white text-lg pt-2">
            Astronomy Picture of the Day
          </div>
        </div>
      </div>

      <div className="pr-60">
        <div className="text-white text-2xl pr-40">Spacestagram</div>
        <div className="text-white text-lg pt-4">
          Image sharing from the Final Frontier
        </div>
        <div className="text-blue-500 text-md pt-4 flex">
          <div className="pr-2 font-semibold">Developed by:</div>
          <div className="pointer">
            <a
              href="https://pavansrinivas.tech"
              target="_blank"
              rel="noreferrer"
              className="pointer text-purple-500"
            >
              @pavan_srinivas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// I used many copyright assets (I assume cause I downloaded from the Internet)
