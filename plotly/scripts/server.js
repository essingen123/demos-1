#!/usr/bin/env node

var args = process.argv.slice(2)
args = args.concat(['--host', 'localhost', '--live', '--open']);
require('../node_modules/budo').cli(args)
