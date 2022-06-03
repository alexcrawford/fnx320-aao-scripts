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
        {
            name: 'CAPT_INST_DISCONNECT',
            varName: 'S_FC_CAPT_INST_DISCONNECT',
            template: 'button',
        },
        {
            name: 'THR_INST_DISCONNECT1',
            varName: 'S_FC_THR_INST_DISCONNECT1',
            template: 'button',
        },
        {
            name: 'THR_INST_DISCONNECT2',
            varName: 'S_FC_THR_INST_DISCONNECT2',
            template: 'button',
        },
        {
            name: 'EFB_VISIBLE_CAPT',
            varName: 'S_EFB_VISIBLE_CAPT',
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
            name: 'EFB_VISIBLE_FO',
            varName: 'S_EFB_VISIBLE_FO',
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
            name: 'WINDOW_BLINDS_CAPT',
            varName: 'S_WINDOW_BLINDS_CAPT',
            template: 'value',
            states: [
                {
                    name: 'RAISE',
                    value: 0,
                },
                {
                    name: 'LOWER',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'WINDOW_BLINDS_FO',
            varName: 'S_WINDOW_BLINDS_FO',
            template: 'value',
            states: [
                {
                    name: 'RAISE',
                    value: 0,
                },
                {
                    name: 'LOWER',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'WINDOW_BLINDS_REAR_CAPT',
            varName: 'S_WINDOW_BLINDS_REAR_CAPT',
            template: 'value',
            states: [
                {
                    name: 'RAISE',
                    value: 0,
                },
                {
                    name: 'LOWER',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'WINDOW_BLINDS_REAR_FO',
            varName: 'S_WINDOW_BLINDS_REAR_FO',
            template: 'value',
            states: [
                {
                    name: 'RAISE',
                    value: 0,
                },
                {
                    name: 'LOWER',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'SUNSHADE_CAPT',
            varName: 'S_SUNSHADE_CAPT',
            template: 'value',
            states: [
                {
                    name: 'RAISE',
                    value: 0,
                },
                {
                    name: 'LOWER',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'SUNSHADE_FO',
            varName: 'S_SUNSHADE_FO',
            template: 'value',
            states: [
                {
                    name: 'RAISE',
                    value: 0,
                },
                {
                    name: 'LOWER',
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
