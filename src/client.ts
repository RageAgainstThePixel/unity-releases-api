import * as services from './unity-releases-api';

export class UnityReleasesClient {
  api = services;
  constructor() {
    services.client.setConfig({ baseUrl: 'https://services.api.unity.com' });
  }
}