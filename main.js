// soal 1
// const arr = [1, 2, 3, 4, 5]
// const [a, b, c, d, e] = arr

// const arr = [5,4,3,2,1]
// const [a, b, c, d, e] = arr

// soal 2

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removearr(...arr) {
    return [4, 5, 6, 7, 8, 9, 10]
}


// soal 3
let Promise = new Promise(resolve => {
    resolve([
        {
            id: 1,
            nama: 'izaa',
            jurusan: 'programmer',
            divisi: 'mobile dev,front-end',
            umur: '17'
        }
    ])
})

promise.then(res => console.log(res))