#!/bin/bash
mongodump --forceTableScan --port=27018
#mongorestore --port=27018 ./dump
#mongorestore --port=27018 --gzip --archive=./archive.gz
