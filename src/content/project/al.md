---
title: Aluminium
author: Weston Gorczyca
pubDatetime: 2026-6-10T14:42:46.043Z
modDatetime: 2026-6-10T14:42:46.043Z
slug: aluminium
featured: true
draft: false
tags:
  - go
  - aluminium
ogImage: https://res.cloudinary.com/noezectz/v1663745737/astro-paper/astropaper-x-forestry-og_kqfwp0.png
description:
  Aluminium is a peak package manager 🏔️🏔️🏔️🏔️🏔️🏔️
---
# Aluminium
## Packages
Aluminium is a peak package manager 🏔️🏔️🏔️🏔️🏔️🏔️. It is a tool that allows you to manage your packages and dependencies in a simple and efficient way. With Aluminium, you can easily install, update, and remove packages from your project.
You can easily install packages from the Aluminium registry or from other sources. 
Here are some example commands:
```bash
aluminium install package-name
aluminium update package-name
aluminium uninstall package-name
aluminium update
al install test@1.0
al upgrade test
al package register
al package upload-binary
```
## Containers
Aluminium also allows you to run and manage containers with the container subcommand. For this, you will need the latest container-tools version.
```bash
al install container-tools
al container launch ubuntu --source dockerhub
al container ps
al container stop
```

## Users and Scopes
By default, Aluminium users have only the read permission, in order to achieve more perms, please ask an admin
```bash
al user create # follow instructions
al token create # follow instructions
```

## Configuration
All configuration is stored in the .aluminium folder
```bash
al config set-interactive true # useful for interactive popups
al config show
```