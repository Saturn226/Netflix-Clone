import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form.js';

export default function Form({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Submit = function FormSubmit({ ...restProps }) {
  return <Submit {...restProps} />;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link></Link>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};
