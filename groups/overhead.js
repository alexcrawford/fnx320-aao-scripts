module.exports = {
    name: 'OH',
    scripts: [
        {
            name: 'EXT_LT_RWY_TURNOFF',
            varName: 'S_OH_EXT_LT_RWY_TURNOFF',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'ON',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'EXT_LT_WING',
            varName: 'S_OH_EXT_LT_WING',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'ON',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'EXT_LT_BEACON',
            varName: 'S_OH_EXT_LT_BEACON',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'ON',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'EXT_LT_NAV_LOGO',
            varName: 'S_OH_EXT_LT_NAV_LOGO',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'NAV',
                    value: 1,
                },
                {
                    name: 'LOGO',
                    value: 2,
                },
            ],
        },
        {
            name: 'EXT_LT_STROBE',
            varName: 'S_OH_EXT_LT_STROBE',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'AUTO',
                    value: 1,
                },
                {
                    name: 'ON',
                    value: 2,
                },
            ],
        },
        {
            name: 'EXT_LT_LANDING_L',
            varName: 'S_OH_EXT_LT_LANDING_L',
            template: 'value',
            states: [
                {
                    name: 'RETRACT',
                    value: 0,
                },
                {
                    name: 'OFF',
                    value: 1,
                },
                {
                    name: 'ON',
                    value: 2,
                },
            ],
        },
        {
            name: 'EXT_LT_LANDING_R',
            varName: 'S_OH_EXT_LT_LANDING_R',
            template: 'value',
            states: [
                {
                    name: 'RETRACT',
                    value: 0,
                },
                {
                    name: 'OFF',
                    value: 1,
                },
                {
                    name: 'ON',
                    value: 2,
                },
            ],
        },
        {
            name: 'EXT_LT_LANDING_BOTH',
            varName: 'S_OH_EXT_LT_LANDING_BOTH',
            template: 'value',
            states: [
                {
                    name: 'RETRACT',
                    value: 0,
                },
                {
                    name: 'OFF',
                    value: 1,
                },
                {
                    name: 'ON',
                    value: 2,
                },
            ],
        },
        {
            name: 'EXT_LT_NOSE',
            varName: 'S_OH_EXT_LT_NOSE',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'TAXI',
                    value: 1,
                },
                {
                    name: 'TO',
                    value: 2,
                },
            ],
        },
        {
            name: 'SIGNS_BELTS',
            varName: 'S_OH_SIGNS',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'ON',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
    ],
};