# andrewmaier.dev

## Hosting via AWS

This was quite a *fun* project to undertake. Up to this point we have utilized CloudFormation to build our infrastructure which consists of the following:

- s3 bucket (for hosting the site)
- SSL certificate (used to provide HTTPS traffic)
- CloudFront (acheives CDN caching in the US and Europe as well as providing HTTPS)

This is a good start, but there is still more to come. Some errors still persist, but they will be fixed in the coming weeks. Here are some of them:

- No "default" index document can be explicitly defined for subdirectories
  - [StackOverflow Article](https://stackoverflow.com/questions/31017105/how-do-you-set-a-default-root-object-for-subdirectories-for-a-statically-hosted)
  - [AWS Docs: Lambda at Edge](https://aws.amazon.com/blogs/compute/implementing-default-directory-indexes-in-amazon-s3-backed-amazon-cloudfront-origins-using-lambdaedge/)
- No logging has been implemented yet for the site
- Somehow Google Domains sucks and doesnt let me add a CNAME alias for the root domain to point to cloudfront [Medium Article](https://medium.com/@sambecker/getting-cloudflare-cloudfront-s3-to-cooperate-over-strict-ssl-f70090ebdec)
- Making seperate certifiacates for dev and prod sites

[Reference 1 - AWS GitHub](https://github.com/aws-samples/amazon-cloudfront-secure-static-site/blob/master/templates/cloudfront-site.yaml)
[Reference 2 - Medium](https://medium.com/swlh/aws-website-hosting-with-cloudformation-guide-36cac151d1af)
[Reference 3 - More GitHub](https://github.com/Al-un/beerworld/tree/develop/aws/cloudformation-static-website)

## Hosting via Docker and nginx

This configuration leverages docker and nginx to host the site in a portible manner. The site achieves many of the same goals as the AWS hosted site, although becuase we are serving a static site (as opposed to dynamic) it makes more sense to host the site in s3 vs in ECS. Thus, this solition allows a *multicloud* approach to solve my web hosting woes.

- Docker (provides a containerized environment to run the web server *anywhere*)
- nginx (hahaha no log4j for meeeee) (ok jokes aside, nginx is quite powerful, thus it has been a joy to learn)
- LetsEncrypt (we utilize CertBot to provide an SSL certificate enabling HTTPS on our site)

### General TODO

- [Configure robots.txt](https://developers.google.com/search/docs/advanced/robots/create-robots-txt)
- [Add GitHub Workflow to auto deploy new changes to s3 on new release](https://dev.to/johnkevinlosito/deploy-static-website-to-s3-using-github-actions-4a0e) - I may just write my own action
- Separate CD workflow for prod and dev
