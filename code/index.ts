import { Command } from 'commander';
import * as inquirer from 'inquirer';
import {connect, disconnect, db} from './library/connection.js';
import * as querys from './library/querys.js';
import * as insert from './library/insert.js';
import * as update from './library/update.js';
import * as remove from './library/remove.js';
import {questionsdrug, questionsprotein, questionsproteinsequence} from './library/questions.js';

const program = new Command();
program
  .command('DrugAlternative')
  .description('Find the condition of a drug and return the names of the drugs that have the same condition')
  .option('-u, --User <User>')
  .option('-n, --Name <Name of drug>')
  .option('-s, --Size <Size of the list>', 'Size of the list', '10')
  .action(async (cmd) => {
    await connect(cmd.User);
    let data = await querys.NameCondition(db, cmd.Name);
    console.log("Condition: " + data[0]);
    data = await querys.ConditionNamesPrt(db, data[0], Number(cmd.Size));
    await disconnect();
  });

program
  .command('Protein')
  .description('Print the protein information of a protein')
  .option('-u, --User <User>')
  .option('-n, --Name <Name of Protein>')
  .action(async (cmd) => {
    await connect(cmd.User);
    let data = await querys.pdbName(db, cmd.Name);
    console.log("The protein: ");
    data.forEach(element => {
      console.log(element);
    });
    await disconnect();
  })

program
  .command('Ph_Values')
  .description('Get the ph and print the names of the proteins with that ph value')
  .option('-u, --User <User>')
  .option('-v, --Value <Ph Value>')
  .option('-s, --Size <Size of the list>', 'Size of the list', '10')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The names of the proteins with a ph value of " + cmd.Value + " are: ");
    await querys.ph_namesPrt(db, Number(cmd.Value), Number(cmd.Size)) ;
    await disconnect();
  })

program
  .command('Ph_Width')
  .description('Get the ph, width and print the names of the proteins with that ph value')
  .option('-u, --User <User>')
  .option('-v, --Value <Ph Value>')
  .option('-w, --Width <Width>')
  .option('-s, --Size <Size of the list>', 'Size of the list', '10')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The names of the proteins with a ph value of " + cmd.Value + " with the width of " + cmd.Width + " are:");
    await querys. ph_widthPrt(db, Number(cmd.Value), Number(cmd.Width), 10) ;
    await disconnect();
  })

program
  .command('Class_Name')
  .description('Get the class name and print the names of the proteins with that class name. If the class name is DNA-RNA HYBRID, press "DNA-RNA HYBRID"')
  .option('-u, --User <User>')
  .option('-n, --Name <Class Name>')
  .option('-s, --Size <Size of the list>', 'Size of the list', '10')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The names of the proteins with the class name of " + cmd.Name + " are:");
    await querys.classfNamesPrt(db, cmd.Name, Number(cmd.Size)) ;
    await disconnect();
  })


program
  .command('Sequence')
  .description('Get the name and print the sequence of the proteins')
  .option('-u, --User <User>')
  .option('-n, --Name <Name of Protein>')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The sequence of the protein " + cmd.Name + " is:");
    let data = await querys.Seqid(db, cmd.Name) ;
    data.forEach(element => {
      console.log(element);
    });
    await disconnect();
  })

program
  .command('SequenceId')
  .description('Get the sequence and print the name of the proteins')
  .option('-u, --User <User>')
  .option('-s, --Sequence <Sequence>')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The name of the protein with the sequence " + cmd.Sequence + " is:");
    let data = await querys.seq_id(db, cmd.Sequence) ;
    data.forEach(element => {
      console.log(element);
    });
    await disconnect();
  })

program
  .command('ProteinAll')
  .description('Get the name and print all the information and swquence  of the proteins')
  .option('-u, --User <User>')
  .option('-n, --Name <Name of Protein>')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The information of the protein " + cmd.Name + " is:");
    let data = await querys.joinProtein(db, cmd.Name);
    data[0].forEach(element => {
      console.log(element);
    });
    data[1].forEach(element => {
      console.log(element);
    });
    await disconnect();
  })

