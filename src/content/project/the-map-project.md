---
title: The Map Project
author: Weston Gorczyca
pubDatetime: 2024-09-22T18:04:41.191Z
modDatetime: 2024-09-27T21:19:01.739Z
slug: the-map-project
featured: true
draft: false
tags:
  - flask
  - web
  - mysql
ogImage: https://res.cloudinary.com/noezectz/v1663745737/astro-paper/astropaper-x-forestry-og_kqfwp0.png
description:
  The Map Project is a fun way to store locations.
---

# Map

Map platform that stores friend locations

# Setup guidelines

1. Clone the repository with
```bash
git clone PandaTwoxx/Map
```

2. Install required things:

To install poetry/pipx:
- 1. Install homebrew
- 2. Run these commands
```bash
brew install pipx
pipx install poetry
```

To install homebrew

- 1. Sit down
- 2. Question your life choices
- 3. Run this command:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install docker yourself because I can't spend all my life coaching you to do basic things

3. Run the following commands:
```bash
poetry install
poetry shell
python3 manage.py run
```

4. Or run

```bash
docker compose up --build
```


5. Open the browser and go to `http://localhost:8080/`
