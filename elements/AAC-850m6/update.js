function(instance, properties, context) {
    if (properties.count === undefined || properties.count === null || typeof properties.count !== 'number' || properties.delay === undefined || properties.delay === null || typeof properties.delay !== 'number') return
    (function loop(i) {
        setTimeout(function() {
            instance.publishState('step', Math.abs(i))
            instance.triggerEvent('incremented')
            if (--i) loop(i)
            else {
                instance.publishState('finished', true)
            	instance.triggerEvent('finished')
            }
        }, Math.abs(properties.delay))
    })(Math.abs(properties.count))
}