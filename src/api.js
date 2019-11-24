import axios from 'axios'

export default {
  number: {
    getNumber: () => axios.get(`http://localhost:3100/number`),
  },
}
