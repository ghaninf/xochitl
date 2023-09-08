import axios from "axios";

class AgendaService {
  async getListByMonth(data) {
    const URL = `${process.env.NEXT_PUBLIC_URL}/api/agenda/listByMonth`
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
  
  async getListByFilter(data) {
    const URL = `${process.env.NEXT_PUBLIC_URL}/api/agenda/listByFilter`
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

  async getFilter() {
    const URL = `${process.env.NEXT_PUBLIC_URL}/api/agenda/filter`
    return axios
      .get(
        URL
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