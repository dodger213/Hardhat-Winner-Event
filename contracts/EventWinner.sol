// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

interface ContractWinner {
    function attempt() external;
}

contract EventWinner {
    event AttemptMade(address indexed targetContract, bool success);
    
    function callWinner(address winnerContractAddress) external {
        require(winnerContractAddress != address(0), "Invalid contract address");
        
        // Call the attempt function and capture the success
        (bool success,) = winnerContractAddress.call(
            abi.encodeWithSignature("attempt()")
        );
        
        // Emit event with the result
        emit AttemptMade(winnerContractAddress, success);
    }
}
