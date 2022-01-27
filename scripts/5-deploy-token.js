import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again

const app = sdk.getAppModule("0x7FD4C52402A5058e5C026db436bC930eDF5AAEa6");

(async () => {
  try {
    // Deploy a standard ERC-20 contract
    const tokenModule = await app.deployTokenModule({
      // Whats your token name?
      name: "FutDAO Governance Token",
      // WHats your tokens symbol?
      symbol: "FUCHIBOL"
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();