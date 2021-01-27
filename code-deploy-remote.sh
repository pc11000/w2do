#!/bin/bash
#ssh into server
#sshpass -p "${{ secrets.DEV_DEPLOY_PASS }}" ssh -t -t  -oStrictHostKeyChecking=no ${{ secrets.DEV_DEPLOY_USER }}@${{ secrets.DEV_DEPLOY_IP }} -p ${{ secrets.DEV_DEPLOY_PORT }} << EOF
#cd into the code directory and pull the latest changes
cd /home/
git pull
#re-build the changes and make up via docker-compose
docker-compose build
docker-compose up -d
