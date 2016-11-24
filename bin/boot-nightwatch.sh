#!/bin/bash

PORT=2000
TIME_TO_WAIT_FOR_PORT=60
RUN_NIGHTWATCH=0

if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
  echo "Nightwatchify: webpack server running"
else
  webpack-dev-server --port $PORT --quiet --no-info & APP_SERVER=$!
  sleep 1
  echo "Nightwatchify: Waiting for webpack to boot"

  end=$((SECONDS+$TIME_TO_WAIT_FOR_PORT))
  while [ $SECONDS -lt $end ]; do
    if (($SECONDS > $TIME_TO_WAIT_FOR_PORT-1)); then
      echo "Nightwatchify: server did not spin up in time. I am killing the process."
      kill -9 $APP_SERVER || true
      break;
    elif lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
      echo "Nightwatchify: I found a server running on port $PORT"
      RUN_NIGHTWATCH=1
      break;
    fi
    sleep 1
    echo "#"
  done
fi


if (($RUN_NIGHTWATCH==1)); then
  npm run nightwatch & NIGHTWATCH=$!
  wait $NIGHTWATCH
  kill -9 $APP_SERVER
fi
