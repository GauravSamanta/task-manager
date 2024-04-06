import mongoose from 'mongoose';

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error('Mongo URI is not provided');
  } else {
    try {
      await mongoose.connect(mongoUri);
      console.log('Database connected');
    } catch (error) {
      console.log(error);
    }
  }
};
