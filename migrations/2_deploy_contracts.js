const evoting = artifacts.require("evoting");

module.exports = function (deployer) {
  deployer.deploy(evoting);
};
