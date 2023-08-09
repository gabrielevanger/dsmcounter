import { useState } from 'react';

export default function useFormLogin() {
  const [view, setView] = useState<boolean>(false);

  const handleClickToView = () => setView(!view);

  return {
    view,
    handleClickToView
  };
}
