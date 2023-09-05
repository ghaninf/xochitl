import axios from "axios";

class SubscribeService {
  async subscribe(data) {
    const URL = `${process.env.NEXT_PUBLIC_URL}/api/subscribe`
    return axios
      .post(
        URL,
        data
      )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error
      })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SubscribeService();