program
  .command('Condition')
  .description('Print all Contradictions of a drug')
  .option('-u, --User <User>')
  .option('-s, --Size <Size of the list>', 'Size of the list', '10')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The contradictions of the drug are:");
    await querys.ConditionNamesAllPrt(db,cmd.Size);
    await disconnect();
  })

program
  .command('insert')
  .description('Insert a new')
  .option('-u, --User <User>')
  .option('-n, --Name <Name of Database>')
  .action(async (cmd) => {
    
    console.log("The name of the database is: " + cmd.Name);
    if (cmd.Name == "Drug") {
      await inquirer.prompt(questionsdrug).then(async (answers: any) => {
        await connect(cmd.User);
        let rst = await insert.insert_one(db, "Drugs", answers);
        if (rst >= 0)
          console.log("The drug was inserted correctly");
        else
          console.log("Check the Error");
        await disconnect();
      });
    }
    else if (cmd.Name == "Protein") {
      await inquirer.prompt(questionsprotein).then(async (answers: any) => {
        await connect(cmd.User);
        let rst = await insert.insert_one(db, "pdb_no_dups", answers);
        if (rst >= 0)
          console.log("The drug was inserted correctly");
        else
          console.log("Check the Error");
        await disconnect();
      });
    }
    else if (cmd.Name == "Protein_Sequence") {
      await inquirer.prompt(questionsproteinsequence).then(async (answers: any) => {
        await connect(cmd.User);
        let rst = await insert.insert_one(db, "Protein_Sequence", answers);
        if (rst >= 0)
          console.log("The drug was inserted correctly");
        else
          console.log("Check the Error");
        await disconnect();
      });
    }
    else
      console.log("The name of the database is not correct");
  });

program
  .command('remove')
  .description('Remove from a database')
  .option('-u, --User <User>')
  .option('-n, --Name <Name of Database>')
  .option('-i, --Id <Id of the drug>')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The name of the database is: " + cmd.Name);
    if (cmd.Name == "Drug") {
      let rst = await remove.remove_id(db, "Drugs", cmd.Id);
      if (rst == 0)
          console.log("The drug was remove correctly");
        else
          console.log("Check the Error"); 
    }
    else if (cmd.Name == "Protein") {
      let rst = await remove.remove_id(db, "pdb_no_dups", cmd.Id);
      if (rst == 0)
          console.log("The drug was remove correctly");
        else
          console.log("Check the Error");
    }
    else if (cmd.Name == "Protein_Sequence") {
      let rst = await remove.remove_id(db, "Protein_Sequence", cmd.Id);
      if (rst == 0)
          console.log("The drug was remove correctly");
        else
          console.log("Check the Error");
    }
    else
      console.log("The name of the database is not correct");
  });

program
  .command('update')
  .description('Update from a database')
  .option('-u, --User <User>')
  .option('-n, --Name <Name of Database>')
  .option('-i, --Id <Id of the drug>')
  .action(async (cmd) => {
    await connect(cmd.User);
    console.log("The name of the database is: " + cmd.Name);
    if (cmd.Name == "Drug") {
      await inquirer.prompt(questionsdrug).then(async (answers: any) => {
        let rst = await update.update_one(db, "Drugs", {'_id': cmd.Id}, answers);
        if (rst >= 0)
          console.log("The drug was update correctly");
        else
          console.log("Check the Error");
      });
    }
    else if (cmd.Name == "Protein") {
      await inquirer.prompt(questionsprotein).then(async (answers: any) => {
        let rst = await update.update_one(db, "pdb_no_dups", {'_id': cmd.Id}, answers);
        if (rst >= 0)
          console.log("The drug was update correctly");
        else
          console.log("Check the Error");
      });
    }
    else if (cmd.Name == "Protein_Sequence") {
      await inquirer.prompt(questionsproteinsequence).then(async (answers: any) => {
        let rst = await update.update_one(db, "Protein_Sequence", {'_id': cmd.Id}, answers);
        if (rst >= 0)
          console.log("The drug was update correctly");
        else
          console.log("Check the Error");
      });
    }
    else
      console.log("The name of the database is not correct");
  });

program.parse(process.argv);