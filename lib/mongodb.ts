import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    "Please add your Mongo URI to .env.local or set it in Vercel environment variables"
  );
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const options = {
  // 基本設定
  useNewUrlParser: true, // 新しいURLパーサーを使用する
  useUnifiedTopology: true, // 統一されたトポロジーを使用する

  // 接続設定
  serverSelectionTimeoutMS: 5000, // サーバー選択のタイムアウト (ミリ秒)

  // SSL/TLS設定
  tls: true, // TLS/SSL接続を使用する
  tlsInsecure: true, // サーバー証明書を検証しない（開発環境向け）
};

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
