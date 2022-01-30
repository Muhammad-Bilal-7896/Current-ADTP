// const arr = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 1, name: 'one' }]

const userArr = [
    {
        "id": 5,
        "key": "cCHf0Hn1E5DNpfgLK5xo",
        "Agency": "Thanks",
        "Brand": "Telkom",
        "Representative_name": "bfg",
        "Image": "https://firebasestorage.googleapis.com/v0/b/adtp-a04bd.appspot.com/o/2022-01-30T16%3A04%3A37.943Z?alt=media&token=2e1698b4-f025-4468-9c70-31aab4144cb4",
        "Count": 4
    },
    {
        "id": 4,
        "key": "aktkaIzc3VfYb97hi7zA",
        "Agency": "Thanks",
        "Brand": "Samsung",
        "Representative_name": "Kate Mac",
        "Image": "https://firebasestorage.googleapis.com/v0/b/adtp-a04bd.appspot.com/o/2022-01-24T16%3A52%3A52.281Z?alt=media&token=e61bf277-bd20-4d9c-9acb-760c827bf8bd",
        "Count": 3
    },
    {
        "id": 3,
        "key": "rLYDqMbrduaeBCUbv7gR",
        "Agency": "Thanks",
        "Brand": "Allen Gray",
        "Representative_name": "james Maclac",
        "Image": "https://firebasestorage.googleapis.com/v0/b/adtp-a04bd.appspot.com/o/2022-01-24T16%3A49%3A55.347Z?alt=media&token=a895d459-e39c-4a1b-a681-4a184fda4096",
        "Count": 2
    },
    {
        "id": 2,
        "key": "Qp9FWEPdKdDObdMccrwE",
        "Agency": "Company 1",
        "Brand": "New Brand",
        "Representative_name": "Bilal ",
        "Image": "https://firebasestorage.googleapis.com/v0/b/adtp-a04bd.appspot.com/o/2022-01-30T15%3A46%3A40.719Z?alt=media&token=52b0075d-d16f-41ea-8b94-29ff0b7295b1",
        "Count": 1
    },
    {
        "id": 1,
        "key": "QJ3SA2bybJq8ikbonkw3",
        "Agency": "Thanks",
        "Brand": "Investec",
        "Representative_name": "James Mac",
        "Image": "https://firebasestorage.googleapis.com/v0/b/adtp-a04bd.appspot.com/o/2022-01-24T16%3A49%3A27.408Z?alt=media&token=fcdfe7e5-b41f-44ae-9bad-c17d9026060f",
        "Count": 1
    },
    {
        "id": 0,
        "key": "PS64Z7ZCvxFEUTwQ7yaC",
        "Agency": "Upwork",
        "Brand": "Bata",
        "Representative_name": "M bilal s",
        "Image": "https://firebasestorage.googleapis.com/v0/b/adtp-a04bd.appspot.com/o/2022-01-17T20%3A20%3A40.399Z?alt=media&token=37ebe801-cba9-4cd3-a9df-cac1ba4c8126",
        "Count": 1
    }
]

userArr.reverse();

console.log("Length of array before filter ==> ",userArr.length)

const ids = userArr.map(o => o.Agency)
const filtered = userArr.filter(({ Agency }, index) => !ids.includes(Agency, index + 1))

console.log("Length of array after filter ==> ",filtered.length)

console.log("Filtered Array ==> ",filtered)
