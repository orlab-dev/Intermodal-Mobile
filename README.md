<img src="https://bluemixassets.eu-gb.mybluemix.net/api/Products/image/logos/basic.svg?key=[starter-basic]&event=readme-image-view" alt="Basic Logo" width="200px"/>

## Basic Starter
Basic Bluemix Mobile Starter in Cordova

[![](https://img.shields.io/badge/bluemix-powered-blue.svg)](https://bluemix.net)
[![](https://img.shields.io/badge/platform-cordova-lightgrey.svg?style=flat)](https://cordova.apache.org/)

### Table of Contents
* [Summary](#summary)
* [Requirements](#requirements)
* [Configuration](#configuration)
* [Run](#run)
* [License](#license)

### Summary

The Basic Bluemix Mobile Starter is an empty project that has integration points for each of the Bluemix Mobile services for Cordova.

### Requirements

* A [Bluemix](http://bluemix.net) Account
* Android
    * [Android Studio](https://developer.android.com/studio/index.html) and [Gradle](https://gradle.org/gradle-download/)
* iOS
    * iOS 8.0+
        * Xcode 8.0
        * Swift 3
    * iOS 7.0
        * Xcode 7
        * Swift 2.3
* Cordova 6.0 or below
        

### Configuration

*  Before running your application make sure to run `cordova build` in your project. Then Open the project in Android Studio or Xcode.

### Warnings

* You may receive the following error when running cordova build ios. This issue is due to a bug in a dependency plugin which is being tracked in Issue 12. You can still run the iOS project in XCode through a simulator or device. 

```Bash
xcodebuild: error: Unable to find a destination matching the provided destination specifier:
        { platform:iOS Simulator }

    Missing required device specifier option.
    The device type “iOS Simulator” requires that either “name” or “id” be specified.
    Please supply either “name” or “id”.
 ```






### Run

Click **Run** to start the app in Android Studio or **Click Product** > **Run** to start the app in Xcode.

<img src="README_Images/basic_android.png" alt="Basic App Screenshot" width="250px"/>
<img src="README_Images/basic_ios.png" alt="Basic App Screenshot" width="250px"/>

The application has built in integration points for the Mobile Analytics and Push Notifications services.

### License
This package contains code licensed under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 and may also view the License in the LICENSE file within this package.
# Intermodal-Mobile
