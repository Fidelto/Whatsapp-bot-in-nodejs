const stages={
    0:{
       description:'Welcome',
       obj:require('./0')
    },
    1:{
        description:'you menu',
        obj:require('./1')
    },
    2:{
        description:'Select an option',
       obj:require('./2')
    },
    3:{
        description:'Cofirmation',
       obj:require('./3')
    }
}
exports.stage=stages;