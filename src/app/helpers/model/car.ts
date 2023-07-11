import { Schema, model, models } from "mongoose";

const schema = new Schema({
	email: {
		type: String,
	},

	model: {
		type: String,
	},

	engine: {
		power: {
			type: Number,
		},
		volume: {
			type: Number,
		},
		transmission: {
			type: String,
		},
		fuel: {
			type: String,
		},
	},

	drive: {
		type: String,
	},

	equipmentName: {
		type: String,
	},

	price: {
		type: Number,
	},

	createdAt: { type: Date },
});

const stock = models.stock || model("stock", schema);
export default stock;
