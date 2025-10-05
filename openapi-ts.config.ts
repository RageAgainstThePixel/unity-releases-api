import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: './unity-releases-openapi.yaml',
    output: './src/unity-releases-api',
    exportCore: true,
    plugins: [
        {
            name: '@hey-api/client-fetch',
            bundle: true,
        },
        {
            name: '@hey-api/typescript',
            exportFromIndex: true,
            enums: 'typescript',
            case: 'PascalCase',
        },
        {
            name: '@hey-api/sdk',
            exportFromIndex: true,
            asClass: true,
            client: true,
        },
        {
            name: '@hey-api/schemas',
            exportFromIndex: true,
        }
    ]
});