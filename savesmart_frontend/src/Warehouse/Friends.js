import { Service } from "./Auth";
const friends = {
  async Search(query) {
    let response = await Service.post("/api/users/byname", {
      name: query,
    });
    return response.data;
  },
  async Add(current_user_id, friend_id) {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let response = await Service.patch(
      "/api/friends/add",
      {
        _id: current_user_id,
        friend_id: friend_id,
      },
      config
    );
    return response.data;
  },
};
export { friends };
