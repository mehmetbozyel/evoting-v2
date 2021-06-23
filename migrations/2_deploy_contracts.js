const evoting = artifacts.require("evoting");

const _ballotOfficialName = "testname"
const _proposal = "testproposal"


module.exports = function (deployer) {
  deployer.deploy(evoting, _ballotOfficialName, _proposal);
};
