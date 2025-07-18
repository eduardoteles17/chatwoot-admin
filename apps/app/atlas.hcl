env "dev" {
  src = ["./database.pg.hcl"]
  url = "postgresql://postgres:chatwoot-admin@localhost:5432/chatwoot-admin?sslmode=disable"
  dev = "docker+postgres://bitnami/postgresql:17.5.0/chatwoot-admin?sslmode=disable"
  migration {
    dir = "file://migrations"
  }
}
