schema "app" {
  name = "app"
}

table "users" {
  schema = schema.app
  primary_key {
    columns = [column.id]
  }

  unique "users_email_unique" {
    columns = [column.email]
  }

  column "id" {
    type = uuid
    null = false
  }

  column "name" {
    type = varchar(255)
    null = false
  }

  column "email" {
    type = varchar(255)
    null = false
  }

  column "emailVerified" {
    type = boolean
    null = false
    default = false
  }

  column "updatedAt" {
    type = timestamp
    null = false
  }
}
