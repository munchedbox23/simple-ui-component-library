import { FC, FormEvent } from "react";
import styled from "styled-components";
import { Stack, Button, Input, Text } from "..";

type TFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const StyledForm = styled.form`
  border: 2px solid #d1d5db;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const StyledText = styled(Text)`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  margin-top: 0.5rem;
`;

export const Form: FC<TFormProps> = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Stack direction="column" align="center" justify="center">
        <StyledText as="h2" weight="bold" align="center" size="3xl">
          Login
        </StyledText>
        <StyledText as="span" emphasis={"low"} size={"sm"} align={"center"}>
          Please enter your credentials to login
        </StyledText>
        <StyledText as="label" htmlFor="username" size={"sm"} weight={"medium"}>
          Username
        </StyledText>
        <StyledInput type="text" id="username" placeholder="Username" />

        <StyledText as="label" htmlFor="password" size={"sm"} weight={"medium"}>
          Password
        </StyledText>
        <StyledInput id="password" type="password" placeholder={"Password"} />
        <StyledButton size="md" type="submit" variant="primary">
          Sign in
        </StyledButton>
      </Stack>
    </StyledForm>
  );
};
