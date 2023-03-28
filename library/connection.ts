import { Db, MongoClient} from 'mongodb';
let client: MongoClient;
let db: Db;

async function connect(userMode: string) {
  let url: string;
  if ( userMode === 'dev' ) {
    url = 'mongodb+srv://ptoloudis12:2O6fyqkz4GNwauYk@cluster0.t16ctbg.mongodb.net/?retryWrites=true&w=majority';
  }
  else if ( userMode === 'Admin' ) {
    url = 'mongodb+srv://Admin:qJ1GgfBF2JX8andG@cluster0.t16ctbg.mongodb.net/?retryWrites=true&w=majority';
  }
  else if ( userMode === 'User' ) {
    url = 'mongodb+srv://User:YPvuPWbf8USitiad@cluster0.t16ctbg.mongodb.net/?retryWrites=true&w=majority';
  }
  else if ( userMode === 'Guest' ) {
    url = 'mongodb+srv://Guest:IuRRlpe6MwK9Qrs5@cluster0.t16ctbg.mongodb.net/?retryWrites=true&w=majority';
  }
  else {
    console.log('Error: No user mode selected');
    return null;
  }
  
  client = new MongoClient(url);
  await client.connect();
  db = client.db('ADB');
  console.log('Connected to MongoDB as ' + userMode + ' user');
  return db;
}

async function disconnect() {
  await client.close();
  console.log('Disconnected from MongoDB');
}

export { connect, disconnect, db };