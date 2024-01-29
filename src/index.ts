import { allBanks, majorBanks } from "./banks";
import { mBnk } from "./classes";

export class mBanks{

  /**
 * Retrieves an array of all banks (Only supports Nigeria for now). 
 * Set oderedList to true if you want the data ordered 
 * Use getAllBanks() to get all banks
 *
 * @returns {mBnk[]} An array of mBnk objects representing banks.
 */
  static getMajorBanks(oderedList?:boolean) {
    const banks:mBnk[] = []
    for (const bankCode in majorBanks) {
      if (majorBanks.hasOwnProperty(bankCode)) {
        const abank = majorBanks[bankCode];
        banks.push(new mBnk(bankCode,abank))
      }
    }
    if(oderedList){
      return banks.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    return banks;
  }

  /**
 * Retrieves an array of all banks (Only supports Nigeria for now). 
 * Set oderedList to true if you want the data ordered 
 * Use getMajorBanks() to get only major banks
 *
 * @returns {mBnk[]} An array of mBnk objects representing banks.
 */
  static getAllBanks(oderedList?:boolean) {
    const banks:mBnk[] = []
    for (const bankCode in allBanks) {
      if (allBanks.hasOwnProperty(bankCode)) {
        const abank = allBanks[bankCode];
        banks.push(new mBnk(bankCode,abank))
      }
    }
    if(oderedList){
      return banks.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    return banks;
  }

  /**
 * Retrieves a bank by its code
 *
 * @returns {mBnk}
 */
  static getBankByCode(bankCode:string) {
    if (allBanks[bankCode]) {
      const abank = allBanks[bankCode];
      return new mBnk(bankCode,abank);
    }
    return undefined;
  }

}