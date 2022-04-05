---
sidebar_position: 2
---

### Easy Deployment for all Services

Our web app can be found at url: https://robocaptcha.xyz/

You can deploy all services locally through docker-compose by executing the following commands after ensuring that your ports 4999, 5000-5003 are open:

```bash
docker-compose up -d --build
```
Do note that it may take up to 10 minutes to pull and build all images for the first time.

### Individual Services

Alternatively, you may refer to our documentation for local deployment options for each service.

### Using roboCAPTCHA

To test out our web app features, you may log into a test account (either with Google authenticator or standard email/pw login) we have prepared
using the following credentials:
- Email: robocaptchatest at gmail.com
- Password: roboTester38

After logging in, you may observe the call analytics for the user. To test our robocall filtering feature, you may call the masked number +6531351356.
You can also observe a notification received when a call is made, which includes the status of the call (successful, blocked, timeout, whitelist, blacklist).

You may also change the phone number of the account under the Profile tab, which will change the number that the masked number routes to.

To test our whitelist and blacklist features, click on the Lists tab. You may add your personal caller number in either list with the '+'
icon, remember to include the country code prefix e.g. '+65' to your number. You may call the masked number again to observe the resultant effect.

