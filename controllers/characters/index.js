import charactersService from "../../services/characters-service.js";

import { successResMsg, errorResMsg } from "../../utilities/response.js";
import { Logger as logger } from "../../logger.js";

const params = ["name", "gender", "height", "-name", "-gender", "-height"];

class CharacterController {
  async list(req, res) {
    try {
      const { sort, filter } = req.query;
      if (!params.includes(sort)) {
        return errorResMsg(res, 400, "Sort params is required");
      }

      const { metadata, data } = await charactersService.getCharacters({
        sortParams: sort,
        filterParams: filter,
      });

      return successResMsg(res, 200, {
        message: "All movies characters fetched successfully",
        metadata,
        data,
      });
    } catch (error) {
      logger.error(error);
      errorResMsg(res, 500, "Something went wrong while fetching movie list");
    }
  }
}

export default new CharacterController();
