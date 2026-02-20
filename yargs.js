const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv)).command({
    command: 'greet',
    describe: 'Greeting a user',
    builder: {
      name: {
        describe: 'Name of the user',
        demandOption: true,
        type: 'string'
      },
      city: {
        describe: 'City of the user',
        demandOption: false,
        type: 'string'
      },
    },
    handler: (argv) => {
      const city = argv.city || 'Unknown';
      console.log(`Hello, ${argv.name} from ${city}!`);
    }
  })
  .command({
    command: 'farewell',
    describe: 'Goodbye a user',
    builder: {
      name: {
        describe: 'Name of the user',
        demandOption: true,
        type: 'string'
      }
    },
     handler: (argv) => {
      console.log(`Goodbye, ${argv.name}`);
    }
  })
  .parse();


  