import { MongoClient } from "mongodb";

// 環境変数からMongoDBのURIを取得
const uri: string = process.env.MONGODB_URI || "";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // タイムアウトを5秒に設定
};

// URIが設定されていない場合はエラーを投げる
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// 本番環境では、新しいクライアントインスタンスを作成します
client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
