import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import FaceIcon from '@/assets/icons/facebook.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import useFormLogin from '@/actions/useFormLogin';

import { Input } from '../Input';
import ButtonForm from './Button';
import * as S from './styles';

const schema = z.object({
  user: z.string().min(3, 'Usuário ou email inválido'),
  password: z.string().min(8, 'Caractere mínimo 8')
});

type DataForm = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<DataForm>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  });

  const { view, handleClickToView } = useFormLogin();

  const erroUser = !!errors.user?.message;
  const erroPassword = !!errors.password?.message;

  return (
    <S.FormContainer>
      <div>
        <S.Content>
          <h1>Minha conta</h1>
          <p>Insira seus dados para acessar o sistema</p>
        </S.Content>
        <S.Form onSubmit={handleSubmit((data) => alert(data.user))}>
          <Input.Root>
            <Input.Label text="Usuário ou e-mail" />
            <Input.Group isError={erroUser}>
              <Input.Element type="text" {...register('user')} />
            </Input.Group>
            <Input.ErroMessage message={errors.user?.message} />
          </Input.Root>
          <Input.Root>
            <S.ContentLink>
              <Input.Label text="Senha" />
              <Link href="#">Esqueceu sua senha?</Link>
            </S.ContentLink>
            <Input.Group isError={erroPassword}>
              <Input.Element type="password" {...register('password')} />
              <S.ButtonViewPassword type="button" onClick={handleClickToView}>
                <Image
                  src={
                    !view
                      ? '/assets/icons/eye-slash.svg'
                      : '/assets/icons/eye.svg'
                  }
                  alt="olhos fechados"
                  width={20}
                  height={20}
                />
              </S.ButtonViewPassword>
            </Input.Group>

            <Input.ErroMessage message={errors.password?.message} />
          </Input.Root>
          <ButtonForm
            variants="primary"
            type="submit"
            disabled={erroUser || erroPassword}
          >
            Acessar
          </ButtonForm>
        </S.Form>

        <S.ContainerSocial>
          <div>
            <div /> <p>ou</p> <div />
          </div>
          <ButtonForm variants="secondary">
            <GoogleIcon />
            Login com o Google
          </ButtonForm>
          <ButtonForm variants="secondary">
            <FaceIcon />
            Login com o Facebook
          </ButtonForm>
        </S.ContainerSocial>
        <S.Footer>
          <p>
            Não tem uma conta?
            <Link href="#">Experimente grátis</Link>
          </p>
        </S.Footer>
      </div>
    </S.FormContainer>
  );
}
export default Form;
