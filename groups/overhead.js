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
        {
            name: 'SIGNS_SMOKING',
            varName: 'S_OH_SIGNS_SMOKING',
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
            name: 'INT_LT_EMER',
            varName: 'S_OH_INT_LT_EMER',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'ARM',
                    value: 1,
                },
                {
                    name: 'ON',
                    value: 2,
                },
            ],
        },
        {
            name: 'INT_LT_DOME',
            varName: 'S_OH_INT_LT_DOME',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'DIM',
                    value: 1,
                },
                {
                    name: 'BRT',
                    value: 2,
                },
            ],
        },
        {
            name: 'IN_LT_ANN_LT',
            varName: 'S_OH_IN_LT_ANN_LT',
            template: 'value',
            states: [
                {
                    name: 'BRT',
                    value: 0,
                },
                {
                    name: 'DIM',
                    value: 1,
                },
                {
                    name: 'TEST',
                    value: 2,
                },
            ],
        },
        {
            name: 'WIPER_CAPT',
            varName: 'S_MISC_WIPER_CAPT',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'SLOW',
                    value: 1,
                },
                {
                    name: 'FAST',
                    value: 2,
                },
            ],
        },
        {
            name: 'WIPER_FO',
            varName: 'S_MISC_WIPER_FO',
            template: 'value',
            states: [
                {
                    name: 'OFF',
                    value: 0,
                },
                {
                    name: 'SLOW',
                    value: 1,
                },
                {
                    name: 'FAST',
                    value: 2,
                },
            ],
        },
        {
            name: 'NAV_IR1_MODE',
            varName: 'S_OH_NAV_IR1_MODE',
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
                    name: 'ATT',
                    value: 2,
                },
            ],
        },
        {
            name: 'NAV_IR2_MODE',
            varName: 'S_OH_NAV_IR2_MODE',
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
                    name: 'ATT',
                    value: 2,
                },
            ],
        },
        {
            name: 'NAV_IR3_MODE',
            varName: 'S_OH_NAV_IR3_MODE',
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
                    name: 'ATT',
                    value: 2,
                },
            ],
        },
        {
            name: 'ELEC_APU_MASTER',
            varName: 'S_OH_ELEC_APU_MASTER',
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
            name: 'ELEC_APU_START',
            varName: 'S_OH_ELEC_APU_START',
            template: 'button',
        },
        {
            name: 'PNEUMATIC_APU_BLEED',
            varName: 'S_OH_PNEUMATIC_APU_BLEED',
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
            name: 'OXYGEN_CREW_OXYGEN',
            varName: 'S_OH_OXYGEN_CREW_OXYGEN',
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
            name: 'FUEL_LEFT_1',
            varName: 'S_OH_FUEL_LEFT_1',
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
            name: 'FUEL_LEFT_2',
            varName: 'S_OH_FUEL_LEFT_2',
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
            name: 'FUEL_RIGHT_1',
            varName: 'S_OH_FUEL_RIGHT_1',
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
            name: 'FUEL_RIGHT_2',
            varName: 'S_OH_FUEL_RIGHT_2',
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
            name: 'FUEL_CENTER_1',
            varName: 'S_OH_FUEL_CENTER_1',
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
            name: 'FUEL_CENTER_2',
            varName: 'S_OH_FUEL_CENTER_2',
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
            name: 'FUEL_XFEED',
            varName: 'S_OH_FUEL_XFEED',
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
            name: 'FUEL_MODE_SEL',
            varName: 'S_OH_FUEL_MODE_SEL',
            template: 'value',
            states: [
                {
                    name: 'MAN',
                    value: 0,
                },
                {
                    name: 'AUTO',
                    value: 1,
                },
                {
                    name: 'TOGGLE',
                    template: 'toggle',
                },
            ],
        },
        {
            name: 'PNEUMATIC_ENG1_ANTI_ICE',
            varName: 'S_OH_PNEUMATIC_ENG1_ANTI_ICE',
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
            name: 'PNEUMATIC_ENG2_ANTI_ICE',
            varName: 'S_OH_PNEUMATIC_ENG2_ANTI_ICE',
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
            name: 'PNEUMATIC_WING_ANTI_ICE',
            varName: 'S_OH_PNEUMATIC_WING_ANTI_ICE',
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
            name: 'PROBE_HEAT',
            varName: 'S_OH_PROBE_HEAT',
            template: 'value',
            states: [
                {
                    name: 'AUTO',
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