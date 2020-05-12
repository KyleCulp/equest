https://github.com/docker-library/docs/blob/master/postgres/README.md

docker run -i --rm equest-postgres:11 cat /usr/share/postgresql/postgresql.conf.sample > my-postgres.conf

docker run -d --name some-postgres -v "\$PWD/my-postgres.conf":/etc/postgresql/postgresql.conf -e POSTGRES_PASSWORD=mysecretpassword postgres -c 'config_file=/etc/postgresql/postgresql.conf'
