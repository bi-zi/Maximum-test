import mongoose from "mongoose";

const MONGODB_IRI =
	"mongodb://hrTest:hTy785JbnQ5@mongo0.maximum.expert:27423/hrTest?authSource=hrTest&replicaSet=ReplicaSet&readPreference=primary";

if (!MONGODB_IRI) {
	throw new Error("Invalid environment variable: MONGODB_IRI");
}

export const connectToMongoDB = async () => {
	try {
		// Если подключение уже существует и оно активно, просто возвращаем успешный промис
		if (mongoose.connection.readyState === 1) {
			return Promise.resolve(true);
		}

		// Если подключение не активно, попытаемся подключиться
		const { connection } = await mongoose.connect(MONGODB_IRI);

		if (connection.readyState === 1) {
			return Promise.resolve(true);
		}
	} catch (error) {
		return Promise.reject(error);
	}
};
