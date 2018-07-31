import { get } from '../request';

//test
export async function queryTest() {
  const url = '/mock/posts';
  const rs = await get(url);
  return rs || {};
}


