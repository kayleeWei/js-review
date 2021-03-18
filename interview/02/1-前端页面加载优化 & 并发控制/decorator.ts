export function measure(target: any, name: string, descriptor: any) {
  const oldVaule = descriptor.value;

  descriptor.value = async function() {
    console.time(name);
    const ret = await oldVaule.apply(this, arguments);
    
    console.timeEnd(name);
    return ret;
  }

  return descriptor;
}