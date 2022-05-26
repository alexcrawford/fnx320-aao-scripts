module.exports = {
    name: 'PED',
    scripts: [
        {
            name: 'ENG_MASTER_1',
            varName: 'S_ENG_MASTER_1',
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
            name: 'ENG_MASTER_2',
            varName: 'S_ENG_MASTER_2',
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
            name: 'ENG_MODE',
            varName: 'S_ENG_MODE',
            template: 'value',
            states: [
                {
                    name: 'CRANK',
                    value: 0,
                },
                {
                    name: 'NORM',
                    value: 1,
                },
                {
                    name: 'START',
                    value: 2,
                },
            ],
        },
        {
            name: 'XPDR_OPERATION',
            varName: 'S_XPDR_OPERATION',
            template: 'value',
            states: [
                {
                    name: 'STBY',
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
            name: 'XPDR_ALTREPORTING',
            varName: 'S_XPDR_ALTREPORTING',
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
            name: 'XPDR_MODE',
            varName: 'S_XPDR_MODE',
            template: 'value',
            states: [
                {
                    name: 'STBY',
                    value: 0,
                },
                {
                    name: 'TA',
                    value: 1,
                },
                {
                    name: 'TARA',
                    value: 2,
                },
            ],
        },
        {
            name: 'XPDR_IDENT',
            varName: 'S_XPDR_IDENT',
            template: 'button',
        },
    ],
};