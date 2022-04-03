---
sidebar_position: 2
---

## Architecture Diagram

// insert image here

## Components

Our solution, **roboCAPTCHA**, is comprised of four services and a static site for documentation. We have chosen to go with a **microservices** architecture so that we can achieve a decoupled and highly scalable design.

These services include:
- Backend Service
- Frontend User Interface
- Call Screening Service
- Notifications Service

Having a microservices architecture allows our product to be designed in different languages but communicate over a common language through scalable GraphQL endpoints, WebSockets or SQS Queues.

## Deployment

Our services are deployed on the cloud, providing maximum reliability and ensuring that our services remain reachable with high availability. As indicated in our architecture diagram, we used a multitude of cloud providers to avoid vendor lock-in, including Google Cloud Platform, Firebase, Amazon Web Services, Netlify, and CloudFlare Pages.

## Containerization

Our services are containerized, allowing for easy setup if Docker is installed.