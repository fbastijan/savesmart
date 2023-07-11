import { Service } from "./Auth";
const friends = {
  async Search(query) {
    let response = await Service.get("/api/users/byname", {
      name: query,
    });
    return response.data;
  },
};
export { friends };
