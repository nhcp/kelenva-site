---
title: "Restauranty"
summary: "Microservices restaurant platform, deployed twice — once for AWS Kubernetes, once as its permanent self-hosted home"
tags: ["Kubernetes", "AWS", "EKS", "CI/CD", "Terraform", "Monitoring", "Security"]
stack: ["Node.js", "React", "MongoDB", "Docker", "Terraform", "GitHub Actions", "Traefik", "Prometheus", "Grafana"]
repoUrl: "https://github.com/nhcp/devops.restauranty"
demoUrl: "https://restauranty.kelenva.com"
date: 2026-08-13
featured: true
---
A food-ordering platform built as three independent Node.js services and a
React frontend, deployed and operated as a real system rather than a
one-time exercise.

It runs in two places on purpose. AWS EKS is the cloud-native version —
cluster and networking provisioned with Terraform, TLS issued automatically
by cert-manager, traffic restricted with Kubernetes NetworkPolicies (tested
live, not just written), and monitored with Prometheus and Grafana deployed
through Terraform's own Helm provider. Hetzner is the permanent home — a
self-managed VPS running the same containers behind Traefik, with its own
CI/CD pipeline, its own monitoring stack, daily automated database backups
with a tested restore, and a public status page.

Both environments deploy from the same Docker images through a GitHub
Actions pipeline that builds, tests, and pushes on every change, then waits
for a manual approval before touching either live server.

A few of the real problems hit along the way: a shared JWT secret that was
wired into one service's Kubernetes config but missed on the other two,
causing a crash loop that took a `kubectl logs` dive to trace; a security
group gap that only surfaced after a routine pod reschedule sent traffic
across nodes for the first time; and a stubborn health-check failure that
survived a retry loop with backoff — the retries not helping was itself the
clue that the real bug was a protocol mismatch, not a timing issue.

Live demo: https://restauranty.kelenva.com
Status page: https://status.kelenva.com/status/kelenva
Monitoring: https://grafana.kelenva.com
