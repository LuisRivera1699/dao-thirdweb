import sdk from "./1-initialize-sdk.js";

// Grab the app module address
const appModule = sdk.getAppModule(
  "0x7FD4C52402A5058e5C026db436bC930eDF5AAEa6"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      //Give your governance contract a name
      name: "FutDAO's Epic Proposals",
      
      // This is hte location of our governance token, our ERC-20 contract!
      votingTokenAddress: "0x0b4288ffc2213268d7a1f32b92279864D2C85D9E",

      // After a proposal is created, when can members start voting?
      // For now, we set this to inmediatly
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Will explain more below
      votingQuorumFraction: 0,

      // Whats the minimun # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (error) {
    console.error("Failed to deploy vote module", error);
  }
})();