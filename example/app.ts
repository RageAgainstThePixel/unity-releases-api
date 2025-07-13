import dotenv from 'dotenv';
import { UnityReleasesClient } from 'unity-releases-api';
import { GetUnityReleasesData } from '../dist/unity-releases-api';
import fs from 'fs';

async function main() {
    dotenv.config();
    const client = new UnityReleasesClient();
    const query: GetUnityReleasesData = {
        query: {
            version: '6000.0',
            architecture: ['ARM64'],
            stream: ['LTS'],
            platform: ['WINDOWS'],
            order: 'RELEASE_DATE_DESC'
        }
    };
    const { data: response, error } = await client.api.ReleaseService.getUnityReleases(query);
    if (error) {
        console.error('Error fetching releases:', error);
    } else {
        fs.writeFileSync('unity-releases-result.json', JSON.stringify(response, null, 2));
        console.log(JSON.stringify(response, null, 2));
    }
}

main();