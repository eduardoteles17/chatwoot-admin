import { signIn } from "@chatwoot-admin/app/auth";
import { Button, Container, Paper, Title } from "@mantine/core";

export default function LoginPage() {
  const onLoginHandler = async () => {
    "use server";

    await signIn("oauth");
  };

  return (
    <Container className="w-md my-48">
      <Title ta="center" className="font-medium">
        Bem vindo de volta!
      </Title>
      <Paper withBorder className="shadow-sm p-4 mt-4">
        <Button className="!w-full" onClick={onLoginHandler}>
          Fazer login
        </Button>
      </Paper>
    </Container>
  );
}
