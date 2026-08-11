---
title: "Voting App on EKS"
summary: "Polyglot microservices voting app deployed to Amazon EKS with GitHub Actions CI/CD"
tags: ["Kubernetes", "AWS", "EKS", "CI/CD", "GitHub Actions"]
stack: ["Docker", "Kubernetes", "GitHub Actions", "Redis", "PostgreSQL"]
date: 2026-07-29
featured: false
---

Deployed the classic polyglot voting app — vote, result, and worker
services backed by Redis and Postgres — to a production-like Amazon EKS
cluster as part of an Ironhack DevOps bootcamp project.

Built a GitHub Actions pipeline to build and push Docker images and deploy
straight to the cluster on every change. Once both this project and the
related 3-tier lab were complete, tore the entire cluster down cleanly —
Kubernetes resources, load balancers, persistent volumes, and the
underlying CloudFormation stacks — including tracking down a
GuardDuty-managed network endpoint that was silently blocking VPC deletion
until it was manually removed.
