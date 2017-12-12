# Node SSL/TLS

More on this [here](https://www.openssl.org/docs/manmaster/man1/req.html).

## Generate Private Key

```bash
$ openssl genrsa -des3 -out server.enc.key 1024
```

## Issue a Certificate Signing Request

```bash
$ openssl req -new -key server.enc.key -out server.csr

$ openssl rsa -in server.enc.key -out server.key

$ openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

- req: PKCS#10 certificate request and certificate generating utility
- x509: 