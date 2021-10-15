// Task 1
import axios from 'axios';

const getOne = async singer => {
    const url = `https://itunes.apple.com/search?term=${singer}&limit=20`;
    const result = await axios.get(url);
    return result.data.results;
}

const getAll = async singers => {
    const result = await Promise.all(singers.map(singer => getOne(singer)));
    return result.flat();
}

const sortFunc = (a,b) => {
    if (a['primaryGenreName'] < b['primaryGenreName']) return -1;
    if (a['primaryGenreName'] > b['primaryGenreName']) return 1;
    if (a['releaseDate'] < b['releaseDate']) return -1;
    if (a['releaseDate'] > b['releaseDate']) return 1;
    return 0
}

const getAllSorted = async singers => {
    const data = await getAll(singers);
    return data.sort(sortFunc);
}

console.log(await getAllSorted(['ariana', 'taylor', 'billie', 'ed', 'shawn', 'dua', 'selena', 'camila', 'bruno', 'justin']))


// TASK 2
import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://test:test@cluster0.6y6mn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const pipeline = [
    { $unwind: "$sizes" },
    { $group: { _id: { $toLower: "$sizes"}, avgPrice: { $avg: "$price" } } },
    { $sort: { avgPrice : 1}}
  ];
  const collection = client.db("test").collection("test");     
  collection.aggregate(pipeline).toArray().then(res => {
    res.forEach(entry => console.log(entry));
  }).catch(err =>{
    console.log(err)
  }).finally(()=> {
    client.close();
  });
});