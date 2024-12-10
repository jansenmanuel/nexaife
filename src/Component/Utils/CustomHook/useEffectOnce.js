/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect, useRef } from 'react';

/**
 * Hooks to only call effect function once
 * @param {EffectCallback} effect
 */
const useEffectOnce = (effect) => {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (!isFirstRun.current) return;
    isFirstRun.current = false;
    effect && effect();
  }, []);
};

export default useEffectOnce;
