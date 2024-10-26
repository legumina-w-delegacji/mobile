import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
    name: 'my-app',
    slug: 'my-app',
    android: {
        package: "your.app.package.name",
        googleServicesFile: "./google-services.json"
    },
    ios: {
        bundleIdentifier: "your.app.bundle.identifier",
        googleServicesFile: "./GoogleService-Info.plist"
    },
};

export default config;