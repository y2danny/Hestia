//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Escrow{
    address public nftAddress; 
    address payable public seller;
    address public agent;
    mapping (uint256 => bool) public isListed;
    mapping (uint256 => uint256) public purchasePrice;
    mapping (uint256 => uint256) public escrowAmount;
    mapping (uint256 => address) public buyer;
    mapping (uint256 => bool) public status;
    mapping(uint256 => mapping(address => bool)) public approvalStatus;


    constructor(address _nftAddress, address payable _seller, address _agent){
        nftAddress = _nftAddress;
        seller = _seller;
        agent = _agent;
    }
    modifier onlySeller (){
        require (msg.sender == seller, "Only Seller is permitted");
        _;
    }

    modifier onlyBuyer(uint256 _nftID){
        require(msg.sender == buyer[_nftID], "Only Buyer is permitted");  
        _;      
    }

    modifier onlyInspector(){
        require( msg.sender == agent ,"You are not authorized to inspect the project");
        _;
    }

    receive() external payable{}

    function getBalance() public view returns (uint256){
        return address(this).balance;
    }

    function sellerActivity (uint256 _nftID, 
    uint256 _purchasePrice, 
    uint256 _escrowAmount, 
    address _buyer) public payable onlySeller{
        IERC721(nftAddress).transferFrom(msg.sender, address(this), _nftID);

        isListed[_nftID] = true;
        purchasePrice[_nftID] = _purchasePrice;
        escrowAmount[_nftID] = _escrowAmount;
        buyer[_nftID] = _buyer;

    }

    function buyerActivity (uint256 _nftID) public payable onlyBuyer(_nftID){
        require(msg.value >=  escrowAmount[_nftID], "Insufficient Amount");
    }
    
    function inspectorActivity(uint256 _nftID, bool _status) public onlyInspector{
        status[ _nftID] =  _status;
    }

    function approvalSale(uint256 _nftID) public {
        approvalStatus[_nftID][msg.sender] = true;
    }

    function sale(uint256 _nftID) public {
        require(status[_nftID]);
        require(approvalStatus[_nftID][buyer[_nftID]]);
        require(approvalStatus[_nftID][seller]);
        require(approvalStatus[_nftID][agent]);    
        require(address(this).balance >= purchasePrice[_nftID]);

        isListed[_nftID] = false;

        (bool success, ) = payable(seller).call{value: address(this).balance}(
            ""
        );
        require(success);

        IERC721(nftAddress).transferFrom(address(this), buyer[_nftID], _nftID);

    }

    function cancelSale(uint256 _nftID) public {
        if (status[_nftID] == false) {
            payable(buyer[_nftID]).transfer(address(this).balance);
        } else {
            payable(seller).transfer(address(this).balance);
        }
    }



}
