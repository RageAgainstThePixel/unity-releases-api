import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    client: {
        bundle: true,
        name: '@hey-api/client-fetch'
    },
    input: './unity-releases-openapi.yaml',
    output: './src/unity-releases-api',
    exportCore: true,
    services: {
        asClass: true,
    }
});