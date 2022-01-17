import axios from "axios";
import convertHeight from "../utilities/convertHeight.js";
import dynamicSort from "../utilities/sort.js";

class CharacterService {
  async getCharacters({ sortParams, filterParams }) {
    const { data } = await axios.get("https://swapi.py4e.com/api/people");
    const sortedRes = data.results.sort(dynamicSort(sortParams));

    let tempData = sortedRes;

    if (filterParams) {
      tempData = tempData.filter(
        (character) => character.gender === filterParams
      );
    }
    const totalHeightInCM = tempData.reduce(
      (accumulator, current) => accumulator + Number(current.height),
      0
    );
    const { ft_inches } = convertHeight(totalHeightInCM);

    const metadata = {
      numberOfCharacters: tempData.length,
      totalHeight: {
        cm: totalHeightInCM,
        "feet/inches": ft_inches,
      },
    };

    return { metadata, data: tempData };
  }
}

export default new CharacterService();
