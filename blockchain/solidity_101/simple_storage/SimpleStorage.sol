// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SimpleStorage {
    // Declare and Assign Simple Variable.
    uint256 public favoriteNumber;

    // Creating Simple Function.
    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    // Creating Simple Getter Function
    function retrieve() public view returns(uint256) {
        return favoriteNumber;
    }

    // Creating Struct "Person"
    struct Person {
        uint personNumber;
        string name;
    }

    // Creating a List of Persons.
    Person[] public listOfPersons;

    // Creating Name Mapping to Easily get Everyone's Favorite Number.
    mapping(string => uint256) public nameToFavoriteNumber;

    // Creating a Function to Add to Persons.
    function addPerson(uint _pNum, string memory _pName) public {
        listOfPersons.push(Person({personNumber: _pNum, name: _pName}));
        nameToFavoriteNumber[_pName] = _pNum;
    }
}
