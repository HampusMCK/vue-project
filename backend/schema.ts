import * as mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        information: {type: String, required: true}
    }
);

export type Listing = mongoose.InferSchemaType<typeof listingSchema>;
export const Listing = mongoose.model('Listing', listingSchema);