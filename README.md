# Class-QQ-Instant-Messaging-AI-Avatar

`integration-six-layer` is the current integration branch of this repository.

This branch has already been reorganized from the original six-layer collaboration view back into a standard runnable project layout, while preserving the six contributors' historical layer commits in Git history.

## Project Overview

This project is an instant messaging system with AI avatar dialogue capabilities. It contains:

- a Vue 3 frontend client
- a Spring Boot backend service
- WebSocket-based real-time messaging
- bot orchestration and AI conversation capabilities
- long-term memory / RAG-related modules
- Redis / MySQL / RabbitMQ-oriented distributed evolution support
- containerized deployment files and testing scripts

The repository is currently suitable for:

- team collaboration and contribution display
- branch-based module ownership
- local development and build verification
- later integration into a more stable production branch workflow

## Current Branch Role

This branch, `integration-six-layer`, is the main working integration branch of the repository.

It is used for:

- integrating the six contributor branches
- restoring the repository into a runnable structure
- continuing shared development after the six-way split
- serving as the main branch to inspect the combined contribution history

The temporary `main` branch that was created during integration has already been removed. The repository should now be understood as centered on `integration-six-layer`.

## Core Capabilities

The current integrated codebase includes the following main capabilities:

- user registration, login, JWT-based authentication, and profile management
- friend management and group chat management
- private chat and group chat messaging
- message persistence and message status synchronization
- WebSocket real-time communication
- online status management
- bot conversation, active mode, and automated response orchestration
- memory cache, long-term memory, and retrieval-oriented AI support
- deployment files for Docker, Nginx, Redis, MySQL, and RabbitMQ-related setup
- observability-related backend configuration

## Repository Structure

The repository has been restored to a normal runnable layout:

```text
.
├─ chatroom-client/     Frontend project (Vue 3 + Vite)
├─ chatroom-server/     Backend project (Spring Boot)
├─ data/                Skill and memory seed data
├─ deploy/              Deployment and middleware helper files
├─ docs/                Project design and test documentation
├─ test/                Stress test and verification scripts
├─ docker-compose.yml   Integrated local deployment entry
└─ README.md
```

### Directory Description

- `chatroom-client`
  Frontend interface, routing, chat page, message display, stores, and WebSocket client logic.

- `chatroom-server`
  Backend API, authentication, business services, persistence, WebSocket handling, bot services, memory services, and distributed evolution support.

- `data`
  Skill presets and reference data used by the AI / character-related modules.

- `deploy`
  Middleware-related deployment helper files, such as RabbitMQ plugin configuration.

- `docs`
  Design documentation, memory-system notes, and testing-related documents.

- `test`
  Stress tests, bot tests, setup scripts, and sample import data.

## Six-Layer Collaboration History

This repository was originally organized as six collaboration branches, one per responsibility layer. Those branches are still preserved and remain useful for contribution analysis and responsibility tracing.

### Layer Branch Mapping

- `layer-01-access-boundary`
  Access and boundary layer

- `layer-02-realtime-session-routing`
  Real-time communication and session routing layer

- `layer-03-message-persistence`
  Message domain and session persistence layer

- `layer-04-social-organization`
  Social relationship and organization domain

- `layer-05-bot-ai-orchestration`
  Bot orchestration and AI execution layer

- `layer-06-memory-infra-governance`
  Memory retrieval and infrastructure governance layer

### Contributor Mapping

- `eeeeeeex1 <2629620478@qq.com>`
  Layer 01 and integration / README / structure reorganization work

- `Ismweirdo <2074437070@qq.com>`
  Layer 02

- `Jungle-Cristo <jungle920@qq.com>`
  Layer 03

- `Jay7982024 <1731614640@qq.com>`
  Layer 04

- `Yuanxiaelf <1056606933@qq.com>`
  Layer 05

- `kuuzzzzzzzzzz <kuuzzzz@163.com>`
  Layer 06

## Architecture Summary

From an engineering perspective, the project is currently organized as:

- frontend application: `chatroom-client`
- backend application: `chatroom-server`
- persistent storage: MySQL
- cache / queue support: Redis
- optional STOMP relay support: RabbitMQ
- deployment integration: Docker Compose + Nginx

From a collaboration perspective, the project still preserves the history of the original six-layer split.

From a distributed-evolution perspective, the project already includes the first round of improvements such as:

- configurable WebSocket broker mode
- Redis-based online status management
- outbox-based message event processing
- message delivery / read-state flow
- bot state persistence support
- observability-related runtime metrics configuration

## Local Development

### Frontend

Install dependencies:

```bash
cd chatroom-client
npm install
```

Start development server:

```bash
npm run dev
```

Build frontend:

```bash
npm run build
```

### Backend

Package backend:

```bash
cd chatroom-server
mvn -DskipTests package
```

Run backend locally:

```bash
mvn spring-boot:run
```

You can also override environment-dependent settings such as:

- MySQL host / port / database / username / password
- Redis host / port
- WebSocket broker mode
- STOMP relay host / port

## Docker Deployment

The repository includes `docker-compose.yml` and related deployment files for integrated startup.

Typical included services and files:

- frontend container
- backend container
- MySQL
- Redis
- RabbitMQ-related configuration
- Nginx frontend serving setup

This branch is therefore suitable both for local manual startup and for container-based integrated deployment experiments.

## Build Verification Status

The integrated runnable structure on this branch has already been verified locally with:

```bash
cd chatroom-server
mvn -DskipTests package
```

and:

```bash
cd chatroom-client
npm install
npm run build
```

That means the current `integration-six-layer` branch is not only a documentation or split-view branch; it has already been restored into a buildable integrated project layout.

## Documentation and Testing

Additional documents and scripts are available under:

- `docs/README.md`
- `docs/memory-system-design.md`
- `docs/test-design.md`
- `docs/test-results.md`
- `test/`

These are useful for:

- project introduction
- design explanation
- memory-system understanding
- stress-test reference
- demonstration preparation

## Branch Usage Recommendation

Recommended usage going forward:

- use `integration-six-layer` as the default integration branch
- continue feature-level work on dedicated branches when needed
- merge back into `integration-six-layer` after verification
- use the preserved `layer-*` branches for contribution explanation and responsibility mapping

If the team later wants a cleaner release strategy, a new release-oriented branch can be created from `integration-six-layer`.

## Important Note

The original six-folder collaboration view has already been removed from the working tree of this branch, because the branch has been restored to a runnable project structure.

However:

- the six historical collaboration branches are still preserved
- the contributor ownership history is still preserved in Git
- later contribution analysis should be performed primarily against `integration-six-layer`

## Summary

`integration-six-layer` is now the repository's integrated, buildable, team-collaboration branch.

It simultaneously preserves:

- the six-person collaboration history
- the modular branch ownership structure
- the restored runnable project layout
- the basis for further development, testing, and presentation
