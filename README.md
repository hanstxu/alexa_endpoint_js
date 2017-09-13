# alexa_endpoint_js

Starter code for making a Node.js web server that hosts an Amazon Alexa custom
skill.

Extension from
[alexa_endpoint_cpp](https://github.com/hanstxu/alexa_endpoint_cpp). If you
have no experience creating an Alexa skill, you should first follow read the
following sections from my C++ version of the project:

&nbsp;&nbsp;[Registering an Alexa Skill with an Amazon Developer Account](https://github.com/hanstxu/alexa_endpoint_cpp#registering-an-alexa-skill-with-an-amazon-developer-account)

&nbsp;&nbsp;[Test your Alexa Skill](https://github.com/hanstxu/alexa_endpoint_cpp#test-your-alexa-skill)

&nbsp;&nbsp;[Understanding the Alexa Skill Flow](https://github.com/hanstxu/alexa_endpoint_cpp#understanding-the-alexa-skill-flow)

### Running the Web Server

1. Make sure that whichever linux machine that you're going to use to run the
web server is publicly accessible on the internet (whether through port
forwarding or through an IaaS). In my example, I used a **t2.micro** [AWS EC2
instance](https://aws.amazon.com/ec2/) and configured the **security group**
so that my instance would accept **inbound** connections on **port 443**.

2. Open up a **terminal** session and make sure that **git** is installed.
Otherwise, you can install it with the following command.
```bash
apt-get install git
```

3. Clone the repository.
```bash
git clone https://github.com/hanstxu/alexa_endpoint_js.git
```

4. Install the dependencies.
```bash
cd alexa_endpoint_js
npm install
```

5. If you haven't done so already, make your own **self-signed certificates**.
Instructions are [here](https://github.com/hanstxu/alexa_endpoint_js/tree/master/certificates).
I have an example certificate in my repository to show you what one should
look like but you should really use your own.

6. Run the server.
```bash
sudo npm start
```

### Code

**app/alexa.cpp** is the place you want to look for writing logic to respond to
different Alexa requests. There is an **exports.handler** function that is
analogous to the one that AWS Lambda provides for Node.js.

```javascript
exports.handler = function(request, callback) {
  // Populate this with your own application id
  if (request.session.application.applicationId !==
    "TODO: fill in with your Skill application id")
    callback("Invalid application id!");
  
  if (request.request.type === "LaunchRequest")
    createResponse("You invoked this skill with a launch request.", callback);
  else if (request.request.type === "IntentRequest")
    createResponse("You invoked this skill with " +
      request.request.intent.name + ".", callback);
  else
    createResponse("You invoked this skill with an unknown request.", callback);
}
```

*Your skill* **_Application Id_** * can be found on the Amazon developer portal
as shown in the screenshot below.*

![Application Id](https://raw.githubusercontent.com/hanstxu/alexa_endpoint_cpp/master/screenshots/application_id.png)