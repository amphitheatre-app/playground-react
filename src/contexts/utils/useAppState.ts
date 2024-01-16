import { useEffect, useState } from "react";
import { UseAppStateProps, UseAppState } from "../../types";
import { createId } from "../../server";
import { useAsyncEffect } from "../../hooks";

export const useAppState = (props: UseAppStateProps): UseAppState => {
  const { path, entry,branch } = props;
  const [pgId, setPgid] = useState("");
  useAsyncEffect(async () => {
    console.log("createId", path, entry);
    setPgid("test1");
    // await createId();
  }, [path, entry]);
  return {
    pgId,
  };
};
