import dotenv from 'dotenv';
import { UnityReleasesClient } from 'unity-releases-api';

async function main() {
    dotenv.config();
    const client = new UnityReleasesClient();
    const { data: response, error } = await client.api.Release.getUnityReleases({
        query: {
            version: '6000.0',
            architecture: ['ARM64'],
            stream: ['LTS'],
            platform: ['WINDOWS'],
            order: 'RELEASE_DATE_DESC',
            limit: 1
        }
    });
    if (error) {
        console.error('Error fetching releases:', error);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
}

main();