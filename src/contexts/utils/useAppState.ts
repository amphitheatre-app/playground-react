import { useEffect, useState } from "react";
import { UseAppStateProps, UseAppState } from "../../types";
import { creatPlayground, createId } from "../../server";
import { useAsyncEffect } from "../../hooks";

export const useAppState = (props: UseAppStateProps): UseAppState => {
  const { path, entry, branch } = props;
  const [pgId, setPgid] = useState("");
  useAsyncEffect(async () => {
    const { id } = await creatPlayground({ repo: path, branch });
    setPgid(id);
  }, [path, entry, branch]);
  return {
    pgId,
  };
};
