import mongoose from "mongoose";

const orderItems = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      required: true,
      type: Number,
    },
    customer: {
      type: mongoose.Schema.types.ObjectId,
      ref: "Customer",
    },
    orderItems: {
      type: [orderItems],
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ["PENDING", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
);
export const Order = mongoose.model("Order", orderSchema);
