import Axios from 'axios';

const AppUrl = "http://192.168.137.1:4000/api/repas"

export function getAllMeals() {
  return Axios.get(`${AppUrl}`)
}