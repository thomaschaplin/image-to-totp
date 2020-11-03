#!/bin/bash

# Allows us to read user input below, assigns stdin to keyboard
exec </dev/tty

source .prepush.config 2>/dev/null

if [[ $merge_main_branch == "true" ]]; then
  while true; do
    read -p "[pre-push hook] Would you like to merge the latest version of the \"$main_branch\" branch into your branch? [y/N]" REPLY
    if [[ $REPLY =~ ^[Yy] ]]; then
      git fetch origin $main_branch; git merge origin/$main_branch; break
    else
      break
    fi
  done
fi

if [[ $run_tests == "true" ]]; then
  while true; do
    read -p "[pre-push hook] Would you like to run the tests before pushing? [y/N]" REPLY
    if [[ $REPLY =~ ^[Yy] ]]; then
      npm test; break
    else
      break
    fi
  done
fi
