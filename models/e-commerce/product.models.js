import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    category: {
      type: mongoose.Schema.types.ObjectId,
      ref: "Category",
    },
    productImage: {
      type: String,
    },
    price: {
      type: Boolean,
      default: 0,
    },
    stock: {
      type: Boolean,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.types.ObjectId,
      ref: "Customer",
    },
  },
  {
    timestamps: true,
  }
);
export const Product = mongoose.model("Product", productSchema);
