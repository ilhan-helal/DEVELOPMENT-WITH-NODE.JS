const fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv)).command({
    command: 'read',
    describe: 'Read file',
    builder: {
      file: {
        describe: 'File to read',
        demandOption: true,
        type: 'string'
      }},
    handler: (argv) => {
        const data = fs.readFileSync(argv.file, 'utf8');
        console.log(data);
    }})
    .command({
    command: 'write',
    describe: 'Write to a file',
    builder: {
      file: {
        describe: 'File name to write',
        demandOption: true,
        type: 'string'
      },
      content: {
        describe: 'Content to write',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      fs.writeFileSync(argv.file, argv.content, 'utf8');
      console.log(`${argv.file}`);
    }
    })
    .parse();
