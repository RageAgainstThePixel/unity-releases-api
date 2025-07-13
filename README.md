# unity-releases-api

[![Discord](https://img.shields.io/discord/855294214065487932.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/xQgMW9ufN4) [![NPM Version](https://img.shields.io/npm/v/%40rage-against-the-pixel%2Funity-releases-api)](https://www.npmjs.com/package/@rage-against-the-pixel/unity-releases-api) [![NPM Downloads](https://img.shields.io/npm/dw/%40rage-against-the-pixel%2Funity-releases-api)](https://www.npmjs.com/package/@rage-against-the-pixel/unity-releases-api)

A TypeScript package for communicating with the [Unity Releases API](https://services.docs.unity.com/release/v1)

- Automatically generated API client from the latest OpenAPI specification.
- Fully typed models and methods for every endpoint.
- Designed for use in a Node.js environment.

## Installation

```sh
npm install @rage-against-the-pixel/unity-releases-api
```

## Example

```ts
import dotenv from 'dotenv';
import { UnityReleasesClient } from 'unity-releases-api';

async function main() {
    dotenv.config();
    const client = new UnityReleasesClient();
    const { data: response, error } = await client.api.ReleaseService.getUnityReleases();
    if (error) {
        console.error('Error fetching releases:', error);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
}

main();
```
