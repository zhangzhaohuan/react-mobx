import { get } from '../request';

//test
export async function queryTest() {
  const url = '/mock';
  const params = {
    pagesize:50
  }
  const rs = await get(url,params);
  return rs || {};
}


