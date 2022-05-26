module.exports = {
    name: 'MISC',
    scripts: [
        {
            name: 'CAPT_TILLER_PEDAL_DISCONNECT',
            varName: 'S_FC_CAPT_TILLER_PEDAL_DISCONNECT',
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