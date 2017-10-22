/*
Copyright 2015, 2016 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

import UserSettingsStore from '../../../UserSettingsStore';

const React = require('react');

module.exports = React.createClass({
    displayName: 'LoginPageHeader',

    render: function() {
        let themeBranding;
        if (UserSettingsStore.getTheme() === 'status') {
            themeBranding = <div>
                <div className="mx_LoginPageHeader_brand">
                    <img src="themes/status/img/logo.svg" alt="Status" width="221" height="53"/>
                </div>
                <div className="mx_LoginPageHeader_title">
                    <h1>Status Community Chat</h1>
                    <div className="mx_LoginPageHeader_subtitle">
                        A safer, decentralised communication platform <a href="https://riot.im">powered by Riot</a>
                    </div>
                </div>
            </div>;   
        }
        else {
            themeBranding = <div/>;
        }

        return themeBranding;
    },
});
