pragma solidity ^0.4.17; //specifies the version of solidity you are writing in, the compiler compiles the code in this specified version

contract Inbox { // contract declaration: see this as class in JS, when it is delpoyed on the ETH network the contract account on the network is an instance of this contractg source

    string public message; // this a STORAGE VARIABLE/INSTANCE variable: its going to exist for the life of the contract


    function Inbox(string initialMessage) public { //constructor function: runs once ths contract is called
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string) {
        return message;
    }
}
