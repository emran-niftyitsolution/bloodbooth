import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import DonationRequest from "@/models/DonationRequest";

const REQUEST_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export async function POST(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  const { requesterId, donorId } = body;

  if (!requesterId || !donorId) {
    return NextResponse.json(
      { error: "requesterId and donorId are required" },
      { status: 400 }
    );
  }

  // enforce 5 requests per 10 minutes
  const windowStart = new Date(Date.now() - WINDOW_MS);
  const existing = await DonationRequest.countDocuments({
    requesterId,
    createdAt: { $gte: windowStart },
    status: { $in: ["pending", "accepted"] },
  });

  if (existing >= REQUEST_LIMIT) {
    return NextResponse.json(
      {
        error: `You can only request ${REQUEST_LIMIT} donations every ${
          WINDOW_MS / 60000
        } minutes.`,
      },
      { status: 429 }
    );
  }

  const donationRequest = new DonationRequest({
    requesterId,
    donorId,
    status: "pending",
  });

  await donationRequest.save();
  return NextResponse.json({ donationRequest });
}

export async function PATCH(request: NextRequest) {
  await connectDB();
  const body = await request.json();
  const { requestId, action } = body;
  if (!requestId || !action) {
    return NextResponse.json(
      { error: "requestId and action are required" },
      { status: 400 }
    );
  }

  const donationRequest = await DonationRequest.findById(requestId);
  if (!donationRequest) {
    return NextResponse.json({ error: "Request not found" }, { status: 404 });
  }

  switch (action) {
    case "accept":
      donationRequest.status = "accepted";
      donationRequest.contactUnlocked = true;
      break;
    case "complete":
      donationRequest.status = "completed";
      break;
    case "cancel":
      donationRequest.status = "cancelled";
      break;
    default:
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      );
  }

  await donationRequest.save();
  return NextResponse.json({ donationRequest });
}



