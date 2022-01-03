pragma solidity >=0.5.0 <0.6.0; //the 'version pragma' defines the version of solidity compiler to be used to  compile your code in
// the prevents future version of solidity compilers to make changes that will break your code?

// Contract are the fundamental building block of Ethereum applications, all the variable and function for your ethreum apps will belong to a contract
contract ZombieFactory {

    event NewZombie(uint zombieId, string name, uint dna);

    // States variables: permanently stored in contract storage or on the ethereum blockchain
    uint dnaDigits = 16; // uint => unsigned integer which is a data type that only accepts non-negative numbers. uint is an alias for 256-bit unsigned integer
    uint dnaModulus = 10 ** dnaDigits;

    // struct: allow you create a more complex data type with multiple properties. Similar to how interfaces/custom types works in typescript
    struct Zombie {
        string name;
        uint dna;
    }

    /**

    * there are two types of array in solidity:

    * 1. Fixed array: an array with a fixed length.
        string[7] fixedArray; #this array named fixedArray can only contain 7 string elements
    
    * 2. Dynamic array: has no fixes size/length

    // you can also create an array with struct as I did below    
     */ 

    Zombie[] public zombies; // the array will contain elements that conform with the Zombie struct data type
    // the public keyword in the array declaration, shows its a public array. Solidity automatically creates a getter function for the array.Other contracts would then be able to read from, but not write to, this arra

    function _createZombie(string memory _name, uint _dna) private {
        uint id = zombies.push(Zombie(_name, _dna)) - 1; //pushing a struct into an array
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string memory _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

}
