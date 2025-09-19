import dotenv from 'dotenv';
import {
    UnityReleasesClient,
    GetUnityReleasesData
} from 'unity-releases-api';

async function main() {
    dotenv.config();
    const client = new UnityReleasesClient();
    const query: GetUnityReleasesData = {
        query: {
            version: '6000.0',
            architecture: ['ARM64'],
            stream: ['LTS'],
            platform: ['WINDOWS'],
            order: 'RELEASE_DATE_DESC',
            limit: 1
        }
    };
    const { data: response, error } = await client.api.ReleaseService.getUnityReleases(query);
    if (error) {
        console.error('Error fetching releases:', error);
    } else {
        console.log(JSON.stringify(response, null, 2));
    }
}

main();