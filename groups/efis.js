module.exports = (side) => {
    return {
        name: `EFIS${side}`,
        scripts: [
            {
                name: 'BARO_INC',
                varName: `E_FCU_EFIS${side}_BARO`,
                template: 'increment',
            },
            {
                name: 'BARO_DEC',
                varName: `E_FCU_EFIS${side}_BARO`,
                template: 'decrement',
            },
            {
                name: 'FD',
                varName: `S_FCU_EFIS${side}_FD`,
                template: 'button',
            },
            {
                name: 'LS',
                varName: `S_FCU_EFIS${side}_LS`,
                template: 'button',
            },
            {
                name: 'CSTR',
                varName: `S_FCU_EFIS${side}_CSTR`,
                template: 'button',
            },
            {
                name: 'WPT',
                varName: `S_FCU_EFIS${side}_WPT`,
                template: 'button',
            },
            {
                name: 'VORD',
                varName: `S_FCU_EFIS${side}_VORD`,
                template: 'button',
            },
            {
                name: 'NDB',
                varName: `S_FCU_EFIS${side}_NDB`,
                template: 'button',
            },
            {
                name: 'ARPT',
                varName: `S_FCU_EFIS${side}_ARPT`,
                template: 'button',
            },
            {
                name: 'ND_MODE',
                varName: `S_FCU_EFIS${side}_ND_MODE`,
                template: 'value',
                states: [
                    {
                        name: 'ILS',
                        value: 0,
                    },
                    {
                        name: 'VOR',
                        value: 1,
                    },
                    {
                        name: 'NAV',
                        value: 2,
                    },
                    {
                        name: 'ARC',
                        value: 3,
                    },
                    {
                        name: 'PLAN',
                        value: 4,
                    },
                ],
            },
            {
                name: 'ND_MODE_INC',
                varName: `S_FCU_EFIS${side}_ND_MODE`,
                template: 'increment',
                max: 5,
            },
            {
                name: 'ND_MODE_DEC',
                varName: `S_FCU_EFIS${side}_ND_MODE`,
                template: 'decrement',
                min: 0,
            },
            {
                name: 'ND_ZOOM',
                varName: `S_FCU_EFIS${side}_ND_ZOOM`,
                template: 'value',
                states: [
                    {
                        name: '10',
                        value: 0,
                    },
                    {
                        name: '20',
                        value: 1,
                    },
                    {
                        name: '40',
                        value: 2,
                    },
                    {
                        name: '80',
                        value: 3,
                    },
                    {
                        name: '160',
                        value: 4,
                    },
                    {
                        name: '320',
                        value: 5,
                    },
                ],
            },
            {
                name: 'ND_ZOOM_INC',
                varName: `S_FCU_EFIS${side}_ND_ZOOM`,
                template: 'increment',
                max: 5,
            },
            {
                name: 'ND_ZOOM_DEC',
                varName: `S_FCU_EFIS${side}_ND_ZOOM`,
                template: 'decrement',
                min: 0,
            },
            {
                name: 'NAV1',
                varName: `S_FCU_EFIS${side}_NAV1`,
                template: 'value',
                states: [
                    {
                        name: 'ADF',
                        value: 0,
                    },
                    {
                        name: 'OFF',
                        value: 1,
                    },
                    {
                        name: 'VOR',
                        value: 2,
                    },
                ],
            },
            {
                name: 'NAV2',
                varName: `S_FCU_EFIS${side}_NAV2`,
                template: 'value',
                states: [
                    {
                        name: 'ADF',
                        value: 0,
                    },
                    {
                        name: 'OFF',
                        value: 1,
                    },
                    {
                        name: 'VOR',
                        value: 2,
                    },
                ],
            },
            {
                name: 'BARO_MODE',
                varName: `S_FCU_EFIS${side}_BARO_MODE`,
                template: 'value',
                states: [
                    {
                        name: 'HPA',
                        value: 0,
                    },
                    {
                        name: 'INHG',
                        value: 1,
                    },
                    {
                        name: 'TOGGLE',
                        template: 'toggle',
                    },
                ],
            },
            {
                name: 'BARO_STD',
                varName: `S_FCU_EFIS${side}_BARO_STD`,
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
    }
}
