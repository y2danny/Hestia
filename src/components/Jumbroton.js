// import logo from '../assets/logo.svg';
import Container from '../assets/container.png';
import '../components/jumbroton.css';

const Jumbroton = () => {
    return (
       <div>
      <div className="container">
     <div className='home'>
      <h1>A Home Away From Home</h1>
      <h3>Buy, Rent and Sell Properties</h3>
     </div>
     <div className='search'>
      <input placeholder="Enter an address,neighborhood, city or zip code"></input>
      <button>Search</button>
     </div>
    </div>
    <div className='property'>
      <div className='prop'>
        <h2>
          Have property to sell?
        </h2>
        <p>
          Upload your property for free
        </p>
      </div>
      <div className='btn'>
        <button>Mint now</button>
      </div>
    </div>
    </div>
    );
  }
  
  export default Jumbroton;
  