//pragma solidity ^0.4.21;
pragma solidity ^0.4.19;

contract CounterEvents {
    uint256 public count = 0;

    event Increment(address who, uint256 amount);   // declaring event

    function increment() public {
        //emit Increment(msg.sender); // logging event
        count += 1;
        emit Increment(msg.sender, count);
        //count += 1;
    }
}
