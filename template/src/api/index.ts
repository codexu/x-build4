import request from '@/libs/request';

export default function () {
  return request({
    method: 'get',
    url: '/api',
  });
}
