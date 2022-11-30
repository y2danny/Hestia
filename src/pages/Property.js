// import { ethers } from 'ethers';
// import { useEffect, useState } from 'react';

// import close from '../assets/close.svg';

// Components
import Navigation from '../components/Navigation';
// Components

const Home = ({ home, provider, escrow, togglePop }) => {
    return (
    <div>
      <div
      className={`relative bg-white w-[1280px] h-[1393px] overflow-clip font-['Red_Rose']`}>
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2e2ca50333750c5aa3ab66719b6409308fd02d92.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] absolute w-[568px] h-[530px] left-[73px] top-[229px] rounded-[20px]"
       />
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] absolute w-[1150px] h-[1122px] left-[65px] top-[221px] bg-[rgba(69,255,29,0.05)] rounded-[20px]"
       />
      <div
        className="absolute w-[207px] h-[76px] left-[536px] top-[1154px] bg-[rgba(21,80,9,1)] rounded-[20px]"
       />
      <p
        className="absolute font-bold text-left text-white inline m-0 left-[566px] top-[1169px] text-[32px] leading-[normal]"
      >
        mint now
      </p>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6e6b89053f487ccf870d29ecfb4fa6cec6866e6a.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] absolute w-[223px] h-[191px] left-[245px] top-[845px] rounded-[10px]"
       />
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/31c2a275a42ed7dcb4cbc20d01a88840bfff2588.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] absolute w-[228px] h-[191px] left-[520px] top-[845px] rounded-[10px]"
       />
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/1882b12cf1a7fabe839d9bd4ca0eb4d9c09692f7.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] absolute w-[229px] h-[198px] left-[806px] top-[838px] rounded-[10px]"
       />
      <p
        className="absolute font-bold text-left inline m-0 left-[684px] top-[290px] text-[32px] leading-[normal] text-[rgba(21,80,9,1)]"
      >
        Duplex - 2 Terace Apartment
      </p>
      <p
        className="opacity-60 absolute text-2xl font-bold text-justify inline m-0 w-[435px] left-[684px] top-[350px] leading-[normal] text-[rgba(21,80,9,1)]"
      >
        Fully furnished with householde items all ensuite. 24/hr Electricity, solar powered and s,mart home
      </p>
      <p
        className="absolute font-bold text-justify inline m-0 left-[707px] top-[558px] text-[22px] leading-[normal] text-[rgba(21,80,9,1)]"
      >
        $ 50,000
      </p>
      <Navigation />
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(21,_80,_9,_1)_inset] [box-shadow-width:1px] absolute w-[49px] h-[39px] left-[689px] top-[636px] bg-[rgba(217,217,217,0.02)] rounded-[10px]"
       />
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/f4f75401708f4f1d465bbe78bd102fe8d1baaac4.webp)_no-repeat_center_/_contain] w-7 absolute h-[19px] left-[700px] top-[648px]"
       />
      <p
        className="absolute text-base font-bold text-left inline m-0 left-[747px] top-[646px] leading-[normal] text-[rgba(21,80,9,1)]"
      >
        Add to basket
      </p>
    </div>
        </div>
    );
}

export default Home;
