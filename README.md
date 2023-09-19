# Installation
- Download [skaffold](https://skaffold.dev)
- Download [Docker](https://docker.com)
- Install a local k8s cluster
    - (Linux) [minikube](https://github.com/kubernetes/minikube)
    - (Window/Mac) Enable k8s in your Docker Desktop settings.
- Add `tb.local` to hosts file in order to access the local k8s easier.
    - (Linux/Mac) `echo "127.0.0.1 tb.local" | sudo tee -a /etc/hosts`
    - (Windows) `echo 127.0.0.1 tb.local >> C:\Windows\System32\drivers\etc\hosts`
