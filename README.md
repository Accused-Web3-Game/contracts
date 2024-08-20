# Contracts for Accused Web3 Game
The contracts on this directory are used to run the staking feature of the game. Currently, the contracts running on it are:

- KPG ERC20 Contract,
- ACS (Accused Token) ERC20 Contract,
- Staking Contract.

## Steps to make the staking works

These contracts were compiled using `thirdweb deploy` CLI command. The two first contracts should be deployed first before deploying the last one. After deploying, take note of the deployed contract addresses.

When deploying the last contract, there are specific parameters (constructors) to be filled.
- The address of KPG ERC20 contract for staking token,
- The address of ACS ERC20 contract for reward token,
- The time unit (in seconds) for rewards,
- The reward ratio numerator and denominator. e.g. if numerator is set to 1 and denominator is set to 20, then for each 20 staked tokens 1 reward token is given every time unit.