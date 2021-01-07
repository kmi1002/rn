export const printDebug = (target: string, msg: any = '') => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`${target} : ${msg}\n\n`);
  }
};

export const printInfo = (msg: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log({ msg });
  }
};
