import { NextResponse } from "next/server";

import { connectToMongoDB } from "@/app/helpers/db/mongoDB";
import stock from "@/app/helpers/model/car";

export async function GET(res: any, req: any) {
	try {
		await connectToMongoDB();

		const cars = await stock.find({});

		return NextResponse.json({ status: 200, data: cars });
	} catch (error) {
		console.error("Error in GET function:", error);
		return NextResponse.json({
			status: 500,
			message: "Failed to process GET request",
		});
	}
}
