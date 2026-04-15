# Restrackit Core (Showcase)

Backend FastAPI per tracciabilità e gestione inventario ristoranti, con OCR/AI per ridurre il data-entry su etichette e documenti (lotti, scadenze, anagrafiche).

- Repository: https://github.com/Restrackit/restrackit-core
- Docs online: https://drinkwhat.github.io/restrackit-core/

## Stack

- Python 3.13+, FastAPI, Pydantic v2, SQLAlchemy 2, Alembic
- PostgreSQL 16
- Keycloak (OIDC/JWT)
- pytest + coverage, Ruff, mypy
- CI/CD con GitHub Actions + Codecov

## Quick start (local)

```bash
git clone https://github.com/Restrackit/restrackit-core
cd restrackit-core
cp .env.example .env
make up-local
```

Swagger UI: http://localhost:8000/docs
