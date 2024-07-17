const { MongoClient, ObjectId } = require("mongodb");

const uri =
  "mongodb+srv://kiyoharu1920:Z0puzdoLSjiwGgap@gakumascompare.kwgakd5.mongodb.net/"; // MongoDBのURIをここに追加
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jsonData = [
  {
    name: "第2回教室パーティ！",
    lessonSupport: "ビジュアル / 確率大",
    getCardName: "薄れゆく壁",
    getCardText:
      "元気+3\n次のターン、手札をすべてレッスン中強化\n2ターン後、手札をすべてレッスン中強化\nレッスン中1回 重複不可",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ビジュアル上昇+60",
    ability2: "ビジュアルSPレッスン発生率+21％",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ビジュアルレッスン終了時、ビジュアル上昇+6",
    ability5: "試験終了時、ビジュアル上昇+17（プロデュース中1回）",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "あなたにも作ってあげる！",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "得体のしれないモノ",
    getCardText:
      "【ビジュアルレッスン・ビジュアルターンのみ】ターン開始時、ビジュアルパラメータ上昇量増加50%(1ターン)\n(レッスン内3回)",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2:
      "ランダムな名前に「基本」を含むスキルカードを異なるスキルカードにチェンジ",
    ability1: "初期ビジュアル上昇+60",
    ability2: "初期Pポイント+40",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ビジュアルレッスン終了時、ビジュアル上昇+6",
    ability5: "休む選択時、ビジュアル上昇+22",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "あら、奇遇ね",
    lessonSupport: "ボーカルレッスン/確率大",
    getCardName: "スカウト巡り帽",
    getCardText:
      "【ボーカルレッスン・ボーカルターンのみ】ターン開始時、スキルカードを引く\n固定元気+2\n(レッスン内3回)",
    supportEvent1: "ボーカル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ボーカル上昇+60",
    ability2: "初期Pポイント+40",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ボーカルレッスン終了時、ボーカル上昇+6",
    ability5: "授業終了時、ボーカル上昇+7",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "ほら、一緒に持と♪",
    lessonSupport: "ダンスレッスン/確率大",
    getCardName: "夢にあふれた大荷物",
    getCardText:
      "【ダンスレッスン・ダンスターンのみ】ターン開始時、スキルカード使用数追加+1\n(レッスン内1回)",
    supportEvent1: "ダンス上昇+20",
    supportEvent2:
      "ランダムな名前に「基本」を含むスキルカードを異なるスキルカードにチェンジ",
    ability1: "ダンスレッスンボーナス+8.5%",
    ability2: "初期Pポイント+40",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ダンスレッスン終了時、ダンス上昇+6",
    ability5: "アクティブスキルカード獲得時、ダンス上昇+3",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "お姉ちゃんに任せなさい！",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "満開ペアヘアピン",
    getCardText:
      "【ビジュアルレッスン・ビジュアルターンのみ】アクティブスキルカード使用時、体力回復2\n(レッスン内3回)",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ビジュアルレッスンボーナス+8.5%",
    ability2: "ビジュアルSPレッスン終了時、Pポイント獲得量増加+45%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ビジュアルSPレッスン終了時、ビジュアル上昇+17",
    ability5: "スキルカード強化時、ビジュアル上昇+4",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "次の桜の季節には。",
    lessonSupport: "ボーカルレッスン/確率大",
    getCardName: "花萌ゆ季節",
    getCardText:
      "ランダムな強化済みスキルカードを、手札に生成\nスキルカード使用数追加+1\n次のターン、スキルカードを引く\nレッスン中1回 重複不可",
    supportEvent1: "ボーカル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ボーカルレッスンボーナス+8.5%",
    ability2: "初期Pポイント+40",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ボーカルレッスン終了時、ボーカル上昇+6",
    ability5: "スキルカード強化時、ボーカル上昇+4",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "まるで王子様みたいな",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "星のリトルプリンス",
    getCardText:
      "【ビジュアルレッスン・ビジュアルターンのみ】ターン開始時、固定元気+2",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ビジュアル+60",
    ability2: "ビジュアルSPレッスン発生率+28%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ビジュアルSPレッスン終了時、ビジュアル上昇+17",
    ability5: "メンタルスキルカード獲得時、ビジュアル上昇+3",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "可愛いと可愛いで可愛い！",
    lessonSupport: "ボーカルレッスン/確率大",
    getCardName: "ティーパーティ",
    getCardText:
      "スキルカード使用数追加+1\n手札をすべてレッスン中強化\nレッスン中1回 重複不可",
    supportEvent1: "ボーカル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ボーカル上昇+60",
    ability2: "ボーカルSPレッスン発生率+28%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ボーカルSPレッスン終了時、ボーカル上昇+17",
    ability5: "アクティブスキルカード獲得時、ボーカル上昇+3",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "おいしい顔、いただき〜！",
    lessonSupport: "ダンスレッスン/確率大",
    getCardName: "心のアルバム",
    getCardText:
      "パラメータ+3 元気+3\n次のターン、スキルカードを引く\n2ターン後、スキルカードを引く\nレッスン中1回 重複不可",
    supportEvent1: "ダンス上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ダンス上昇+60",
    ability2: "ダンスSPレッスン発生率+28%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ダンスSPレッスン終了時、ダンス上昇+17",
    ability5: "スキルカード強化時、ダンス上昇+4",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "まじか。",
    lessonSupport: "ダンスレッスン/確率大",
    getCardName: "光のステージ",
    getCardText:
      "消費体力削減1\nスキルカード使用数追加+1\nレッスン中1回 重複不可",
    supportEvent1: "ダンス上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ダンス上昇+60",
    ability2: "ダンスSPレッスン終了時、Pポイント獲得量増加+45%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ダンスレッスン終了時、ダンス上昇+6",
    ability5: "相談選択時、ダンス上昇+11",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "お疲れ様、千奈ちゃん。",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "陽だまりの生徒会室",
    getCardText: "体力回復3\nスキルカード使用数追加+1\nレッスン中1回 重複不可",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ビジュアルレッスンボーナス+8.5%",
    ability2: "初期Pポイント+40",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ビジュアルレッスン終了時、ビジュアル上昇+6",
    ability5: "アクティブスキルカード獲得時、ビジュアル上昇+3",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "ぐぬぬぬぬ…………！",
    lessonSupport: "ダンスレッスン/確率大",
    getCardName: "悔しさの象徴",
    getCardText:
      "【ダンスレッスン・ダンスターンのみ】ターン開始時、パラメータ上昇量増加50%(1ターン)\n(レッスン内3回)",
    supportEvent1: "ダンス上昇+20",
    supportEvent2:
      "ランダムな名前に「基本」を含むスキルカードを異なるスキルカードにチェンジ",
    ability1: "ダンスレッスンボーナス+8.5%",
    ability2: "ダンスSPレッスン終了時、体力回復7",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "活動支給選択時、ダンス上昇+11",
    ability5: "メンタルスキルカード獲得時、ダンス上昇+3",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "また、あんなに無理をして",
    lessonSupport: "ボーカルレッスン/確率大",
    getCardName: "曇りをぬぐったタオル",
    getCardText:
      "【ボーカルレッスン・ボーカルターンのみ】アクティブスキルカード使用時、体力回復2\n(レッスン内3回)",
    supportEvent1: "ボーカル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ボーカルレッスンボーナス+8.5%",
    ability2: "ボーカルSPレッスン終了時、体力回復7",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "お出かけ終了時、ボーカル上昇+11",
    ability5: "メンタルスキルカード獲得時、ボーカル上昇+3",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "私の目に狂いはない",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "仲直りのきっかけ",
    getCardText:
      "【ビジュアルレッスン・ビジュアルターンのみ】スキルカード使用数追加+1\n(レッスン内1回)",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2:
      "ランダムな名前に「基本」を含むスキルカードを異なるスキルカードにチェンジ",
    ability1: "ビジュアルレッスンボーナス+8.5%",
    ability2: "ビジュアルSPレッスン終了時、体力回復7",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "授業終了時、ビジュアル上昇+7",
    ability5: "スキルカード強化時、ビジュアル上昇+4",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "きみは、自慢の生徒です",
    lessonSupport: "すべてのレッスン/確率中",
    getCardName: "信頼の証",
    getCardText: "お出かけ終了時、体力回復9",
    supportEvent1: "体力回復7",
    supportEvent2: "スキルカードを選択して強化",
    ability1: "最大体力上昇+9",
    ability2: "ボーカル、ダンス、ビジュアルすべてのSPレッスン発生率+14%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "SPレッスン終了時、体力回復4",
    ability5: "試験終了時、体力回復8(プロデュース中1回)",
    ability6: "このサポートカードのイベントによる体力回復量を100%増加",
  },
  {
    name: "こいつらめんどくさー",
    lessonSupport: "ボーカルレッスン/確率大",
    getCardName: "喧嘩するほど仲がいい",
    getCardText:
      "集中+3好調2ターン次のターン、手札をすべてレッスン中強化レッスン中1回 重複不可",
    supportEvent1: "ボーカル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ボーカルレッスンボーナス+8.5%",
    ability2: "ボーカルSPレッスン終了時、Pポイント獲得量増加+33%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ボーカルSPレッスン終了時、ボーカル上昇+13",
    ability5: "メンタルスキルカード強化時、ボーカル上昇+7",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "わたしたち、やればできる",
    lessonSupport: "ダンスレッスン/確率大",
    getCardName: "ダメダメクッキング",
    getCardText:
      "好印象+4やる気+3次のターン、手札をすべてレッスン中強化レッスン中1回 重複不可",
    supportEvent1: "ダンス上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ダンスレッスンボーナス+8.5%",
    ability2: "ダンスSPレッスン終了時、Pポイント獲得量増加+33%",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ダンスSPレッスン終了時、ダンス上昇+13",
    ability5: "メンタルスキルカード強化時、ダンス上昇+7",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "仕事のつもりで臨みなさい",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "新生徒会爆誕！",
    getCardText:
      "レッスン開始時手札に入る消費体力減少2ターンスキルカード使用数追加+1レッスン中1回 重複不可",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2: "ランダムなトラブルカードを削除",
    ability1: "初期ビジュアル上昇+60",
    ability2: "初期Pポイント+30",
    ability3: "このサポートカードのレッスンサポート発生率を100%増加",
    ability4: "ビジュアルレッスン終了時、ビジュアル上昇+4",
    ability5: "メンタルスキルカード獲得時、ビジュアル上昇+2",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "何やってるんだろう、",
    lessonSupport: "ボーカルレッスン/確率大",
    getCardName: "天川ラーメン巡り",
    getCardText:
      "【ボーカルレッスン・ボーカルターンのみ】ターン開始時、スキルカード使用数追加+1（レッスン内1回）",
    supportEvent1: "ボーカル上昇+20",
    supportEvent2:
      "ランダムな名前に「基本」を含むスキルカードを異なるスキルカードにチェンジ",
    ability1: "初期ボーカル上昇+60",
    ability2: "ボーカルSPレッスン発生率+28%",
    ability3: "このサポートカードのレッスンサポート発生を100%増加",
    ability4: "ボーカルレッスン終了時、ボーカル上昇+6",
    ability5: "スキルカード強化時、ボーカル上昇+4",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "第2回教室パーティー！",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "薄れゆく壁",
    getCardText:
      "元気+3次のターン、手札をすべてレッスン中強化2ターン後、手札をすべてレッスン中強化レッスン中1回 重複不可",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ビジュアル上昇+60",
    ability2: "ビジュアルSPレッスン発生率+21%",
    ability3: "このサポートカードのレッスンサポート発生を100%増加",
    ability4: "ビジュアルレッスン終了時、ビジュアル上昇+4",
    ability5: "試験終了時、ビジュアル上昇+17（プロデュース中1回）",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "まだ上がりませんように！",
    lessonSupport: "ボーカルレッスン/確率大",
    getCardName: "みずたまりスキップ",
    getCardText:
      "体力消費1元気+3スキルカード使用数追加+1レッスン中1回 重複不可",
    supportEvent1: "ボーカル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ボーカルレッスンボーナス+8.5%",
    ability2: "初期Pポイント+40",
    ability3: "このサポートカードのレッスンサポート発生を100%増加",
    ability4: "ボーカルSPレッスン終了時、ボーカル上昇+17",
    ability5: "メンタルスキルカード強化時、ボーカル上昇+9",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "晴れたね",
    lessonSupport: "ダンスレッスン/確率大",
    getCardName: "虹かけるクロス",
    getCardText:
      "【ダンスレッスン・ダンスターンのみ】アクティブスキルカード使用時、体力回復2（レッスン内3回）",
    supportEvent1: "ダンス上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "ダンスレッスンボーナス+8.5%",
    ability2: "ダンスSPレッスン終了時、体力回復7",
    ability3: "このサポートカードのレッスンサポート発生を100%増加",
    ability4: "休む選択時、ダンス上昇+22",
    ability5: "お出かけ終了時、ダンス上昇+11",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "「ア」じゃなくて「エ」！",
    lessonSupport: "ビジュアルレッスン/確率大",
    getCardName: "お泊り猛勉強",
    getCardText: "体力消費1好印象+5レッスン中1回重複不可",
    supportEvent1: "ビジュアル上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ビジュアル上昇+60",
    ability2: "ビジュアルSPレッスン発生率+28%",
    ability3: "このサポートカードのレッスンサポート発生を100%増加",
    ability4: "ビジュアルレッスン終了時、ビジュアル上昇+6",
    ability5: "メンタルスキルカード獲得時、ビジュアル上昇+3",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
  {
    name: "もうっ！冷たいよ！",
    lessonSupport: "ダンスレッスン/確率大",
    getCardName: "負けず嫌いの動章",
    getCardText:
      "【ダンスレッスン・ダンスターンのみ】ターン開始時、やる気の50%分パラメータ上昇",
    supportEvent1: "ダンス上昇+20",
    supportEvent2: "ランダムなスキルカードを強化",
    ability1: "初期ダンス上昇+60",
    ability2: "ダンスSPレッスン発生率+28%",
    ability3: "このサポートカードのレッスンサポート発生を100%増加",
    ability4: "ダンスSPレッスン終了時、ダンス上昇+17",
    ability5: "試験終了時、ダンス上昇+22（プロデュース中1回）",
    ability6: "このサポートカードのイベントによるパラメータ上昇を100%増加",
  },
];

async function run() {
  try {
    await client.connect();
    const database = client.db("gakumasDB"); // データベース名をここに追加
    const collection = database.collection("supportCards"); // コレクション名をここに追加

    // コレクション内のすべてのドキュメントを削除
    await collection.deleteMany({});

    // JSONデータに一意の_idを追加
    const dataWithId = jsonData.map((doc) => {
      return { _id: new ObjectId(), ...doc };
    });

    // データをMongoDBに挿入
    const result = await collection.insertMany(dataWithId);
    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedIds}`
    );
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
