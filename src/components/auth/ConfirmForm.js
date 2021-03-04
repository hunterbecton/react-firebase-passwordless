import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Heading,
  GridItem,
  Alert,
  AlertIcon,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

const ConfirmForm = () => {
  const { handleSubmit, register, errors, setError, formState } = useForm();

  const { signInWithEmailLink } = useAuth();

  const history = useHistory();

  const location = useLocation();

  const onSubmit = async data => {
    try {
      await signInWithEmailLink(data.email, location.search);
      history.push('/');
    } catch (error) {
      setError('email', {
        type: 'manual',
        message: error.message,
      });
    }
  };

  return (
    <GridItem
      colStart={[1, null, null, 2, null, null]}
      colSpan={[3, null, null, 1, null, null]}
      p={6}
    >
      <Heading as="h1" mb={6}>
        Confirm Email
      </Heading>
      {errors.email && (
        <Alert status="error" variant="subtle" mt={6} mb={6}>
          <AlertIcon />
          {errors.email.message}
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input name="email" placeholder="Email" ref={register()} />
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </GridItem>
  );
};

export default ConfirmForm;
