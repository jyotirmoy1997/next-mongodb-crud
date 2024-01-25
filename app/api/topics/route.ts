import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/libs/mongoDB";
import Topic from "@/model/topic";

export async function POST(request : NextRequest) {
    const { title, description } = await request.json() as Topic
    await connectMongoDB();
    try {
        await Topic.create({ title, description })
        return NextResponse.json({ msg : "Topic Created"})
    } catch (error) {
        console.log("Error")
        return NextResponse.json({ msg : "Error Occured"}, {status : 400})
    }
    
}