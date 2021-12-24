# How to set up this site locally

These instructions show how to utilize the [docker-compose.yaml](https://github.com/mayormaier/andrewmaier.dev/blob/main/docker-compose.yml) file in on a local docker instance to acheive a locally hosted version of the site.

**NOTE: You can replace all of the static files in the `./src` directory to serve whatever static website you want! There are also some domain and use specific identifiers in the `docker-compose.yaml` and the `andrewmaier.dev.conf` files. These should be modified in order to utilize your own domain**

0. Ensure that the `docker-compose.yml` and nginx configurations are correct for your specific use case.
1. Make folder 'dhparam' at project root. `mkdir dhparam`
2. Generate SSL Private Key to be used as the base for the certificate. `openssl dhparam -out /insert-working-dir-path/dhparam/dhparam-2048.pem 2048`
3. Run the docker compose stack. This will start the certbot container and generate the ssl certificate. `docker-compose up -d`
4. In a few momentts, the certbot container should have exited successfully.
5. Now, return to the nginx configuration file and uncomment all of the lines regarding redirection and the https server block.
6. Test the URL of the website to confirm that it successfully hosts the file.
