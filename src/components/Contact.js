import Rectangle from '../assets/Rectangle.png';

const Contact = () => {
    return (
<section id='sect' className="text-gray-600 body-font relative mt-10 mb-4 bg-green-50 border-2 rounded-lg border-green-400">

  <h2 className="text-3xl mt-10 font-bold pb-4 text-center">Get in touch with us </h2>
        <p className="font-bold mb-8 pb-4 text-center">
        Our friendly team would love to hear from you
        </p>


    <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 ml-10 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" className="absolute inset-0 pl-5 ml-20" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src={Rectangle}></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">The Polygon community blockchain beginner track</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-purple-500 leading-relaxed" href="/">example@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">+234048----</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-transparent mr-20 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p className="leading-relaxed mb-5 text-gray-600">The Polygon community blockchain beginner track</p>
        <div className="relative mb-4">
          <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
        <p className="text-xs text-gray-500 mt-3">The Polygon community blockchain beginner track</p>
      </div>
    </div>
  </section>
    );
  }
  
  export default Contact;
  