import * as mongoose from 'mongoose';
import Elysia from 'elysia';
import { Listing } from './schema'

await mongoose.connect('mongodb+srv://hampuseriksson:47J2I7KVzmFnNBsj@cluster0.zwacn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

async function createNew(name: String, info: String){
const newListing = new Listing({
    title: name,
    information: info, 
});
await newListing.save();
}