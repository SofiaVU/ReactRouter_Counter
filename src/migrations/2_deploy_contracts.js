const counterEvents = artifacts.require("./CounterEvents");

module.exports = function(deployer) {
	deployer.deploy(counterEvents);
};