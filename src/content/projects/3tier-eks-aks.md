---
title: "3-Tier App: EKS & AKS"
summary: "The same .NET 3-tier app deployed twice — once to Amazon EKS, once to Azure AKS — to compare the two platforms directly"
tags: ["Kubernetes", "AWS", "Azure", "EKS", "AKS", "Ingress"]
stack: [".NET Core", "PostgreSQL", "Kubernetes", "Nginx Ingress", "Docker Hub"]
date: 2026-08-04
featured: false
---

Deployed the same 3-tier .NET Core application — a backend API, an
Nginx-served frontend, and PostgreSQL — to two different managed
Kubernetes platforms from the same Docker images, to compare the
operational differences directly rather than just reading about them.

**On Amazon EKS**, the app went live successfully with the full request
path — UI to Ingress to API to Postgres — confirmed working end to end.
Getting there meant fixing two real bugs: a Postgres pod label collision
with another project sharing the cluster, and a frontend pointed at an
internal-only cluster DNS name instead of its public Ingress hostname.

**On Azure AKS**, the deployment hit a genuine platform-level issue first —
a cluster whose API server FQDN never received a DNS record, even
internally — resolved by recreating the cluster rather than debugging a
one-off control-plane bug. The app deployed cleanly after that, though a
routing edge case in how the frontend builds its API paths was left as an
open item when the lab wrapped up.

Running the same workload on both platforms surfaced real differences in
Ingress configuration, DNS behavior, and failure modes — the kind of
comparison that's hard to get from documentation alone.
