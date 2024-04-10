'use client';

import { Wrapper } from '@/components/Wrapper';
import { useEffect } from 'react';

export default function Error({ error, reset }: any) {
  useEffect(() => {
    // Логирование ошибки
    console.error(error);
  }, [error]);

  return (
    <Wrapper>
      <h2>Что-то пошло не так!</h2>
      <button onClick={reset}>Попробовать снова</button>
    </Wrapper>
  );
}
