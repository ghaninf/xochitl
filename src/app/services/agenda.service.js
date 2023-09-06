import axios from "axios";

class AgendaService {
  async getList(data) {
    const URL = `${process.env.NEXT_PUBLIC_URL}/api/agenda/list`
    return axios
      .get(
        URL,
        {
          params: data,
        }
      )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error
      })
  }

  async getFilter(params) {
    const URL = `${process.env.NEXT_PUBLIC_URL}/api/agenda/filter`
    return axios
      .get(
        URL,
        {
          params: params
        }
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
export default new AgendaService();