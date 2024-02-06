function(instance, context) {
    instance.data.step = 0
    instance.data.next = () => {
        instance.data.step += 1
        instance.publishState('step', instance.data.step)
        instance.triggerEvent('next')
    }
    instance.data.start = () => instance.data.next() 
}