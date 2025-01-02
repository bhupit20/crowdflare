import { ethers } from "ethers";
import { toast } from "react-toastify";

export const connectMetamask = async () => {
  if (typeof window.ethereum === "undefined") {
    console.log("Metamask is not insatlled!");
    toast.info("Metamask is not insatlled!");



    
    return;
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return { signer: signer, provider: provider };
  } catch (error) {
    console.log("error", error);
  }
};

export const checkIfWalletIsConnect = async (setAccount) => {
  try {
    if (typeof window.ethereum === "undefined") {
      console.log("Metamask is not insatlled!");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length) {
      setAccount(accounts[0]);
    } else {
      console.log("No accounts found");
    }
  } catch (error) {
    console.log(error);
  }
};
