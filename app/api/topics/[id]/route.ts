import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/libs/mongoDB";
import Topic from "@/model/topic";

export async function GET(request : NextRequest, { params : { id }} : Params){
    await connectMongoDB()
    const topic = await Topic.findOne({_id : id})
    return NextResponse.json({ msg : topic})
}

export async function DELETE(request : NextRequest, { params : { id }} : Params){
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ msg : "Topic Deleted"})
}

export async function PUT(request : NextRequest, { params : { id }} : Params){
    const { title, description } = await request.json() as Partial<Topic>
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ msg : "Topic Updated"})
}