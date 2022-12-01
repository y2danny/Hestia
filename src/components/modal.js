import React from 'react';
import Downchevron from '../assets/Downchevron.png';
import Maskicon from '../assets/maskicon.png';
import Wallet from '../assets/wallet.png';


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
        <div className='modalRight'>
            <div className='connect_'>
            <h1 id='btnc'> Connect wallet</h1>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          </div>
          <div className='content'>
            <p>Choose your preferred wallet:</p>
            <div className='btn_connect'>
              <img src={Maskicon} />
            <button >MetaMask</button>
            <img id='btn_modal' src={Downchevron} />
            </div>
            <div className='btn_connect'>
              <img src={Wallet} />
            <button>WalletConnect</button>
            <img  id='btn_modal1' src={Downchevron} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;