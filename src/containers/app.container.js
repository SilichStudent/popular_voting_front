import { callApi, RequestBuilder, Methods } from '../common/CallApiUtils';

export const loadCandidates = () => {
  const request = new RequestBuilder()
    .addEndpoint('/candidates')
    .addMethod(Methods.GET)
    .build();
  
  return callApi(request)
}