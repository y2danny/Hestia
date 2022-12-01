// import { ethers } from 'ethers';
// import { useEffect, useState } from 'react';

// import close from '../assets/close.svg';


const Mint = () => {
    function hideDialog() {
        document.getElementById("openDialog").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }

    return (
        <div>
    <div
      className={`relative text-left w-[316px] h-[445px] font-['Red_Rose']`}
    >
      {/* <div
        className="[box-shadow:0px_0px_0px_1px_rgba(76,_206,_48,_1)_inset] [box-shadow-width:1px] inset-0 absolute w-[316px] bg-[rgba(21,80,9,1)] rounded-[20px]"
       /> */}
      <div
        className="absolute w-[213px] left-[17.09%] right-[15.51%] top-[6.52%] bottom-[5.17%]"
      >
        <p
          className="left-0 absolute font-light text-white inline m-0 right-[53.05%] top-[47.33%] bottom-[49.62%] text-[10px] leading-[normal]"
        >
          Property Information
        </p>
        <div
          className="left-0 absolute w-[108px] right-[49.3%] top-[51.65%] bottom-[48.35%] outline outline-1 outline-[rgba(76,206,48,1)]"
         />
        <div
          className="left-0 absolute w-[59px] right-[72.3%] top-[69.97%] bottom-[25.45%] bg-[rgba(217,217,217,1)] rounded-[5px]"
         />
        <p
          className="absolute font-light text-white inline m-0 h-[13px] w-[37px] left-[0.94%] right-[81.69%] top-[66.16%] bottom-[30.53%] text-[10px] leading-[normal]"
        >
          Price
        </p>
        <p
          className="absolute font-light inline m-0 h-[11px] w-[108px] left-[4.69%] right-[44.6%] top-[70.99%] bottom-[26.21%] text-[7px] leading-[normal] text-[rgba(0,0,0,0.7)]"
        >
          Enter price
        </p>
        <div
          className="absolute w-[59px] left-[46.95%] right-[25.35%] top-[69.97%] bottom-[25.45%] bg-[rgba(217,217,217,1)] rounded-[5px]"
         />
        <p
          className="absolute font-light text-white inline m-0 h-[13px] w-[108px] left-[47.89%] right-[1.41%] top-[66.16%] bottom-[30.53%] text-[7px] leading-[normal]"
        >
          Upload proof of ownership
        </p>
        <p
          className="right-0 absolute font-light inline m-0 h-[11px] w-[108px] left-[49.3%] top-[70.99%] bottom-[26.21%] text-[7px] leading-[normal] text-[rgba(0,0,0,0.7)]"
        >
          Select file
        </p>
        <div
          className="left-0 absolute w-[207px] right-[2.82%] top-[11.7%] bottom-[82.95%] bg-[rgba(217,217,217,1)] rounded-[5px]"
         />
        <p
          className="absolute font-light inline m-0 w-[154px] left-[6.57%] right-[21.13%] top-[12.72%] bottom-[84.22%] text-[10px] leading-[normal] text-[rgba(0,0,0,0.7)]"
        >
          Enter your name
        </p>
        <p
          className="absolute font-light inline m-0 w-[71px] left-[0.94%] right-[65.73%] top-[7.12%] bottom-[89.82%] text-[10px] leading-[normal] text-[rgba(241,243,249,1)]"
        >
          Name
        </p>
        <div
          className="left-0 absolute w-[207px] right-[2.82%] top-[36.9%] bottom-[57.76%] bg-[rgba(217,217,217,1)] rounded-[5px]"
         />
        <p
          className="absolute font-light inline m-0 w-[154px] left-[6.57%] right-[21.13%] top-[37.91%] bottom-[59.03%] text-[10px] leading-[normal] text-[rgba(0,0,0,0.7)]"
        >
          Enter your address
        </p>
        <p
          className="absolute font-light inline m-0 w-[71px] left-[0.94%] right-[65.73%] top-[32.32%] bottom-[64.63%] text-[10px] leading-[normal] text-[rgba(241,243,249,1)]"
        >
          Address
        </p>
        <div
          className="left-0 absolute w-[207px] right-[2.82%] top-[58.27%] bottom-[36.39%] bg-[rgba(217,217,217,1)] rounded-[5px]"
         />
        <p
          className="absolute font-light inline m-0 w-[154px] left-[6.57%] right-[21.13%] top-[59.29%] bottom-[37.66%] text-[10px] leading-[normal] text-[rgba(0,0,0,0.7)]"
        >
          Enter the property address
        </p>
        <p
          className="absolute font-light inline m-0 w-[71px] left-[0.94%] right-[65.73%] top-[53.69%] bottom-[43.26%] text-[10px] leading-[normal] text-[rgba(241,243,249,1)]"
        >
          Location
        </p>
        <div
          className="left-0 absolute w-[207px] right-[2.82%] top-[23.66%] bottom-[70.99%] bg-[rgba(217,217,217,1)] rounded-[5px]"
         />
        <p
          className="absolute font-light inline m-0 w-[154px] left-[6.57%] right-[21.13%] top-[24.68%] bottom-[72.26%] text-[10px] leading-[normal] text-[rgba(0,0,0,0.7)]"
        >
          Enter your email
        </p>
        <p
          className="absolute font-light inline m-0 w-[71px] left-[0.94%] right-[65.73%] top-[19.08%] bottom-[77.86%] text-[10px] leading-[normal] text-[rgba(241,243,249,1)]"
        >
          Email
        </p>
        <p
          className="top-0 absolute text-xs font-normal inline m-0 left-[4.69%] right-[19.25%] bottom-[96.18%] leading-[normal] text-[rgba(255,253,253,1)]"
        >
          Sell your property on Hestia
        </p>
        <div
          className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/8e8d4c2177839936f906bd9e1621ae8741122260.webp)_no-repeat_center_/_contain] absolute w-[17px] left-[65.26%] right-[26.76%] top-[70.74%] bottom-[26.21%]"
         />
        <div
          className="left-0 absolute w-[59px] right-[72.3%] top-[82.19%] bottom-[13.23%] bg-[rgba(217,217,217,1)] rounded-[5px]"
         />
        <p
          className="absolute font-light text-white inline m-0 h-[13px] w-[108px] left-[0.94%] right-[48.36%] top-[78.37%] bottom-[18.32%] text-[7px] leading-[normal]"
        >
          Upload property image
        </p>
        <p
          className="absolute font-light inline m-0 h-[11px] w-[108px] left-[2.35%] right-[46.95%] top-[83.21%] bottom-[13.99%] text-[7px] leading-[normal] text-[rgba(0,0,0,0.7)]"
        >
          Add image
        </p>
        <div
          className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/8e8d4c2177839936f906bd9e1621ae8741122260.webp)_no-repeat_center_/_contain] absolute w-[17px] left-[18.31%] right-[73.71%] top-[82.95%] bottom-[13.99%]"
         />
        <div
          className="absolute w-[29px] left-[41.78%] right-[44.6%] top-[81.17%] bottom-[12.47%]"
        >
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6f8ac5985eec300fbf75c02cd33c0dbe81a14115.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] inset-x-0 top-0 absolute w-[29px] bottom-[0.83%] rounded-[5px]"
           />
          <div
            className="inset-x-0 bottom-0 absolute w-[29px] top-[0.83%] bg-[rgba(21,80,9,0.7)] rounded-[5px]"
           />
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/afc18ca46747b347bbd189ed48425c02ee6881a8.webp)_no-repeat_center_/_contain] opacity-70 absolute w-[8.923077583312988px] left-[37.76%] right-[31.47%] top-[36.36%] bottom-[42.98%] rounded-[5px]"
           />
        </div>
        <div
          className="w-7 absolute left-[60.09%] right-[26.76%] top-[81.17%] bottom-[12.47%]"
        >
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6f8ac5985eec300fbf75c02cd33c0dbe81a14115.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] inset-x-0 w-7 top-0 absolute bottom-[0.83%] rounded-[5px]"
           />
          <div
            className="inset-x-0 w-7 bottom-0 absolute top-[0.83%] bg-[rgba(21,80,9,0.7)] rounded-[5px]"
           />
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/afc18ca46747b347bbd189ed48425c02ee6881a8.webp)_no-repeat_center_/_contain] opacity-70 absolute w-[8.615385055541992px] left-[37.76%] right-[31.47%] top-[36.36%] bottom-[42.98%] rounded-[5px]"
           />
        </div>
        <div
          className="w-7 absolute left-[78.87%] right-[7.98%] top-[81.17%] bottom-[12.47%]"
        >
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6f8ac5985eec300fbf75c02cd33c0dbe81a14115.webp)_center_/_cover,linear-gradient(0deg,_rgba(217,_217,_217,_1),_rgba(217,_217,_217,_1))] inset-x-0 w-7 top-0 absolute bottom-[0.83%] rounded-[5px]"
           />
          <div
            className="inset-x-0 w-7 bottom-0 absolute top-[0.83%] bg-[rgba(21,80,9,0.7)] rounded-[5px]"
           />
          <div
            className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/afc18ca46747b347bbd189ed48425c02ee6881a8.webp)_no-repeat_center_/_contain] opacity-70 absolute w-[8.615385055541992px] left-[37.76%] right-[31.47%] top-[36.36%] bottom-[42.98%] rounded-[5px]"
           />
        </div>
        <div
          className="bottom-0 absolute w-[58px] left-[26.76%] right-[46.01%] top-[95.42%] bg-[rgba(76,206,48,1)] rounded-[5px]"
         />
        <p
          className="h-3 absolute font-bold text-white inline m-0 w-[53px] left-[29.58%] right-[45.54%] top-[96.18%] bottom-[0.76%] text-[10px] leading-[normal]"
        >
          mint now
        </p>
        <div className="flex justify-end">
                <button
                    className="
                        cursor-pointer
                        rounded-md
                        bg-blue-500
                        px-5
                        py-2
                        text-white
                        hover:bg-blue-700
                    "
                    onClick={hideDialog}
                >
                    Close
                </button>
            </div>

        <div
          className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/9c2e6caa5cf3fd1065298dce971b1089ac9538ce.webp)_center_/_cover] absolute w-[39px] left-[31.46%] right-[50.23%] top-[90.84%] bottom-[7.12%]"
         />
      </div>
    </div>
        </div>
    );
}

export default Mint;
