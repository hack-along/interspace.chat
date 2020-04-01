# Interspace.chat

A simple selector for predefined, self-hosted JitSi rooms. The idea is to give the community a virtual meeting space that is easy and fun to use. Live at https://interspace.chat

- based on create-react-app
- injects JitSi API

#### Self-hosting

If you wish to self-host the project, the process is fairly straight forward. Feel free to tweak and adjust
the following to your needs, but here an example for a successful setup.

##### Requirements

* VPS or server running JitSi
* A domain name
* A Netlify account
* A GitHub account

The recommended aka tested way uses a server running Ubuntu 16.04, there is a pretty high chance the hosting
provider of your choice will offer a box with that pre-installed. Once set up, ssh into that server and follow
the [JitSi quick install instructions](https://github.com/jitsi/jitsi-meet/blob/master/doc/quick-install.md).

If you don't have a Netlify account already, get yourself one by simply [signing
up](https://www.netlify.com/). Connect your GitHub and Netlify and you're good to go to start a deploy. For
some example of easy instructions to achieve that you can for instance follow [this
blog post](https://sung.codes/blog/2017/12/09/deploying-existing-create-react-app-github-netlify/). It is that
simple. Congrats, you will now have yourself the app running under a netlify subdomain. Yet, you won't be able
to use it with JitSi, because the server running JitSi and the app still ive in separate realms.

Now off to the slightly niftier part. Let's say you got yourself a url called example.com on which you want to run the whole shebang. 
In your DNS setting you essentially need to make two (and a half) changes that will allow for the JitSi server and the
React app to get together. 

1. Point the default A name record to the Netlify load balancer which has a static IP address 104.198.14.52.
   This means in the A record leave *hostname* empty or put an @ symbol. For the target you put the IP address
   of the load balancer.
2. Point a subdomain of example.com of your choice, e.g. portal.example.com, to the IP address of your server
   running JitSi. That means *hostname* here is portal.example.com and target is for example 101.101.10.10. 
3. In the Netlify settings of the app, navigate to *Settings > domain management* and add example.com to the
   *Custom domains* section. Netlify should also sort you out with a TLS certificate. 

Hooray! That should be it. You might have to wait a little bit for the routing changes for the DNS
to propagate. You can often influence that by changing the TTL values in the DNS records to whatever minimum
your provider offers. 


