import { set } from "lodash";

const en = {};

if (process.server) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const requireContext = require.context(".", true, /.json$/);

  requireContext.keys().forEach((file: string): void => {
    const name = file
      .substr(2, file.length - 7)
      .split("/")
      .join(".");
    set(en, name, requireContext(file));
  });
}

export default en;
