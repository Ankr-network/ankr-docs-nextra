#!/bin/bash

echo "Stop yarn server"
ps ax|grep yarn|awk '{print $1}'|xargs kill
echo "Running server in the background"
yarn next &&
echo "NextJS server started."
