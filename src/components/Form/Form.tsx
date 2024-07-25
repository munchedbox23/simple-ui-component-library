import { Stack, Button, Input, Text } from "..";
import { FC, FormEvent } from "react";

type TFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const Form: FC<TFormProps> = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="border-2 border-gray-300 rounded-xl px-8 py-12 shadow-md"
    >
      <Stack direction="column" align="center" justify="center">
        <Text as="h2" weight="bold" align="center" size="3xl" className="mb-2">
          Login
        </Text>
        <Text
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          className="mb-4"
        >
          Please enter your credentials to login
        </Text>
        <Text
          as="label"
          htmlFor="username"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Username
        </Text>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          className="mb-4"
        />

        <Text
          as="label"
          htmlFor="password"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Password
        </Text>
        <Input id="password" type="password" placeholder={"Password"} />
        <Button
          label="Sign in"
          size="md"
          type="submit"
          variant="primary"
          className="mt-2"
        />
      </Stack>
    </form>
  );
};
