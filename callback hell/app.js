// console.log("Sending request to server!")
// setTimeout(() => {
//     console.log("Here is your data from the server...")
// }, 3000)
// console.log("I AM AT THE END OF THE FILE!")
// setTimeout( () => {
// document.body.style.backgroundColor = 'red';
// }, 2000)

// setTimeout( () => {
// document.body.style.backgroundColor = 'orange';
// }, 2000)
// setTimeout( () => {
// document.body.style.backgroundColor = 'yellow';
// }, 2000)
// setTimeout( () => {
// document.body.style.backgroundColor = 'green';
// }, 2000)

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('yellow', 1000, () => {
        delayedColorChange('green', 1000, () => {
            
        })
    })
})
