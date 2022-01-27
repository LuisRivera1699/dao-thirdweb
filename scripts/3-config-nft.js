import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const bundleDrop = sdk.getBundleDropModule("0xD7c70a9D26ABD8B584026f7B6faeC3Fe09e46dD9",);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Black Football ball Stamp",
        description: "This NFT will give you access to FutDAO!",
        image: readFileSync("scripts/assets/futbol.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()