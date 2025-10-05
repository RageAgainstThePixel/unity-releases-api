import * as api from './unity-releases-api/sdk.gen';
import { client } from './unity-releases-api/client.gen';

export class UnityReleasesClient {
  public readonly api = api;
  constructor() {
    client.setConfig({ baseUrl: 'https://services.api.unity.com' });
  }
}