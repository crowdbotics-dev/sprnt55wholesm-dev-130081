import axios from "axios"
import {
  CONNECTOR_SPR55DEMOSM_PASSWORD,
  CONNECTOR_SPR55DEMOSM_USERNAME
} from "react-native-dotenv"
const sprdemosm = axios.create({
  baseURL: "https://api.demosm.com",
  auth: {
    username: CONNECTOR_SPR55DEMOSM_PASSWORD,
    password: CONNECTOR_SPR55DEMOSM_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function spr55demosm_get_search_testing_read(payload) {
  return sprdemosm.get(`/search/testing`)
}
export const apiService = { spr55demosm_get_search_testing_read }
