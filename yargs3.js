const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const fileName = 'tasks.json';

yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Add a task',
    builder: {
      title: { describe: 'Task title', demandOption: true, type: 'string' }
    },
    handler: (argv) => {
     let tasks = fs.existsSync(fileName) ? JSON.parse(fs.readFileSync(fileName, 'utf8') || '[]') : [];

      tasks.push({ title: argv.title });
      fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2), 'utf8');

      console.log(`Task added: "${argv.title}"`);
    }
  })
  .command({
    command: 'read',
    describe: 'Read all tasks',
    handler: () => {
      let tasks = fs.existsSync(fileName) ? JSON.parse(fs.readFileSync(fileName, 'utf8') || '[]') : [];
      console.log('Tasks:');
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.title}`);
      });
    }
  })
  .command({
  command: 'remove',
  describe: 'Remove a task by title',
  builder: {
    title: { describe: 'Task title to remove', demandOption: true, type: 'string' }
  },
  handler: (argv) => {
    let tasks = fs.existsSync(fileName) ? JSON.parse(fs.readFileSync(fileName, 'utf8') || '[]') : [];

    tasks = tasks.filter(task => task.title !== argv.title);

    fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2), 'utf8');

    console.log(`Task removed: "${argv.title}"`);
  }
})

  .parse();
