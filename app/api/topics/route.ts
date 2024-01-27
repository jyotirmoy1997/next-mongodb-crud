import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/libs/mongoDB";
import Topic from "@/model/topic";

export async function GET(){
    await connectMongoDB();
    try {
        const allTopics = await Topic.find()
        const topics : Topic[] = allTopics.map(el => ({_id : el._id, title : el.title, description : el.description}))
        return NextResponse.json({topics})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ msg : "Error Occured"}, {status : 400})
    }
}

export async function POST(request : NextRequest) {
    const { title, description } = await request.json() as Partial<Topic>
    await connectMongoDB();
    try {
        await Topic.create({ title, description })
        return NextResponse.json({ msg : "Topic Created"})
    } catch (error) {
        console.log("Error")
        return NextResponse.json({ msg : "Error Occured"}, {status : 500})
    } 
}

