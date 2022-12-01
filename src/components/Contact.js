import Rectangle from "../assets/Rectangle.png";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative mt-10 mb-4">
      <h2 className="text-xl font-bold pb-4 text-center">
        Get in touch with us{" "}
      </h2>
      <p className="font-bold mb-2 pb-4 text-center">
        Our friendly team would love to hear from you
      </p>

      <div className={`text-black text-left font-normal font-['Red_Rose']`}>
        <p className="absolute text-5xl m-0 left-[419px] top-[2880px] leading-[normal]">
          Get in touch with us
        </p>
      </div>
      <div>
        <div className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] absolute bg-white w-[483px] h-[57px] left-[655px] top-[3086px] rounded-[10px]" />
      </div>
      <div>
        <div className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] absolute bg-white w-[483px] h-[59px] left-[655px] top-[3212px] rounded-[10px]" />
      </div>
      <div>
        <div className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] absolute bg-white w-[483px] h-[185px] left-[655px] top-[3343px] rounded-[10px]" />
      </div>
      <div>
        <div className="absolute w-[194px] h-[54px] left-[658px] top-[3575px] bg-[rgba(76,206,48,1)] rounded-[10px]" />
      </div>
      <div className={`text-white text-left font-normal font-['Red_Rose']`}>
        <p className="absolute m-0 left-[695px] top-[3580px] text-[32px] leading-[normal]">
          Submit
        </p>
      </div>
      <div>
        <div className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/5a1fdf8ca26d4b90c26465c9030340db15a2698e.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] absolute w-[453px] h-[484px] left-[133px] top-[3044px] rounded-[20px]" />
      </div>

      <div className={`text-black text-left font-light font-['Red_Rose']`}>
        <p className="absolute m-0 left-[339px] top-[2945px] text-[28px] leading-[normal]">
          Our friendly team would love to hear from you
        </p>
      </div>

      <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/5a1fdf8ca26d4b90c26465c9030340db15a2698e.webp"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                The Polygon community blockchain beginner track
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-purple-500 leading-relaxed" href="/">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+234048----</p>
            </div>
          </div>
        </div>
        <div className={`text-black text-left font-light font-['Red_Rose']`}>
          <p className="absolute m-0 left-[659px] top-[3304px] text-[25px] leading-[normal]">
            Message
          </p>
        </div>
        <div className={`text-black text-left font-light font-['Red_Rose']`}>
          <p className="opacity-50 absolute text-xl m-0 left-[690px] top-[3102px] leading-[normal]">
            Enter your email
          </p>
        </div>
        <div className={`text-black text-left font-light font-['Red_Rose']`}>
          <p className="opacity-50 absolute text-xl m-0 left-[690px] top-[3227px] leading-[normal]">
            Enter your first name
          </p>
        </div>
        <div className={`text-black text-left font-light font-['Red_Rose']`}>
          <p className="opacity-50 absolute text-xl m-0 left-[690px] top-[3359px] leading-[normal]">
            Enter your message......
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
