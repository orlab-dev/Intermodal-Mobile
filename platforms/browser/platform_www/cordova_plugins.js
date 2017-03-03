cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/bms-core/www/BMSClient.js",
        "id": "bms-core.BMSClient",
        "pluginId": "bms-core",
        "clobbers": [
            "BMSClient"
        ]
    },
    {
        "file": "plugins/bms-core/www/BMSRequest.js",
        "id": "bms-core.BMSRequest",
        "pluginId": "bms-core",
        "clobbers": [
            "BMSRequest"
        ]
    },
    {
        "file": "plugins/bms-core/www/BMSLogger.js",
        "id": "bms-core.BMSLogger",
        "pluginId": "bms-core",
        "clobbers": [
            "BMSLogger"
        ]
    },
    {
        "file": "plugins/bms-core/www/BMSAnalytics.js",
        "id": "bms-core.BMSAnalytics",
        "pluginId": "bms-core",
        "clobbers": [
            "BMSAnalytics"
        ]
    },
    {
        "file": "plugins/bms-core/www/BMSAuthorizationManager.js",
        "id": "bms-core.BMSAuthorizationManager",
        "pluginId": "bms-core",
        "clobbers": [
            "BMSAuthorizationManager"
        ]
    },
    {
        "file": "plugins/bms-push/www/BMSPush.js",
        "id": "bms-push.BMSPush",
        "pluginId": "bms-push",
        "clobbers": [
            "BMSPush"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-cocoapod-support": "1.2.10",
    "cordova-plugin-add-swift-support": "1.6.0",
    "bms-core": "2.3.6",
    "bms-push": "2.0.7"
}
// BOTTOM OF METADATA
});