// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const LaunchType = {
    AddServer: 'add-server',
    Normal: 'normal',
    DeepLink: 'deeplink',
    Notification: 'notification',
    Upgrade: 'upgrade',
} as const;

export default LaunchType;
