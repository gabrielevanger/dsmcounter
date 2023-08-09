import Head from 'next/head';
import { FormEvent, useState } from 'react';

import Form from '@/components/Form';
import HeaderLogin from '@/components/HeaderLogin';

import * as S from './styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Smart Manager</title>
        <meta name="description" content="Generated by M2 Smart Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <S.Main>
        <HeaderLogin />

        <Form />
      </S.Main>
    </>
  );
}
