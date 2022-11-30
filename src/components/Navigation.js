// import logo from '../assets/logo.svg';
import {
  Link,
} from "react-router-dom";


const Navigation = () => {
  return (
      <div>
        <div>
            <div
              className="opacity-80 absolute w-[271px] h-[51px] left-[76px] top-[1097px] bg-[rgba(76,206,48,1)] rounded-[10px]"
            />
          </div>
          <div>
            <div
              className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/fd6e0b75128c35e7388456f74af7be292e7a2c7f.webp)_center_/_cover] w-28 absolute h-[83px] left-[117px] top-[29px]"
            />
          </div>
          <div
            className={`text-left font-normal font-['Red_Rose'] text-[rgba(113,10,135,1)]`}
          >
            <p
              className="absolute text-xl m-0 left-[357px] top-[65px] leading-[normal]"
            >
              <Link exact to="/" className="">Home</Link>
            </p>
          </div>
          <div
            className={`text-left font-normal font-['Red_Rose'] text-[rgba(113,10,135,1)]`}
          >
            <p
              className="absolute text-xl m-0 left-[462px] top-[65px] leading-[normal]"
            >
              Place to stay
            </p>
          </div>
          <div
            className={`text-left font-normal font-['Red_Rose'] text-[rgba(113,10,135,1)]`}
          >
            <p
              className="absolute text-xl m-0 left-[635px] top-[65px] leading-[normal]"
            >
              Blog
            </p>
          </div>
          <div
            className={`text-left font-normal font-['Red_Rose'] text-[rgba(113,10,135,1)]`}
          >
            <p
              className="absolute text-xl m-0 left-[735px] top-[65px] leading-[normal]"

            >
              <Link to="/community" className="">Community</Link>
            </p>
          </div>
          <div>
            <div
              className="absolute w-[206px] h-[61px] left-[990px] top-[41px] bg-[rgba(179,49,207,1)] rounded-[20px]"
            />
          </div>
          <div className={`text-white text-left font-normal font-['Red_Rose']`}>
            <p
              className="absolute text-xl m-0 left-[1026px] top-[58px] leading-[normal]"
            >
              Connect wallet
            </p>
          </div>
      </div>
  );
}

export default Navigation;
