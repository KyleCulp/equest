#!/bin/bash

# https://github.com/nicferrier/nodejs-self-signed-cert-server-and-client/blob/master/certsetup

# rm -f cert.pem 
# The domain here cannot be localhost
openssl req -x509 -new -nodes -key rootCA.key -days 365 -out cacert.pem -subj "/CN=postgres"
# openssl genrsa -out my.key 2048
# openssl req -new -key my.key -out csr -subj "/CN=postgres"
# openssl x509 -req -in csr -CA cacert.pem -CAkey ca.key -days 365 -out cert.pem

# End