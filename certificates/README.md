## Creating a Self-Signed Certificate

You can also reference [instructions by Amazon on creating a self-signed
certificate](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/testing-an-alexa-skill#create-a-private-key-and-self-signed-certificate-for-testing),
which is what this README is based on.

1. First, open up terminal on your linux machine and make sure that
**openssl** is installed.

2. Create a private key.
```bash
openssl genrsa -out private-key.pem 2048
```

3. Create a configuration file and provide custom values for the fields
marked with *TODO*
```
[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
prompt = no

[req_distinguished_name]
C = US
ST = TODO Provide your two letter state abbreviation
L = TODO Provide the name of the city in which you are located
O = TODO Provide a name for your organization
CN = TODO Provide a name for the skill

[v3_req]
keyUsage = keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @subject_alternate_names

[subject_alternate_names]
DNS.1 = TODO Provide your fully qualified domain name
```

* For some reason, I had to make sure that CN and DNS.1 matched in order for
the certificate to work. If you're certificate doesn't work, maybe make the CN
and DNS.1 fields the same regardless of the name of your skill.

* Also, apparently other people had this
[issue](https://github.com/sushilks/alexaHarmonyApp/issues/7) too and had a
better solution than what I used.

4. Create a certificate.
```bash
openssl req -new -x509 -days 365 \
            -key private-key.pem \
            -config configuration.cnf \
            -out certificate.pem
```

5. Open the certificate and copy it into the Configuration Portal of your Alexa
skill and click **Save**.

![ssl certificate](https://github.com/hanstxu/alexa_endpoint_cpp/blob/master/screenshots/ssl_certificate.png)