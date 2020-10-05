/**
 * @format
 * @flow
 */
import axios from 'axios';

import * as c from '../constants';
import {checkInternetConnection, showToast} from '../functions';

const qs = require('qs');

export async function networkCall(
  path: String,
  type: String,
  params: Any,
  headers: Object,
): Any {
  __DEV__ ? console.log(path, type, params) : '';
  const connected = await checkInternetConnection();
  console.log('TCL: connected', connected);
  if (connected) {
    try {
      const response = await axios({
        method: type,
        url: path,
        data: params,
        headers: {
          ...headers,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        paramsSerializer(params) {
          return qs.stringify(params, {arrayFormat: 'brackets'});
        },
      });
      console.log('TCL: response', response);
      return response;
    } catch (error) {
      console.log('TCL: error', error);
      throw handler(error);
    }
  } else if (!connected && connected !== null) {
    showToast({message: 'NO INTERNET MSG'});
  }
}

export async function createPaymentIntent(data) {
  try {
    let res = await axios.post(c.CREATE_PAYMENT_INTENT, data);

    return res.data;
  } catch (e) {
    throw handler(e);
  }
}
export function handler(err) {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty('message'))
    error = err.response.data;
  else if (!err.hasOwnProperty('message')) error = err.toJSON();
  showToast({message: error.message});
  return new Error(error.message);
}
