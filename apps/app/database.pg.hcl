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
    type    = boolean
    null    = false
    default = false
  }

  column "updatedAt" {
    type = timestamp
    null = false
  }
}

table "accounts" {
  schema = schema.app

  primary_key {
    columns = [column.provider, column.providerAccountId]
  }

  foreign_key "fk_accounts_user" {
    ref_columns = [table.users.column.id]
    columns     = [column.userId]
  }

  column "userId" {
    type = uuid
    null = false
  }

  column "type" {
    type = text
    null = false
  }

  column "provider" {
    type = text
    null = false
  }

  column "providerAccountId" {
    type = text
    null = false
  }

  column "refresh_token" {
    type = text
  }

  column "access_token" {
    type = text
  }

  column "expires_at" {
    type = int
  }

  column "token_type" {
    type = text
  }

  column "scope" {
    type = text
  }

  column "id_token" {
    type = text
  }

  column "session_state" {
    type = text
  }
}

table "sessions" {
  schema = schema.app

  primary_key {
    columns = [column.sessionToken]
  }

  column "sessionToken" {
    type = text
    null = false
  }

  column "userId" {
    type = uuid
    null = false
  }

  column "expires" {
    type = timestamp
    null = false
  }
}

table "verificationToken" {
  schema = schema.app

  primary_key {
    columns = [column.identifier, column.token]
  }

  column "identifier" {
    type = text
    null = false
  }

  column "token" {
    type = text
    null = false
  }

  column "expires" {
    type = timestamp
    null = false
  }
}
