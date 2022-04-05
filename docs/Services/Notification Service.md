---
sidebar_position: 4
---

Allow real-time notifications to reach users currently using the roboCAPTCHA web app, alerting them of any blocked robo calls detected by our filtering system or any legitimate human callers that successfully 
passed our verification.

Makes use of Amazon SQS to receive messages from the roboCAPTCHA service, sends notifications to the 
user on roboCAPTCHA frontend web app through a WebSocket connection. 

### Environment Variables
| Name                     | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| MONGODB_URL              | Connection string to establish an instance for MongoDB          |
| AWS_SQS_NOTIFICATION_URL | URL endpoint that receives messages in AWS Simple Queue Service |
| AWS_ACCESS_KEY_ID        | AWS Access Key ID                                               |
| AWS_SECRET_ACCESS_KEY    | AWS Secret                                                      |

### Cloning the Repository
```bash
git clone https://github.com/phomies/robocaptcha-notification.git
```

### Local Deployment
``` bash
npm i
npm run start
```

### Local Deployment with Docker Compose
``` bash
docker-compose up -d --build
```