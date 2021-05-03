export const increement = () => {

    console.log('Increement is clicked')
    return {
        type: 'INCREEMENT'
    }
}

export const decreement = () => {
    console.log('Decreement is clicked')

    return {
        type: 'DECREEMENT'
    }
}
