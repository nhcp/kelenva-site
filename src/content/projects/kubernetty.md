---
title: "Kubernetty"
summary: "A self-built, highly-available Kubernetes control plane — proving I understand what a managed service like EKS is doing underneath"
tags: ["Kubernetes", "High Availability", "MySQL", "nginx", "AWS EC2"]
stack: ["k3s", "nginx", "MySQL", "AWS EC2", "Terraform"]
date: 2026-08-13
featured: true
repoUrl: "https://github.com/nhcp/devops.restauranty/blob/main/docs/kubernetty-demo-guide.md"
---
Restauranty proves I can deploy a real application onto Kubernetes.
Kubernetty proves the other half — that I understand what a managed control
plane like EKS is actually doing underneath, by building one myself.

An nginx TCP load balancer sits in front of two k3s server nodes that share
cluster state through an external MySQL datastore, rather than each keeping
its own isolated copy. A separate worker node joins the cluster through the
load balancer, not directly to either server.

The high-availability claim wasn't just written down, it was tested. With a
real workload running, one of the two control-plane nodes was stopped
outright. The cluster and the workload both kept running without
interruption, and the stopped node rejoined the cluster automatically the
moment it came back — no manual reconfiguration, no re-joining by hand.
