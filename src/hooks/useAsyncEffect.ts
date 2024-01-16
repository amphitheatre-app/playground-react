import { useEffect, useState } from "react";

export const useAsyncEffect = (effect: () => Promise<any>, deps: any[]) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await effect();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // 空数组表示仅在组件挂载时执行一次
};
