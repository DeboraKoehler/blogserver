import { Document } from 'mongoose';

export interface Article extends Document {
    readonly id: number;
    readonly title: string;
    readonly author: string;
    readonly description: string;
    readonly content: string;
    comments: string[];
}