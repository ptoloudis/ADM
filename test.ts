import { connect, disconnect, db } from './library/connection'
import * as querys from './library/insert'

async function main() {
  await connect('Guest'); 
  console.log(await querys.insert_one(db, 'Drugs', {drugName: 'test', condition: '1'}));
  console.log("Done");
  await disconnect();
}

main().catch(console.error);