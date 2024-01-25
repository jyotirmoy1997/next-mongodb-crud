import mongoose, { Schema, Document } from 'mongoose';

interface ITopic extends Document {
  title: string;
  description: string;
}

const TopicSchema: Schema<ITopic> = new Schema({
  title: String,
  description: String,
}, { timestamps: true });

const Topic = mongoose.models.Topic || mongoose.model<ITopic>('Topic', TopicSchema);

export default Topic;
