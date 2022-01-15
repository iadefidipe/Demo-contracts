pragma solidity ^0.4.17;

// simple contract 
contract Inbox {
    string public message; //state variable
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    } //constructor
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}