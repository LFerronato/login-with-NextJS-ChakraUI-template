import axios from 'axios'
import { parseCookies } from 'nookies'

export const api = axios.create({
  baseURL: 'https://apis.sae.digital',
  headers: {
    authorization: 'Bearer ' + parseCookies()['token']
  }
})
