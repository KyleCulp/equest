FROM postgres:11

COPY server.key /var/lib/postgresql/server.key
COPY rootCA.crt /var/lib/postgresql/rootCA.crt
COPY server.crt /var/lib/postgresql/server.crt
COPY postgresql.conf /var/lib/postgresql/postgresql.conf

RUN chown postgres /var/lib/postgresql/server.key && chmod 600 /var/lib/postgresql/server.key
RUN chown postgres /var/lib/postgresql/postgresql.conf && chmod 600 /var/lib/postgresql/postgresql.conf
