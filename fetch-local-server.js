const BASE_URL = 'http://localhost:3000';
const END_POINT = '/todo';

export default class FetchRequest {
  constructor() {}
  getTodo() {
    console.log(1);
    const response = fetch(`${BASE_URL}${END_POINT}`).then(res => res.json());

    return response;
  }
}
