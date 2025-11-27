import mongoose, { Document, Model } from "mongoose";

export type DonationRequestStatus =
  | "pending"
  | "accepted"
  | "completed"
  | "cancelled";

export interface IDonationRequest extends Document {
  requesterId: mongoose.Types.ObjectId;
  donorId: mongoose.Types.ObjectId;
  status: DonationRequestStatus;
  contactUnlocked: boolean;
  paymentRef?: string;
  createdAt: Date;
  updatedAt: Date;
}

const donationRequestSchema = new mongoose.Schema<IDonationRequest>(
  {
    requesterId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "cancelled"],
      default: "pending",
    },
    contactUnlocked: {
      type: Boolean,
      default: false,
    },
    paymentRef: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const DonationRequest: Model<IDonationRequest> =
  mongoose.models.DonationRequest ||
  mongoose.model<IDonationRequest>(
    "DonationRequest",
    donationRequestSchema
  );

export default DonationRequest;



