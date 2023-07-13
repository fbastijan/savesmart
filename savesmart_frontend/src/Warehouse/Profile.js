import { Service } from "./Auth";

const Profile = {
  async getMore(id) {
    let response = await Service.get(`/api/users/search/${id}`);

    let doc = response.data;
    let recalculateDate = new Date(doc.user.date);
    recalculateDate = recalculateDate.toLocaleDateString("en-GB");

    return {
      avatar: doc.user.avatar,
      date: recalculateDate,
      name: doc.user.name,
      friends: doc.user.friends,
    };
  },
  async getProfile() {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let response = await Service.get("/api/users/profile", config);

    let doc = response.data;

    return {
      _id: doc.user._id,
    };
  },
  async setAvatar(avatarDetail) {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    await Service.patch(
      "/api/image/change",
      {
        _id: avatarDetail._id,
        avatar: avatarDetail.avatar,
      },
      config
    );
  },
};
export { Profile };
