import request from '@/router/axios';
import {
  baseUrl
} from '@/config/env';

export const getDocuments = (type = 0) => request({
  url: baseUrl + '/file/getDocuments',
  method: 'get',
  data: {
    type
  }
});