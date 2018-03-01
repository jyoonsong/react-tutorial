import axios from 'axios';

export function getAPOD(date='') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=QfhuH8V4pducM9egumUUG90I9LbHwDLKovPgODFt&date=${date}`);
}