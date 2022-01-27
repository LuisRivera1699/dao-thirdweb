import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x0b4288ffc2213268d7a1f32b92279864D2C85D9E");

(async () => {
  try {
    //Log the current roles
    console.log(
      "👀 Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );

    // Revole all superpowers your wallet had over the ERC-20 contract
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "🎉 Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();