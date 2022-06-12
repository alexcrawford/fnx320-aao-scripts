const { groups } = require('./groups/index')

console.log('# Generated scripts')

groups.forEach((group) => {
    console.log(`## ${group.name}`)

    group.scripts.forEach((script) => {
        if (script.states && script.states.length > 0) {
            script.states.forEach((state) => {
                console.log(`* ${group.name}_${script.name}_${state.name}`)
            })
        } else {
            console.log(`* ${group.name}_${script.name}`)
        }
    })
})
